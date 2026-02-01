"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "57ce6690-22fb-40f2-80a6-d849694c6b59") 
    
    // For now, I'll use a public test key or just explain the next step
    // But since the user wants it to WORK, I'll set up the logic.

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult({ success: true, message: "Merci ! Votre message a été envoyé avec succès." })
        ;(e.target as HTMLFormElement).reset()
      } else {
        setResult({ success: false, message: "Une erreur est survenue. Veuillez réessayer." })
      }
    } catch (error) {
      setResult({ success: false, message: "Erreur de connexion. Vérifiez votre internet." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à propulser votre business ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vous avez un projet en tête ou vous souhaitez simplement discuter des opportunités pour votre entreprise ? 
              Remplissez le formulaire ou contactez-moi directement par téléphone ou email.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground italic">yaoetienne55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <p className="text-muted-foreground">+225 05 75 80 90 69 / +225 07 15 96 74 08</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Localisation</p>
                  <p className="text-muted-foreground italic">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                  <Input id="name" name="name" required placeholder="Votre nom" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" required placeholder="votre@email.com" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Objet</label>
                <Input id="subject" name="subject" required placeholder="Sujet de votre message" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" required placeholder="Dites-m'en plus sur votre projet..." className="min-h-[150px] bg-background/50" />
              </div>

              {result && (
                <div className={`p-4 rounded-lg text-sm flex items-center gap-3 ${result.success ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                  {result.success && <CheckCircle2 className="h-5 w-5" />}
                  {result.message}
                </div>
              )}

              <Button disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold h-12">
                {isSubmitting ? (
                  <>Patientez... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                ) : (
                  <>Envoyer le message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
