export default function BrandLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10 shrink-0">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".8" />
        <path d="M12 29c6 0 7-11 14-11 4 0 7 2 10 5" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 33c6 0 7-8 14-8 4 0 7 2 10 5" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
        <path d="m15 20 18 4-8 3-3 7-2-6-5-8Z" fill="currentColor" />
      </svg>
      {!compact && (
        <span className="font-display text-xl font-extrabold tracking-tight">
          Sha <span className="text-orange-300">Air</span>
          <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[.25em] text-white/65">India Tours & Travels</span>
        </span>
      )}
    </span>
  )
}
