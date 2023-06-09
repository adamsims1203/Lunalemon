import * as trpc from "@trpc/server";
import { fetchRouter } from "_server/fetch";
import { formRouter } from "_server/forms";
import { Context } from "_server/settings/context";
import superjson from "superjson";

export const transformer = superjson;

export const apiRoutes = trpc
  .router<Context>()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
  .middleware(async ({ path, type, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;

    return result;
  })

  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge("fetch.", fetchRouter)
  .merge("form.", formRouter);

// export type definition of API
export type AppRouter = typeof apiRoutes;
