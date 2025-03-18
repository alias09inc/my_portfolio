import { PageProps } from "$fresh/server.ts";
import {
  GlassButton,
  GlassCard,
  GlassSection,
  GlassShowcase,
} from "../components/glassmorphism.tsx";

const Home = () => {
  return (
    <>
      <GlassShowcase>
        <GlassSection>
          <GlassCard
            title="Basic Card"
            description="This is a basic card"
          >
            <GlassButton href="/about">Click Me</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
      <GlassShowcase>
        <GlassSection>
          <GlassCard
            title="Basic Card"
            description="This is a basic card"
          >
            <GlassButton href="/about">Click Me</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
    </>
  );
};

export default Home;
