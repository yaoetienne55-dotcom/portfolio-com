import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, LineChart, Paintbrush, Target } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24 min-h-[calc(100vh-4rem)] flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Du Plan Commercial <br />
                au <span className="text-primary">Site Web</span> <br />
                <span className="text-primary">Performant.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                J&apos;accompagne vos projets avec stratégie, action et présence digitale optimisée. Transformez votre vision en une machine à convertir.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="text-base font-semibold group h-12 px-8">
                <Link href="https://wa.me/2250715967408" target="_blank">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-semibold h-12 px-8">
                <Link href="/portfolio">
                  Voir mes réalisations
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Stratégie sur-mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <Paintbrush className="h-4 w-4" />
                <span>Design Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span>SEO Optimisé</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted/20 border border-border shadow-2xl">
              {/* Fallback pattern/gradient if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background opacity-50" />
              
              <div className="flex h-full w-full items-end justify-center pb-0">
                  <div className="relative h-full w-full flex items-end justify-center">
                    <Image
                      src="/hero-portrait.png"
                      alt="Portrait professionnel"
                      fill
                      className="object-contain object-bottom"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 animate-fade-in">
                 <div className="flex items-center gap-3 rounded-lg bg-background/80 backdrop-blur-md border border-border p-3 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Projets Livrés</p>
                      <p className="text-xs text-muted-foreground">100% Satisfaction</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
