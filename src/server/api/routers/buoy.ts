import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, id}) => {
            return ctx.db.deployedBuoy.findFirst({
                where : {
                    id : id,
                },
            });
        }),
    
    getByLocation : publicProcedure
        .input(z.string())
        .query(({ctx, location}) => {
            return ctx.db.deployedBuoy.findMany({
                where : {
                    location : location,
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
                    configId : input.configId,
                },
            });
        }),
});
