import { FreshContext } from "$fresh/server.ts";

export function handler(_req: Request, ctx: FreshContext) {
  const url = new URL(_req.url);
  ctx.state.currentPath = url.pathname;
  console.log(`Request to ${url.pathname}`);
  return ctx.next();
}
