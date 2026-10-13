import { ArrowRight, BadgePercent, Check } from 'lucide-react'

const offers = [
  { badge: 'EARLY BIRD', title: 'Discover Rajasthan', desc: 'Give yourself time to explore Jaipur’s palaces, Jodhpur’s blue lanes, and desert sunsets.', price: 'Packages from ₹9,999', code: 'RAJASTHAN', tone: 'bg-sky-50', accent: 'text-sky-700', image: 'photo-1599661046827-dacff0c0f09a' },
  { badge: 'WEEKEND SPECIAL', title: 'Unwind in the hills', desc: 'Trade the weekday rush for fresh mountain air and a relaxed Himachal getaway.', price: 'Packages from ₹8,999', code: 'HILLWEEKEND', tone: 'bg-orange-50', accent: 'text-orange-700', image: 'photo-1595815771614-ade9d652a65d' }
]

export default function Offers() {
  return (
    <section id="offers" className="bg-[#f4f9fc] section-pad">
      <div className="container-wide">
        <div className="text-center"><span className="eyebrow">Good trips, better prices</span><h2 className="section-title">India getaways worth looking forward to.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">Find inspiration for your next domestic break, from colourful heritage cities to quiet mountain escapes.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {offers.map(o => <article key={o.code} className="group grid overflow-hidden rounded-[26px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[.95fr_1.05fr]">
            <div className="relative min-h-[230px] overflow-hidden"><img src={`https://images.unsplash.com/${o.image}?auto=format&fit=crop&w=900&q=85`} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-extrabold tracking-widest text-navy">{o.badge}</span></div>
            <div className="flex flex-col items-start p-6 sm:p-7"><div className={`mb-4 grid h-10 w-10 place-items-center rounded-xl ${o.tone} ${o.accent}`}><BadgePercent size={21} /></div><h3 className="font-display text-2xl font-extrabold leading-tight text-navy">{o.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{o.desc}</p><p className={`mt-5 text-xl font-extrabold ${o.accent}`}>{o.price}</p><div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-xs font-bold text-slate-600"><Check size={14} /> Use code <span className="text-navy">{o.code}</span></div><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-navy transition group-hover:text-sky-700">Get this offer <ArrowRight size={16} /></a></div>
          </article>)}
        </div>
        <p className="mt-4 text-center text-xs text-slate-400">Illustrative package prices for this demo website. Final inclusions, terms, and availability must be confirmed before booking.</p>
      </div>
    </section>
  )
}
