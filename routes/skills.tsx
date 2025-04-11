import { PageProps } from "$fresh/server.ts";
import {
  GlassButton,
  GlassCard,
  GlassSection,
  GlassShowcase,
} from "../components/glassmorphism.tsx";

const Skills = () => {
  return (
    <>
      <GlassShowcase>
        <GlassSection>
          <h1 className="text-3xl font-bold mb-6 text-center">私のスキル</h1>
          <GlassCard
            title="フロントエンド開発"
            description="モダンなウェブフロントエンド技術を活用したUI/UX開発"
          >
            <p className="mb-4">React, Vue.js, TypeScript, HTML5/CSS3</p>
            <GlassButton href="/projects?category=frontend">関連プロジェクトを見る</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
      
      <GlassShowcase>
        <GlassSection>
          <GlassCard
            title="バックエンド開発"
            description="安全で拡張性の高いバックエンドシステムの構築"
          >
            <p className="mb-4">Node.js, Deno, Python, GraphQL, RESTful API</p>
            <GlassButton href="/projects?category=backend">関連プロジェクトを見る</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
      
      <GlassShowcase>
        <GlassSection>
          <GlassCard
            title="データベース"
            description="効率的なデータモデリングと管理"
          >
            <p className="mb-4">PostgreSQL, MongoDB, Firebase, Redis</p>
            <GlassButton href="/projects?category=database">関連プロジェクトを見る</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
      
      <GlassShowcase>
        <GlassSection>
          <GlassCard
            title="DevOps"
            description="CI/CDパイプラインと自動化"
          >
            <p className="mb-4">Docker, Kubernetes, GitHub Actions, AWS</p>
            <GlassButton href="/projects?category=devops">関連プロジェクトを見る</GlassButton>
          </GlassCard>
        </GlassSection>
      </GlassShowcase>
    </>
  );
};

export default Skills;
