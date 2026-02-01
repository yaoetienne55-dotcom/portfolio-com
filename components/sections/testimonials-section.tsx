"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Kouamé",
    role: "Commerçante",
    content: "Etienne a transformé notre vision en un site e-commerce performant. Les ventes ont augmenté de 40% dès le premier mois grâce à l'optimisation UX. Son approche stratégique fait toute la différence.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
    avatar: "SK"
  },
  {
    name: "Jean-Paul Konan",
    role: "Directeur Commercial",
    content: "L'automatisation de notre prospection a été un véritable tournant. Nous gagnons un temps précieux et nos leads sont beaucoup plus qualifiés qu'avant. Un investissement rentabilisé en quelques semaines.",
    image: "https://images.unsplash.com/photo-1506272517308-0975bc2b4b92?q=80&w=200&h=200&auto=format&fit=crop",
    avatar: "JK"
  },
  {
    name: "Amina Diarra",
    role: "Consultante RH",
    content: "Très professionnel et réactif. Le système de tri de CV automatisé qu'il a mis en place me fait gagner des heures chaque semaine. Etienne comprend parfaitement les enjeux métier.",
    image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=200&h=200&auto=format&fit=crop",
    avatar: "AD"
  },
  {
    name: "Moussa Traoré",
    role: "Entrepreneur",
    content: "Une collaboration exceptionnelle. Etienne ne se contente pas de coder, il apporte une vision business qui change tout. Notre nouvelle plateforme est rapide, belle et surtout, elle convertit.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&h=200&auto=format&fit=crop",
    avatar: "MT"
  },
  {
    name: "Olivia Yao",
    role: "Responsable Marketing",
    content: "Grâce aux outils d'analyse mis en place par Etienne, nous pilotons enfin nos campagnes avec des données réelles. Plus besoin de deviner, nous savons ce qui fonctionne.",
    image: "https://images.unsplash.com/photo-1621508602231-9038fc7d9595?q=80&w=200&h=200&auto=format&fit=crop",
    avatar: "OY"
  }
]

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Orbs for Glassmorphism Context */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ce que disent mes clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de mes partenaires est ma priorité absolue. Découvrez leurs retours sur notre collaboration.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-8 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="w-[350px] md:w-[450px] shrink-0 border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors duration-500"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-bold text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        
        {/* Faders for sides */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
