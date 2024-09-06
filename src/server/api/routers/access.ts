import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accessRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, id }) => {
            return ctx.db.buoyAccess.findFirst({
                where : {
                    id : id,
                },
            });
        }),

    getByBuoy : publicProcedure
        .input(z.string())
        .query(({ ctx, buoy_id }) => {
            return ctx.db.buoyAccess.findMany({
                where : {
                    buoyId : buoy_id,
                },
            });
        }),

    getByUser : publicProcedure
        .input(z.string())
        .query(({ ctx, user_id }) => {
            return ctx.db.buoyAccess.findMany({
                where : {
                    userId : user_id,
                },
            });
        }),

    create : publicProcedure
        .input(z.object({
            userId: z.string(),
            buoyId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.buoyAccess.create({
                data: {
                    userId : parseInt(input.userId),
                    buoyId : parseInt(input.buoyId),
                },
            });
        }),


    update : publicProcedure
        .input(z.object({
            id : z.string(),
            userId: z.string(),
            buoyId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.buoyAccess.update({
                where: {
                    id : parseInt(input.id),
                },
                data: {
                    userId : parseInt(input.userId),
                    buoyId : parseInt(input.buoyId),
                },
            });
        }),

});
