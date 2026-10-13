import { useState } from 'react'
import { ArrowLeftRight, CalendarDays, Download, MapPin, Plane, TicketCheck, Users } from 'lucide-react'

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character])
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${value}T00:00:00`))
}

function buildTicketHtml(booking) {
  const tripDetails = [
    ['From', booking.from],
    ['To', booking.to],
    ['Trip type', booking.trip],
    ['Departure', formatDate(booking.depart)],
    ...(booking.trip === 'Round trip' ? [['Return', formatDate(booking.returnDate)]] : []),
    ['Travellers', booking.travelers]
  ]

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sha Air demo itinerary ${escapeHtml(booking.reference)}</title>
  <style>
    *{box-sizing:border-box}body{margin:0;padding:32px;background:#f1f5f9;color:#102a43;font:16px/1.5 Arial,sans-serif}
    main{max-width:720px;margin:0 auto;padding:32px;border-radius:20px;background:#fff;box-shadow:0 16px 48px #082f4918}
    header{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-bottom:20px;border-bottom:1px solid #e2e8f0}
    h1{margin:0;color:#082f49;font-size:26px}header p{margin:4px 0 0;color:#64748b}
    .reference{font-size:12px;color:#64748b;text-align:right}.reference strong{display:block;color:#0284c7;font-size:17px}
    h2{margin:24px 0 16px;color:#082f49;font-size:20px}.route{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .item{padding:14px;border-radius:12px;background:#f8fafc}.label{display:block;margin-bottom:4px;color:#64748b;font-size:11px;font-weight:bold;letter-spacing:.06em;text-transform:uppercase}
    .notice{margin-top:24px;padding:16px;border:1px solid #fed7aa;border-radius:12px;background:#fff7ed;color:#9a3412;font-size:13px}
    button{margin-top:20px;padding:12px 18px;border:0;border-radius:24px;background:#0284c7;color:white;font-weight:bold;cursor:pointer}
    @media(max-width:520px){body{padding:12px}main{padding:20px}.route{grid-template-columns:1fr}header{align-items:flex-start;flex-direction:column}.reference{text-align:left}}
    @media print{body{padding:0;background:#fff}main{max-width:none;box-shadow:none}button{display:none}}
  </style>
</head>
<body>
  <main>
    <header>
      <div><h1>Sha Air</h1><p>India Tours &amp; Travels · Demo itinerary</p></div>
      <div class="reference">Trip reference<strong>${escapeHtml(booking.reference)}</strong></div>
    </header>
    <h2>Your journey</h2>
    <div class="route">${tripDetails.map(([label, value]) => `<div class="item"><span class="label">${escapeHtml(label)}</span>${escapeHtml(value)}</div>`).join('')}</div>
    <p class="notice"><strong>Demo only:</strong> This itinerary is not an airline ticket or confirmed booking. No seat has been reserved and no fare has been paid. Contact an airline or authorised travel provider to book and confirm your flight.</p>
    <button type="button" onclick="window.print()">Print / save as PDF</button>
  </main>
</body>
</html>`
}

