import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const configRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.buoyConfig.findFirst({
                where : {
                    id : parseInt(input),
                },
            });
        }),

    create : publicProcedure
        .input(z.object({
            interval: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.buoyConfig.create({
                data: {
                    interval : parseInt(input.interval),
                },
            });
        }),

    update : publicProcedure
        .input(z.object({
            id : z.string(),
            interval: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.buoyConfig.update({
                where:{
                    id : parseInt(input.id),
                },
                data: {
                    interval : parseInt(input.interval),
                },
            });
        }),
});
