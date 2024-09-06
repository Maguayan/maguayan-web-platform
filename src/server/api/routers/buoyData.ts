import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyDataRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, id }) => {
            return ctx.db.detectProcesses.findFirst({
                where : {
                    id : id,
                },
            });
        }),

    getByBuoy : publicProcedure
        .input(z.string())
        .query(({ ctx, buoy_id }) => {
            return ctx.db.detectProcesses.findMany({
                where : {
                    bouyId : buoy_id,
                },
            });
        }),

    getLatest : publicProcedure
        .input(z.string())
        .query(({ctx, buoy_id}) => {
            return ctx.db.detectProcesses.findFirst({
                where : {
                    buoyId : buoy_id,
                },
                orderBy : [
                    {
                        createdAt : 'desc'
                    },
                ],
            });
        }),
});
