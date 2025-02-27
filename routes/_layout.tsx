import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import TriangleBackground from "../components/TriangleBackground.tsx";

interface LayoutState {
  currentPath: string;
}

export default function Layout(
  { Component, state }: PageProps<unknown, LayoutState>,
) {
  return (
    <div className="layout">
      <div className="">
      <TriangleBackground/>
      </div>
      <Header currentPath={state.currentPath} />
      <Component />
    </div>
  );
}
