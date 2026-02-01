"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Pourquoi investir dans un site web ou une automatisation maintenant ?",
    answer: "Le digital n'attend pas. Vos concurrents prennent déjà des parts de marché en ligne. Un site web performant ou une automatisation bien pensée n'est pas une dépense, c'est un actif qui travaille pour vous 24h/24 et 7j/7 pour générer du revenu."
  },
  {
    question: "Je n'ai pas le temps de gérer un site web.",
    answer: "C'est justement pour cela que je conçois des solutions autonomes ou très simples à gérer. De plus, avec mes systèmes d'automatisation, vous gagnerez du temps sur vos tâches répétitives au lieu d'en perdre à gérer la technique."
  },
  {
    question: "Pourquoi faire appel à un indépendant plutôt qu'une grande agence ?",
    answer: "Avec moi, vous avez un interlocuteur unique, réactif et investi personnellement dans votre succès. Pas de frais de structure cachés, juste une expertise ciblée et une communication fluide pour un résultat sur-mesure."
  },
  {
    question: "Combien coûte un projet ?",
    answer: "Chaque projet est unique. Je propose des solutions adaptées à différents budgets, du site vitrine essentiel à l'application web complexe. Discutons de vos besoins et je vous proposerai l'option la plus rentable pour votre situation."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Pour un site vitrine standard, comptez 2 à 3 semaines. Pour des projets plus complexes ou des automatisations poussées, cela peut varier de 4 à 8 semaines. Je m'engage toujours sur un calendrier clair dès le début du projet."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-3xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Questions Fréquentes</h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de lancer votre projet.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border/50 rounded-lg bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
