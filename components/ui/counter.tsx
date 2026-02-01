"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
