import { useEffect, useState } from 'react'
import { Plane } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Intro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => setVisible(false), reducedMotion ? 900 : 3600)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="brand-intro" role="status" aria-label="Welcome to Sha Air">
      <div className="brand-intro__stars" aria-hidden="true" />
      <div className="brand-intro__content">
        <div className="brand-intro__logo">
          <BrandLogo />
        </div>
        <p className="brand-intro__tagline">India, awaits your next story</p>
      </div>
      <div className="brand-intro__flight-path" aria-hidden="true">
        <Plane className="brand-intro__plane" size={34} strokeWidth={1.7} />
      </div>
      <button className="brand-intro__skip" type="button" onClick={() => setVisible(false)}>
        Skip intro
      </button>
      <span className="brand-intro__progress" aria-hidden="true" />
    </div>
  )
}
