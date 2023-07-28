export default function RotatingWords() {
  return (
    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
        <li>Finance</li>
        <li>Tech</li>
        <li>AI</li>
        <li>Crypto</li>
        <li>eCommerce</li>
        <li aria-hidden="true">Finance</li>
      </ul>
    </span></div>
  )
}