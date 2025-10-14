"use client"

import { useLayoutEffect, useRef } from "react"
import useSWR from "swr"
import gsap from "gsap"

const fetcher = (url: string) => fetch(url).then((r) => r.text())

type LogoLoaderProps = {
  size?: number
  colorClassName?: string // tailwind class that sets currentColor, e.g., 'text-primary'
  rotate?: boolean
}

export default function LogoLoader({ size = 160, colorClassName = "text-primary", rotate = true }: LogoLoaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { data: svg, error, isLoading } = useSWR("/logo.svg", fetcher)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container || !svg) return

    // Inject SVG markup
    container.innerHTML = svg

    // Normalize SVG to use currentColor for strokes and responsive sizing
    const svgEl = container.querySelector("svg")
    if (svgEl) {
      svgEl.setAttribute("width", "100%")
      svgEl.setAttribute("height", "100%")
      // Ensure fills don't block stroke drawing animation
      svgEl.querySelectorAll<SVGElement>("path, line, polyline, circle, rect, ellipse").forEach((el) => {
        // Prefer stroke drawing; remove fills if present
        el.setAttribute("fill", "none")
        el.setAttribute("stroke", "currentColor")
        // Give a sensible default strokeWidth if SVG omitted it
        if (!el.getAttribute("stroke-width")) el.setAttribute("stroke-width", "2")
        el.setAttribute("stroke-linecap", el.getAttribute("stroke-linecap") || "round")
        el.setAttribute("stroke-linejoin", el.getAttribute("stroke-linejoin") || "round")
      })
    }

    const paths = Array.from(container.querySelectorAll<SVGPathElement>("path"))

    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power2.inOut" } })

    // Prepare stroke-dash animation per path
    paths.forEach((p) => {
      try {
        const length = p.getTotalLength()
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })
        tl.to(p, { strokeDashoffset: 0, duration: 0.9 }, "<0.08")
      } catch {
        // Some elements may not support getTotalLength; skip gracefully
      }
    })

    // Optional: continuous rotation for loader feel
    let spin: gsap.core.Tween | undefined
    if (rotate && svgEl) {
      spin = gsap.to(svgEl, {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 4,
        ease: "none",
        repeat: -1,
      })
    }

    return () => {
      tl.kill()
      spin?.kill()
      // Clean injected DOM on unmount
      container.innerHTML = ""
    }
  }, [svg, rotate])

  if (error) return null

  return (
    <div
      className={`inline-flex items-center justify-center ${colorClassName}`}
      style={{ width: size, height: size }}
      aria-label="Loading"
      role="img"
    >
      {/* We set currentColor via colorClassName so strokes inherit theme color */}
      <div ref={containerRef} className="w-full h-full" />
      {isLoading && <span className="sr-only">{"Loading"}</span>}
    </div>
  )
}

