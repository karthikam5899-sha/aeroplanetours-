import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import BrandLogo from './BrandLogo'

const footerLinks = {
  Explore: [['India destinations', '#destinations'], ['India holiday offers', '#offers'], ['Travel services', '#services']],
  Company: [['About Sha Air', '#about'], ['Contact us', '#contact'], ['Plan an India trip', '#flight-search']]
}

export default function Footer() {
  return (
    <footer className="bg-[#041f31] text-white">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.1fr] md:py-16">
        <div><a href="#home" aria-label="Sha Air home"><BrandLogo compact={false} /></a><p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">From familiar favourites to new discoveries, make your next India holiday your own.</p><div className="mt-5 flex gap-2">{[[Instagram, 'Instagram', 'https://www.instagram.com/'], [Facebook, 'Facebook', 'https://www.facebook.com/'], [Twitter, 'X', 'https://x.com/'], [Linkedin, 'LinkedIn', 'https://www.linkedin.com/']].map(([Icon, label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:border-sky-400 hover:bg-sky-500 hover:text-white"><Icon size={16} /></a>)}</div></div>
        {Object.entries(footerLinks).map(([heading, items]) => <div key={heading}><h3 className="font-display font-extrabold">{heading}</h3><ul className="mt-5 space-y-3">{items.map(([label, href]) => <li key={label}><a className="text-sm text-slate-400 transition hover:text-white" href={href}>{label}</a></li>)}</ul></div>)}
        <div><h3 className="font-display font-extrabold">Need a hand?</h3><p className="mt-4 text-sm leading-6 text-slate-400">Our sample travel team can help you get your India holiday plans started.</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-300 hover:text-white">Talk to us <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="border-t border-white/10"><div className="container-wide flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Sha Air Tours & Travels. Sample website.</p><p>Celebrating India, one journey at a time.</p></div></div>
    </footer>
  )
}
