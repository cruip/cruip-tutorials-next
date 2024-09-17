export default function RotatingWords() {
  return (
    <div className="bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-3xl font-extrabold text-transparent [text-wrap:balance] md:text-4xl">
      Trusted by the most innovative minds in{" "}
      <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
        <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
          <li>Finance</li>
          <li>Tech</li>
          <li>AI</li>
          <li>Crypto</li>
          <li>eCommerce</li>
          <li aria-hidden="true">Finance</li>
        </ul>
      </span>
    </div>
  );
}
