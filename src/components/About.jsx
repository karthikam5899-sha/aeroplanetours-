import { ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-navy py-20 text-white md:py-24">
      <div className="container-wide grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=85" alt="Traveller looking out over a scenic destination" loading="lazy" className="h-[390px] w-full rounded-[30px] object-cover sm:h-[470px]" />
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-4 text-navy shadow-xl sm:-right-6 sm:p-5"><div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600"><HeartHandshake size={22} /></div><div><p className="font-display text-xl font-extrabold">Made with care</p><p className="text-xs text-slate-500">Every journey matters</p></div></div></div>
        </div>
        <div className="pt-3 md:pl-4">
          <span className="eyebrow !text-sky-300">A little about Sha Air</span><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">See more of the India that feels like <span className="text-sky-300">you.</span></h2>
          <p className="mt-6 leading-7 text-slate-300">Sha Air Tours & Travels is made for discovering India at your own pace—from food-filled city breaks to slow days by the coast. We bring trip ideas, practical planning, and friendly support together.</p>
          <p className="mt-4 leading-7 text-slate-300">Whether you’re travelling with family, celebrating a special occasion, or heading out on your own, we’re here to help make the details feel simpler.</p>
          <div className="mt-7 grid grid-cols-2 gap-4 border-y border-white/15 py-6"><div><p className="font-display text-2xl font-extrabold sm:text-3xl">India-first</p><p className="mt-1 text-sm text-slate-400">Trips close to home</p></div><div><p className="font-display text-2xl font-extrabold sm:text-3xl">Made for you</p><p className="mt-1 text-sm text-slate-400">Flexible trip planning</p></div></div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold transition hover:text-sky-300">Let’s plan your trip <ArrowUpRight size={17} /></a>
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400"><Sparkles size={14} className="text-amber-300" /> Sha Air is a sample travel brand for this frontend project.</div>
        </div>
      </div>
    </section>
  )
}
