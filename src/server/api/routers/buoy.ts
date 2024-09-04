import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input}) => {
            return ctx.db.deployedBuoy.findFirst({
                where : {
                    id : input,
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
});
