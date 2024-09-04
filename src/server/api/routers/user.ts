import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.user.findFirst({
                where : {
                    clerkId : input,
                },
                select : {
                    id : true,
                    name : true,
                },
            });
        }),

    getAccess : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.user.findFirst({
                where : {
                    clerkId : input,
                },
                select : {
                    hasAccessTo : true,
                },
            });
       }),
});
