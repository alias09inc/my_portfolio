import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div className="layout">
      <div className="header">
      </div>
      <Component />
      <div className="footer">
      </div>
    </div>
  );
}
