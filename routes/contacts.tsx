import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import { FunctionalComponent } from "preact/src/index.d.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    return ctx.render({ currentPath: url.pathname });
  },
};

const Home: FunctionalComponent<PageProps<{ currentPath: string }>> = (
  { data },
) => {
  return (
    <div>
      <Header currentPath={data.currentPath} />
      <h1>Welcom!</h1>
    </div>
  );
};

export default Home;