export default function FlightSearch() {
  const [trip, setTrip] = useState('Round trip')
  const [from, setFrom] = useState('Chennai (MAA)')
  const [to, setTo] = useState('Jaipur (JAI)')
  const [depart, setDepart] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [travelers, setTravelers] = useState('1 Adult')
  const [message, setMessage] = useState('')
  const [booking, setBooking] = useState(null)
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]

  function updateField(setter, value) {
    setter(value)
    setBooking(null)
    setMessage('')
  }

  function swap() {
    setFrom(to)
    setTo(from)
    setBooking(null)
    setMessage('')
  }

  function submit(e) {
    e.preventDefault()
    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {
      setBooking(null)
      setMessage('Choose two different cities to continue.')
      return
    }
    if (!depart || depart < today) {
      setBooking(null)
      setMessage('Choose a valid departure date to continue.')
      return
    }
    if (trip === 'Round trip' && !returnDate) {
      setBooking(null)
      setMessage('Choose a return date for your round trip.')
      return
    }
    if (trip === 'Round trip' && returnDate < depart) {
      setBooking(null)
      setMessage('Return date must be on or after your departure date.')
      return
    }
    setMessage('')
    setBooking({
      reference: `DEMO-${Date.now().toString(36).slice(-6).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      from: from.trim(),
      to: to.trim(),
      trip,
      depart,
      returnDate: trip === 'Round trip' ? returnDate : '',
      travelers
    })
  }

  function downloadTicket() {
    const ticket = new Blob([buildTicketHtml(booking)], { type: 'text/html;charset=utf-8' })
    const ticketUrl = URL.createObjectURL(ticket)
    const link = document.createElement('a')
    link.href = ticketUrl
    link.download = `sha-air-itinerary-${booking.reference.toLowerCase()}.html`
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(ticketUrl), 1000)
  }

  return (
    <section id="flight-search" className="relative z-20 -mt-8">
      <div className="container-wide">
        <form onSubmit={submit} className="rounded-[28px] bg-white p-5 shadow-soft ring-1 ring-slate-100 md:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div><p className="font-display text-xl font-extrabold text-navy">Book your India journey</p><p className="mt-1 text-sm text-slate-500">Create a demo itinerary and download a printable ticket.</p></div>
            <div className="flex rounded-full bg-slate-100 p-1">
              {['Round trip', 'One way'].map(t => <button type="button" key={t} aria-pressed={trip === t} onClick={() => updateField(setTrip, t)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${trip === t ? 'bg-navy text-white shadow' : 'text-slate-500 hover:text-navy'}`}>{t}</button>)}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_42px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end">
            <label className="field-label">From<div className="field-wrap"><MapPin size={17} /><input value={from} onChange={e => updateField(setFrom, e.target.value)} aria-label="Departure city" required /></div></label>
            <button type="button" onClick={swap} aria-label="Swap departure and destination" className="hidden h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-sky-700 transition hover:bg-sky-50 lg:flex"><ArrowLeftRight size={18} /></button>
            <label className="field-label">To<div className="field-wrap"><MapPin size={17} /><input value={to} onChange={e => updateField(setTo, e.target.value)} aria-label="Destination city" required /></div></label>
            <label className="field-label">Departure<div className="field-wrap"><CalendarDays size={17} /><input type="date" min={today} value={depart} onChange={e => updateField(setDepart, e.target.value)} required /></div></label>
            {trip === 'Round trip' && <label className="field-label">Return<div className="field-wrap"><CalendarDays size={17} /><input type="date" min={depart || today} value={returnDate} onChange={e => updateField(setReturnDate, e.target.value)} required /></div></label>}
            <label className="field-label">Travelers<div className="field-wrap"><Users size={17} /><select value={travelers} onChange={e => updateField(setTravelers, e.target.value)}><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>Family (5+)</option></select></div></label>
            <button className="btn-primary h-[48px] w-full lg:w-auto" type="submit"><TicketCheck size={17} /> Book ticket</button>
          </div>
          {message && <p role="alert" className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">{message}</p>}
          {booking && (
            <div role="status" className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-700"><Plane size={19} /></span>
                  <div>
                    <h3 className="font-display font-extrabold text-emerald-950">Demo itinerary created</h3>
                    <p className="mt-1 text-sm text-emerald-900">{booking.from} to {booking.to} · {formatDate(booking.depart)} · {booking.travelers}</p>
                    <p className="mt-1 text-xs font-semibold text-emerald-800">Reference: {booking.reference}</p>
                  </div>
                </div>
                <button type="button" onClick={downloadTicket} className="btn-primary shrink-0"><Download size={17} /> Download ticket</button>
              </div>
              <p className="mt-4 border-t border-emerald-200 pt-3 text-xs leading-5 text-emerald-900">Demo only: this is a printable itinerary, not a confirmed airline booking. No seat is reserved and no fare is charged.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
