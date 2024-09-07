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

    create : publicProcedure
        .input(z.object({
            name: z.string(),
            clerkId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            return ctx.db.user.create({
                data: {
                    name : input.name,
                    clerkId : input.clerkId,
                },
            });
        }),

});
