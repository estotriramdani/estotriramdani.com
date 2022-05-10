export default function HeroSection() {
  return (
    <div className="full flex min-h-[25vh] flex-col items-center justify-center gap-2 bg-slate-50 px-3 text-center">
      <div className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-50">
        👋
      </div>
      <h2 className="font-serif text-2xl font-extrabold text-slate-800">
        My story is a story of a story
      </h2>
      <p className="text-slate-500">
        Read my story and learn more about me. Code, design, and more.
      </p>
    </div>
  );
}
