import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input}) => {
            return ctx.db.deployedBuoy.findFirst({
                where : {
                    id : parseInt(input),
                },
            });
        }),
    
    getByLocation : publicProcedure
        .input(z.string())
        .query(({ctx, input}) => {
            return ctx.db.deployedBuoy.findMany({
                where : {
                    location : input,
                },
            })
        }),

    create : publicProcedure
        .input(z.object({
          name : z.string(),
          location : z.string(),
          configId : z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.deployedBuoy.create({
                data: {
                    name : input.name,
                    location : input.location,
                    configId : parseInt(input.configId),
                },
            });
        }),

    update : publicProcedure
        .input(z.object({
          id : z.string(),
          name : z.string(),
          location : z.string(),
          configId : z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.deployedBuoy.update({
                where:{
                    id : parseInt(input.id),
                },
                data: {
                    name : input.name,
                    location : input.location,
                    configId : parseInt(input.configId),
                },
            });
        }),
});
