import { PageProps } from "$fresh/server.ts";
import {
  GlassButton,
  GlassCard,
  GlassSection,
} from "../components/grassmorphism.tsx";

const Home = () => {
  return (
    <>
      <h1>Welcome to my HomePage</h1>
      <GlassSection>
        <GlassCard title="Basic Card" description="This is a basic card">
          <GlassButton href="/about">Click Me</GlassButton>
        </GlassCard>
      </GlassSection>
    </>
  );
};

export default Home;
