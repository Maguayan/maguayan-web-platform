import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const configRouter = createTRPCRouter({
    getById : publicProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.db.buoyConfig.findFirst({
                where : {
                    id : input,
                },
            });
        }),
});
