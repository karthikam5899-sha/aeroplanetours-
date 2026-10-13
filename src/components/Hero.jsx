import { ArrowRight, Globe2, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[700px] items-center overflow-hidden bg-navy pt-24 text-white md:min-h-[760px]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,31,49,.94)_0%,rgba(4,31,49,.78)_43%,rgba(4,31,49,.12)_100%),url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/20" />
      <div className="container-wide relative z-10 grid items-center gap-12 py-20 md:grid-cols-[1.04fr_.96fr]">
        <div className="reveal max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur"><Sparkles size={14} className="text-amber-300" /> INDIA, AWAITS YOUR NEXT STORY</div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.06] tracking-[-.055em] sm:text-6xl lg:text-[4.5rem]">Closer to home.<br /><span className="text-sky-300">Closer to</span> wonder.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">From Himalayan mornings to Kerala backwaters, discover thoughtfully planned holidays across India—with helpful support at every step.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn-primary" href="#flight-search">Plan an India trip <ArrowRight size={17} /></a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold transition hover:bg-white/10" href="#destinations">Explore India</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm text-white/80">
            <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-sky-300" /> India-first trip planning</span>
            <span className="flex items-center gap-2"><Globe2 size={17} className="text-sky-300" /> Local journeys, thoughtfully planned</span>
          </div>
        </div>
        <div className="relative hidden h-[390px] md:block">
          <div className="float absolute right-3 top-7 h-[330px] w-[300px] rounded-[48%_48%_25px_25px] border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur-sm lg:right-10 lg:w-[350px]">
            <img className="h-full w-full rounded-[48%_48%_18px_18px] object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85" alt="Beautiful mountain landscape" />
          </div>
          <div className="absolute bottom-3 left-0 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 p-4 text-navy shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-sky-700"><Globe2 size={23} /></div>
            <div><p className="text-xs text-slate-500">Your next India getaway</p><p className="font-display text-xl font-extrabold">Starts right here</p></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  )
}
