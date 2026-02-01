"use client"

import { motion } from "framer-motion"
import { 
  LineChart, 
  Megaphone, 
  Code2, 
  Bot, 
  Wrench,
  CheckCircle2
} from "lucide-react"

const expertiseCategories = [
  {
    title: "Stratégie commerciale, marketing & négociation",
    icon: <LineChart className="h-8 w-8" />,
    color: "bg-blue-500/10 text-blue-500",
    description: "Élaboration de plans d'action, techniques de vente avancées et négociation B2B."
  },
  {
    title: "Marketing digital & communication",
    icon: <Megaphone className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-500",
    description: "Gestion de campagnes publicitaires (Ads)"
  },
  {
    title: "Développement web",
    icon: <Code2 className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-500",
    description: "Création de sites modernes"
  },
  {
    title: "Intelligence artificielle & automatisation",
    icon: <Bot className="h-8 w-8" />,
    color: "bg-rose-500/10 text-rose-500",
    description: "Intégration d'IA (LLMs), chatbots et workflows automatisés (n8n)."
  },

]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise & Compétences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche pluridisciplinaire combinant vision stratégique et maîtrise technique pour propulser vos projets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCategories.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                        {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {category.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
