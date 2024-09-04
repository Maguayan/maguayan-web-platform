import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, clerk_id }) => {
            return ctx.db.user.findFirst({
                where : {
                    clerkId : clerk_id,
                },
                select : {
                    id : true,
                    name : true,
                },
            });
        }),

    getAccess : publicProcedure
        .input(z.string())
        .query(({ ctx, clerk_id }) => {
            return ctx.db.user.findFirst({
                where : {
                    clerkId : clerk_id,
                },
                select : {
                    hasAccessTo : true,
                },
            });
       }),
});
