import { Headphones, Hotel, Map, PlaneTakeoff, ShieldCheck, TicketCheck } from 'lucide-react'

const services = [
  { icon: PlaneTakeoff, title: 'Flights across India', text: 'Plan domestic routes between India’s major cities and holiday destinations.' },
  { icon: Hotel, title: 'Stays & homestays', text: 'Find comfortable places to stay, from city hotels to welcoming local homestays.' },
  { icon: Map, title: 'India holiday packages', text: 'Explore considered itineraries for family holidays, honeymoons, and solo trips.' },
  { icon: TicketCheck, title: 'Train & transfer planning', text: 'Make it easier to join the dots with rail, airport transfer, and local travel guidance.' },
  { icon: ShieldCheck, title: 'Travel protection', text: 'Understand available cover and prepare for a smoother domestic trip.' },
  { icon: Headphones, title: 'Personal trip support', text: 'Get a helping hand with your itinerary before and during your holiday.' }
]

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-wide">
        <div className="max-w-2xl"><span className="eyebrow">Travel, made simpler</span><h2 className="section-title">A little help for every step.</h2><p className="mt-4 leading-7 text-slate-500">From choosing a route to planning local transfers, get the essentials for a comfortable trip around India in one place.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => <article key={title} className="group rounded-[22px] border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-soft">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white"><Icon size={22} /></div><h3 className="font-display text-lg font-extrabold text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p><div className="mt-6 h-1 w-9 rounded-full bg-sky-200 transition-all group-hover:w-16 group-hover:bg-sky-600" />
          </article>)}
        </div>
      </div>
    </section>
  )
}
