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
});
