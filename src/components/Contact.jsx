import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', date: '', message: '' })
  const [status, setStatus] = useState('')
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]

  function submit(e) {
    e.preventDefault()
    setStatus(`Thanks, ${form.name}! Your enquiry for ${form.destination || 'a trip'} is ready. Connect a backend or email service to receive real enquiries.`)
    setForm({ name: '', email: '', phone: '', destination: '', date: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad bg-[#f4f9fc]">
      <div className="container-wide grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="pt-2"><span className="eyebrow">Let’s make it happen</span><h2 className="section-title">Your next India trip<br />starts with hello.</h2><p className="mt-5 max-w-md leading-7 text-slate-500">Tell us where in India you’d like to go and what kind of trip you have in mind. We’ll help you start shaping the journey.</p>
          <div className="mt-9 space-y-5">
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-sky-700 shadow-sm"><Mail size={19} /></span><div><p className="font-bold text-navy">Email us</p><p className="mt-1 text-sm text-slate-500">hello@shaair.example</p></div></div>
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-sky-700 shadow-sm"><Phone size={19} /></span><div><p className="font-bold text-navy">Call our team</p><p className="mt-1 text-sm text-slate-500">+91 98765 43210 (sample number)</p></div></div>
            <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-sky-700 shadow-sm"><MapPin size={19} /></span><div><p className="font-bold text-navy">Visit us</p><p className="mt-1 text-sm text-slate-500">Chennai, Tamil Nadu, India</p></div></div>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[28px] bg-white p-5 shadow-soft sm:p-8">
          <h3 className="font-display text-2xl font-extrabold text-navy">Plan a trip with us</h3><p className="mt-2 text-sm text-slate-500">Share your details and travel wish list.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="form-label">Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" required /></label>
            <label className="form-label">Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
            <label className="form-label">Phone number<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 98765 43210" /></label>
            <label className="form-label">Dream destination<input name="destination" value={form.destination} onChange={update} placeholder="Where would you like to go?" required /></label>
            <label className="form-label sm:col-span-2">Preferred travel date<input name="date" type="date" value={form.date} onChange={update} min={today} /></label>
            <label className="form-label sm:col-span-2">Anything else we should know?<textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Trip type, number of travellers, budget..." /></label>
          </div>
          <button className="btn-primary mt-6 w-full sm:w-auto" type="submit">Send enquiry <Send size={16} /></button>
          {status && <p role="status" className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-800"><CheckCircle2 className="mt-1 shrink-0" size={17} />{status}</p>}
          <p className="mt-4 text-xs text-slate-400">Sample form only: enquiries are not sent or stored. Package prices are shown in Indian rupees (₹).</p>
        </form>
      </div>
    </section>
  )
}
