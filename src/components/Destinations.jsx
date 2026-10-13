import { ArrowUpRight, MapPin } from 'lucide-react'

const places = [
  { name: 'Kerala', tag: 'Backwaters & beaches', price: '₹14,999', days: '5 days', image: 'photo-1602216056096-3b40cc0c9944', className: 'md:col-span-2 md:row-span-2' },
  { name: 'Jaipur, Rajasthan', tag: 'Forts & heritage', price: '₹9,999', days: '3 days', image: 'photo-1599661046827-dacff0c0f09a' },
  { name: 'Kashmir', tag: 'Mountain escape', price: '₹18,499', days: '5 days', image: 'photo-1595815771614-ade9d652a65d' },
  { name: 'Varanasi, Uttar Pradesh', tag: 'Culture & history', price: '₹7,499', days: '3 days', image: 'photo-1561361513-2d000a50f0dc' },
  { name: 'Meghalaya', tag: 'Hills & waterfalls', price: '₹21,999', days: '6 days', image: 'photo-1511497584788-876760111969' }
]

export default function Destinations() {
  return (
    <section id="destinations" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><span className="eyebrow">India, in all its wonder</span><h2 className="section-title">Find your kind of<br className="hidden sm:block" /> somewhere.</h2></div>
          <a href="#contact" className="btn-outline self-start sm:self-auto">Plan an India trip <ArrowUpRight size={17} /></a>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-2 md:auto-rows-[210px] lg:grid-cols-4">
          {places.map((p, i) => <article key={p.name} className={`group relative overflow-hidden rounded-[24px] bg-slate-200 ${p.className || ''}`}>
            <img src={`https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1100&q=85`} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold backdrop-blur"><MapPin size={11} /> {p.tag}</span>
              <div className="flex items-end justify-between gap-3"><div><h3 className="font-display text-xl font-extrabold sm:text-2xl">{p.name}</h3><p className="mt-1 text-sm text-white/75">{p.days} · from {p.price}</p></div><a href="#contact" aria-label={`Enquire about ${p.name}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-navy transition group-hover:bg-sky-400"><ArrowUpRight size={19} /></a></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  )
}
