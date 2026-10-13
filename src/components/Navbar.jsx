import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import BrandLogo from './BrandLogo'

const links = [
  ['Destinations', '#destinations'],
  ['Offers', '#offers'],
  ['Services', '#services'],
  ['About us', '#about'],
  ['Contact', '#contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="container-wide flex h-[82px] items-center justify-between border-b border-white/15">
        <a href="#home" className="flex items-center" aria-label="Sha Air home">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-white/80 transition hover:text-white">{label}</a>)}
          <a href="#flight-search" className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-sky-100">Book a flight <ArrowUpRight size={16} /></a>
        </nav>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/25 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mx-4 rounded-2xl border border-white/10 bg-navy/95 p-4 shadow-xl backdrop-blur lg:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/10">{label}</a>)}
        <a href="#flight-search" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-sky-500 px-3 py-3 text-center text-sm font-bold">Book a flight</a>
      </nav>}
    </header>
  )
}
