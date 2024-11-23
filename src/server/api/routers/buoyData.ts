import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const buoyDataRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.detectProcesses.findFirst({
                where : {
                    id : parseInt(input),
                },
            });
        }),

    getByBuoy : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.detectProcesses.findMany({
                where : {
                    buoyId : parseInt(input),
                },
            });
        }),

    getLatest : publicProcedure
        .input(z.string())
        .query(({ctx, input}) => {
            return ctx.db.detectProcesses.findFirst({
                where : {
                    buoyId : parseInt(input),
                },
                orderBy : [
                    {
                        createdAt : 'desc'
                    },
                ],
            });
        }),

    getThisDateRange : publicProcedure
        .input(z.object({
            id : z.string(),
            dateFrom : z.date(),
            dateTo : z.date(),
        }))
        .query(({ctx, input}) => {
            return ctx.db.detectProcesses.findMany({
                where : {
                    buoyId : parseInt(input.id),
                    createdAt : {
                        gt : input.dateFrom,
                        lt : input.dateTo,
                    }
                },
                orderBy : [
                    {
                        createdAt : 'desc'
                    },
                ],
            });
        }),
});
