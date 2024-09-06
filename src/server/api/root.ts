import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/post";
import { userRouter } from "./routers/user";
import { buoyDataRouter } from "./routers/buoyData";
import { buoyRouter } from "./routers/buoy";
import { configRouter } from "./routers/config";
import { accessRouter } from "./routers/access";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  buoy: buoyRouter,
  config: configRouter,
  buoyData: buoyDataRouter,
  access: accessRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
