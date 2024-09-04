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
});
