import { PageProps } from "$fresh/server.ts";
import {
  GlassButton,
  GlassCard,
  GlassSection,
} from "../components/glassmorphism.tsx";

const Home = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-700 py-12 px-4">
      {/* ヒーローセクション */}
      <div class="max-w-screen-lg mx-auto text-center text-white mb-12">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          グラスモーフィズムデザイン
        </h1>
        <p class="text-xl mb-6 opacity-90">モダンで美しいUIコンポーネント</p>
      </div>

      {/* グラスモーフィズム紹介セクション - 80%幅で中央配置 */}
      <div class="w-[80%] mx-auto mb-16">
        <div class="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
          <h2 class="text-2xl font-semibold text-white mb-6 text-center">
            グラスモーフィズムとは？
          </h2>
          <p class="text-white/90 mb-8 text-center max-w-3xl mx-auto">
            グラスモーフィズムは、透明感のあるガラスのようなデザインスタイルです。
            半透明の背景、ぼかし効果、微妙な境界線により、美しく現代的なUIを実現します。
          </p>

          {/* コンポーネント展示 */}
          <GlassSection className="mt-10">
            <GlassCard
              title="基本カード"
              description="シンプルでエレガントなカードコンポーネント。あらゆる情報表示に最適です。"
            >
              <GlassButton href="/components">詳細を見る</GlassButton>
            </GlassCard>

            <GlassCard
              variant="info"
              title="情報カード"
              description="重要な通知や情報を目立たせるためのカードデザイン。"
            />

            <GlassCard
              variant="status"
              title="ステータスカード"
              description="進捗状況や達成度を視覚的に表示するコンポーネント。"
              progress={75}
            />
          </GlassSection>
        </div>
      </div>

      {/* フッター的なセクション */}
      <div class="text-center text-white/70 mt-12">
        <p>モダンでクリーンなデザインで、あなたのWebサイトを魅力的に。</p>
      </div>
    </div>
  );
};

export default Home;
