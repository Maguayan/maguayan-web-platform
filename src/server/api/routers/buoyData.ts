import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyDataRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.detectProcesses.findFirst({
                where : {
                    id : input,
                },
            });
        }),

    getLatest : publicProcedure
        .input(z.string())
        .query(({ctx, input}) => {
            return ctx.db.detectProcesses.findMany({
                where : {
                    buoyId : input,
                },
                orderBy : [
                    {
                        createdAt : 'desc'
                    },
                ],
            });
        }),
});
