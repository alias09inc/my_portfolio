import { JSX } from "preact";

interface GlassCardProps {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[] | string;
  variant?: "default" | "info" | "status";
  progress?: number;
}

export function GlassCard({
  title,
  description,
  children,
  variant = "default",
  progress = 0,
}: GlassCardProps) {
  // 基本スタイル
  const baseStyles =
    "backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 text-white shadow-lg";

  // バリアントスタイル
  const variantStyles = {
    default: "",
    info: "bg-blue-500/15 pt-10 relative",
    status: "bg-white/15",
  };

  // プログレスバーのスタイル
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div class={`${baseStyles} ${variantStyles[variant]}`}>
      {variant === "info" && (
        <div class="absolute -top-4 left-6 w-10 h-10 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center font-bold shadow-md">
          i
        </div>
      )}

      <h2 class="text-xl font-medium tracking-wide mb-4">{title}</h2>
      <p class="mb-5 leading-relaxed font-light">{description}</p>

      {variant === "status" && (
        <div class="w-full">
          <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              class="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-full"
              style={progressStyle}
            >
            </div>
          </div>
          <p>{progress}% 完了</p>
        </div>
      )}

      {children}
    </div>
  );
}

interface GlassButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  href?: string;
  className?: string;
}

export function GlassButton({
  children,
  href,
  className = "",
}: GlassButtonProps) {
  const buttonClass =
    `bg-white/20 text-white border border-white/30 py-2 px-5 rounded-full backdrop-blur-sm font-normal tracking-wide ${className}`;

  // インタラクティブなボタンの代わりにリンクを使用
  if (href) {
    return (
      <a href={href} class={buttonClass}>
        {children}
      </a>
    );
  }

  // リンクなしの場合は静的なボタン表示
  return (
    <span class={buttonClass}>
      {children}
    </span>
  );
}

interface GlassSectionProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export function GlassSection({
  children,
  className = "",
}: GlassSectionProps) {
  const sectionClass =
    `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto p-5 ${className}`;

  return (
    <section class={sectionClass}>
      {children}
    </section>
  );
}

interface GlassShowcaseProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export function GlassShowcase({
  children,
  className = "",
}: GlassShowcaseProps) {
  return (
    <div class={`w-[80%] mx-auto ${className}`}>
      <div class="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl mt-4">
        {children}
      </div>
    </div>
  );
}
