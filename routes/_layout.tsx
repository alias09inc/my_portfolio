import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";

interface LayoutState {
  currentPath: string;
}

export default function Layout(
  { Component, state }: PageProps<unknown, LayoutState>,
) {
  return (
    <div className="layout">
      <Header currentPath={state.currentPath} />
      <Component />
      <div className="footer">
      </div>
    </div>
  );
}
