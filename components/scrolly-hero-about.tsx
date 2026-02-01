"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, LineChart, Paintbrush, Target, Code2, Rocket, Users, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Counter } from "@/components/ui/counter"

// Number of frames in the sequence
const FRAME_COUNT = 240

// Stats data from About section
const stats = [
  {
    icon: <Code2 className="h-8 w-8 mb-2" />,
    value: 5,
    suffix: "+",
    label: "Années d'expérience",
  },
  {
    icon: <Rocket className="h-8 w-8 mb-2" />,
    value: 50,
    suffix: "+",
    label: "Projets livrés",
  },
  {
    icon: <Users className="h-8 w-8 mb-2" />,
    value: 30,
    suffix: "+",
    label: "Clients satisfaits",
  },
  {
    icon: <Palette className="h-8 w-8 mb-2" />,
    value: 10,
    suffix: "",
    label: "Récompenses Design",
  },
]

export function ScrollyHeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Mobile detection with hydration fix
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // 1024px is usually the 'lg' breakpoint
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Preload images - ONLY FOR DESKTOP
  useEffect(() => {
    if (isMobile) {
      setImagesLoaded(true) // Just skip preloading for mobile
      return 
    }
    let loadedCount = 0
    const imgArray: HTMLImageElement[] = []

    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image()
        const frameNum = i.toString().padStart(3, "0")
        img.src = `/sequence/ezgif-frame-${frameNum}.jpg`
        img.onload = () => {
            loadedCount++
            if (loadedCount === FRAME_COUNT) {
                setImagesLoaded(true)
            }
        }
        imgArray.push(img)
    }
    setImages(imgArray)
  }, [isMobile])

  // Render loop - ONLY FOR DESKTOP
  useEffect(() => {
    if (isMobile || !imagesLoaded || !canvasRef.current || images.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateSize = () => {
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    const render = () => {
        const progress = smoothProgress.get()
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(progress * FRAME_COUNT)
        )
        
        const img = images[frameIndex]
        if (img) {
             const rect = canvas.getBoundingClientRect()
             const scale = Math.max(rect.width / img.width, rect.height / img.height)
             const x = (rect.width / 2) - (img.width / 2) * scale
             const y = (rect.height / 2) - (img.height / 2) * scale
             
             ctx.clearRect(0, 0, rect.width, rect.height)
             ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
        }

        requestAnimationFrame(render)
    }
    
    const animationId = requestAnimationFrame(render)
    return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener("resize", updateSize)
    }
  }, [isMobile, imagesLoaded, images, smoothProgress])


  // Desktop Transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroPointerEvents = useTransform(scrollYProgress, (v) => v > 0.2 ? "none" : "auto")
  const aboutOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const aboutY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])
  const aboutPointerEvents = useTransform(scrollYProgress, (v) => v < 0.3 ? "none" : "auto")
  const imageLeft = useTransform(scrollYProgress, [0, 0.5], ["50%", "0%"])
  
  // --- MOBILE LAYOUT ---
  if (isMobile) {
    return (
      <div className="flex flex-col bg-background">
        {/* Mobile Hero */}
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-20 px-4 md:px-8">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="space-y-6"
            >
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl text-foreground leading-[1.1]">
                    Du Plan Commercial <br />
                    au <span className="text-primary">Site Web</span> <br />
                    <span className="text-blue-500">Performant.</span>
                </h1>
                <p className="max-w-[500px] text-muted-foreground text-lg leading-relaxed">
                    J&apos;accompagne vos projets avec stratégie, action et présence digitale optimisée. Transformez votre vision en une machine à convertir.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row pt-4">
                    <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-base font-bold h-14 rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-transform">
                        <Link href="https://wa.me/2250715967408" target="_blank">Démarrer un projet <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base font-bold h-14 rounded-2xl backdrop-blur-sm border-border/50 active:scale-95 transition-transform">
                        <Link href="/#portfolio">Voir mes réalisations</Link>
                    </Button>
                </div>
            </motion.div>

            {/* Mobile Image - Static representation of the person */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-12 relative w-full aspect-square max-w-[400px] mx-auto overflow-hidden rounded-[40px] shadow-2xl"
            >
               <img 
                  src="/sequence/ezgif-frame-001.jpg" 
                  alt="Etienne Yao"
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
        </section>

        {/* Mobile About */}
        <section id="about" className="py-24 px-4 md:px-8 bg-muted/20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
                <div>
                   <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">À propos de moi</h2>
                   <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                        <p>
                            Je suis <strong className="text-foreground">KOUAKOU ATTA YAO ETIENNE</strong>, marketeur orienté technologie et développeur web frontend autodidacte, passionné par la création de solutions digitales utiles et rentables.
                        </p>
                        <p>
                            Titulaire d’un BTS en Gestion Commerciale obtenu à la Chambre de Commerce et d’Industrie de Côte d’Ivoire, j’ai développé une forte compétence en stratégie commerciale et communication, que je combine aujourd’hui avec des compétences techniques en développement web et intelligence artificielle.
                        </p>
                        <p>
                           Mon objectif est clair : aider les entreprises et les entrepreneurs à améliorer leur visibilité, automatiser leurs processus et augmenter leurs ventes grâce au digital.
                        </p>
                   </div>
                </div>


                <div className="p-8 rounded-[40px] bg-card border border-border shadow-2xl space-y-4">
                    <h3 className="text-xl font-black text-foreground">💼 Ce que je fais</h3>
                    <ul className="space-y-3">
                        {["Création de sites web modernes", "IA pour le marketing", "Automatisations de tâches", "Stratégie de prospection"].map((text, i) => (
                          <li key={i} className="flex gap-3 items-center text-sm font-medium text-muted-foreground">
                             <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                             <span>{text}</span>
                          </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
      </div>
    )
  }

  // --- DESKTOP SCROLLYTELLING LAYOUT ---
  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-background">
      
      {/* Anchor for automatic scrolling */}
      <div id="about" className="absolute top-[100vh] w-full h-10" />

      {/* Sticky Viewport */}
      {/* This renders the content that stays fixed while the page "scrolls" inside the 300vh container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Background Canvas (The Moving Image) */}
        {/* On Desktop: Width 50%, Moves from Left 50% to Left 0% */}
        <motion.div 
            style={{ 
                left: imageLeft,
                width: "50%",
                height: "100%",
                position: "absolute",
                top: 0
            }}
            className="z-10 bg-transparent flex items-center justify-center p-4 md:p-10"
        >
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-[35px] bg-muted/20">
                 {!imagesLoaded && (
                    <div className="text-muted-foreground animate-pulse">Chargement de la séquence...</div>
                 )}
                 <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                 />
            </div>
            
            {/* Overlay Badge for Hero State (fades out) */}
            <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-10 left-10 md:left-auto md:right-10 hidden md:block">
                 <div className="flex items-center gap-3 rounded-lg bg-background/80 backdrop-blur-md border border-border p-3 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Projets Livrés</p>
                      <p className="text-xs text-muted-foreground">100% Satisfaction</p>
                    </div>
                 </div>
            </motion.div>
        </motion.div>


        {/* Hero Content Layer (Left Side originally) */}
        <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale, pointerEvents: heroPointerEvents }}
            className="absolute inset-0 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 lg:gap-8 items-center h-full z-20 pointer-events-none"
        >
             {/* Text Content - Matches Hero.tsx placement */}
             <div className="flex flex-col justify-center space-y-8 pointer-events-auto bg-background/60 backdrop-blur-sm rounded-xl p-6 lg:bg-transparent lg:p-0 lg:backdrop-blur-none shadow-lg lg:shadow-none border border-border/50 lg:border-none">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Du Plan Commercial <br />
                        au <span className="text-primary">Site Web</span> <br />
                        <span className="text-blue-500">Performant.</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        J&apos;accompagne vos projets avec stratégie, action et présence digitale optimisée. Transformez votre vision en une machine à convertir.
                    </p>
                </div>
                
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold group h-12 px-8">
                        <Link href="https://wa.me/2250715967408" target="_blank">Démarrer un projet <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base font-semibold h-12 px-8">
                        <Link href="/#portfolio">Voir mes réalisations</Link>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2"><Target className="h-4 w-4" /><span>Stratégie sur-mesure</span></div>
                    <div className="flex items-center gap-2"><Paintbrush className="h-4 w-4" /><span>Design Premium</span></div>
                    <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /><span>SEO Optimisé</span></div>
                </div>
             </div>
             <div>{/* Empty Right Column where image sits initially */}</div>
        </motion.div>


        {/* About Content Layer (Right Side) */}
        <motion.div 
            style={{ opacity: aboutOpacity, y: aboutY, pointerEvents: aboutPointerEvents }}
            className="absolute inset-0 container mx-auto px-4 md:px-6 grid lg:grid-cols-2 lg:gap-8 items-center h-full z-20 pointer-events-none"
        >
            <div>{/* Empty Left Column where image moves to */}</div>
            
            {/* Text Content - Matches AboutSection.tsx */}
            <div className="flex flex-col justify-center space-y-8 pointer-events-auto bg-background/50 md:bg-transparent p-6 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none max-h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        À propos de moi
                    </h2>
                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                        <p>
                            Je suis <strong className="text-foreground">KOUAKOU ATTA YAO ETIENNE</strong>, marketeur orienté technologie et développeur web frontend autodidacte, passionné par la création de solutions digitales utiles et rentables.
                        </p>
                        <p>
                            Titulaire d’un BTS en Gestion Commerciale obtenu à la Chambre de Commerce et d’Industrie de Côte d’Ivoire, j’ai développé une forte compétence en stratégie commerciale et communication, que je combine aujourd’hui avec des compétences techniques en développement web et intelligence artificielle.
                        </p>
                        <p>
                            Mon objectif est clair : aider les entreprises et les entrepreneurs à améliorer leur visibilité, automatiser leurs processus et augmenter leurs ventes grâce au digital.
                        </p>
                    </div>

                    <div className="pt-2">
                        <h3 className="text-lg font-bold text-foreground mb-3">💼 Ce que je fais</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Je conçois et mets en œuvre des solutions adaptées aux besoins des entreprises, notamment :
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground list-none">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>Création de sites web modernes et performants</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>Amélioration de visuels marketing grâce à l’intelligence artificielle</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>Automatisation de tâches et mise en place d’outils digitaux</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>Analyse marketing et stratégie de prospection</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>Développement de solutions SaaS et agents intelligents (en cours).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  )
}
