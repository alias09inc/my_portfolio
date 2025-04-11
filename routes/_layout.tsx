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
    <div className="layout relative min-h-screen">
      <Header currentPath={state.currentPath} />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <TriangleBackground/>
      </div>
      <div className="content pt-16">
        <Component />
      </div>
    </div>
  );
}
