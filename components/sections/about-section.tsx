"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Counter } from "@/components/ui/counter"

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

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionné par le développement web et le design d'interface, je crée des expériences numériques qui marquent les esprits. 
            Mon approche combine esthétique soignée et performance technique pour donner vie à vos idées les plus ambitieuses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10"
            >
              <div className="text-primary mb-3 p-3 bg-primary/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
