"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const projects = [
  {
    title: "Automatisation de la prospection commerciale des leads sur internet",
    category: "Automatisation & CRM",
    image: "/lead-automation.jpg",
    color: "from-blue-500/20 to-purple-500/20",
    details: {
      contexte: "Les entreprises perdent du temps dans la recherche, la qualification et le suivi des prospects.",
      objectif: "Automatiser la prospection pour générer des leads qualifiés tout en réduisant les tâches répétitives.",
      actions: [
        "Mise en place de workflows automatisés de prospection",
        "Centralisation des leads (formulaires, messages, contacts)",
        "Qualification automatique des prospects selon des critères définis",
        "Organisation du suivi commercial (relances, statuts, priorités)"
      ],
      resultats: [
        "Gain de temps significatif pour les équipes commerciales",
        "Prospection plus structurée et régulière",
        "Meilleure réactivité face aux prospects"
      ],
      competences: ["Automatisation", "Prospection commerciale", "No-code", "Organisation CRM"]
    }
  },
  {
    title: "Présélection automatisée de CV – Service RH",
    category: "IA & RH",
    image: "/cv-automation.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    details: {
      contexte: "Les services RH reçoivent un grand volume de candidatures et manquent de temps pour les analyser efficacement.",
      objectif: "Faciliter la présélection des CV grâce à l’automatisation et à l’intelligence artificielle.",
      actions: [
        "Structuration des critères de sélection (compétences, expérience, mots-clés)",
        "Analyse automatique des CV et classement des profils",
        "Identification des candidats les plus pertinents",
        "Génération de synthèses pour aider à la prise de décision RH"
      ],
      resultats: [
        "Réduction du temps de tri des candidatures",
        "Meilleure objectivité dans la présélection",
        "Aide concrète à la décision pour les recruteurs"
      ],
      competences: ["IA appliquée aux RH", "Analyse de données", "Automatisation", "Structuration de processus"]
    }
  },
  {
    title: "Analyse et optimisation des KPI Meta",
    category: "Data Analytics & Marketing",
    image: "/meta-ads.jpg",
    color: "from-orange-500/20 to-red-500/20",
    details: {
      contexte: "De nombreuses entreprises diffusent des publicités sans analyser correctement leurs performances.",
      objectif: "Analyser les KPI Meta (Facebook & Instagram) pour améliorer les performances des campagnes publicitaires.",
      actions: [
        "Collecte et analyse des indicateurs clés (CTR, CPC, CPM, conversions, engagement)",
        "Interprétation des données et identification des points de blocage",
        "Recommandations d’optimisation des campagnes et contenus",
        "Suivi des performances et ajustements stratégiques"
      ],
      resultats: [
        "Meilleure compréhension des performances publicitaires",
        "Optimisation des budgets marketing",
        "Amélioration du retour sur investissement (ROI)"
      ],
      competences: ["Analyse de données", "Marketing digital", "KPI Meta", "Optimisation de campagnes"]
    }
  },
  {
    title: "Conception d’une automatisation d’assistance virtuel IA",
    category: "Intelligence Artificielle & Automatisation",
    image: "/ai-automation.jpg",
    color: "from-indigo-500/20 to-cyan-500/20",
    details: {
      contexte: "Le support client et la gestion des tâches administratives sont souvent chronophages et répétitifs.",
      objectif: "Créer un assistant virtuel intelligent capable de gérer les interactions clients et d'automatiser les processus internes.",
      actions: [
        "Développement de flux conversationnels complexes (n8n / Make)",
        "Intégration de modèles LLM (OpenAI / Claude) pour la compréhension du langage naturel",
        "Connexion aux outils métiers (CRM, Email, Calendrier) pour des actions autonomes",
        "Configuration de règles de gestion et de sécurisation des données"
      ],
      resultats: [
        "Disponibilité 24/7 pour les réponses aux clients",
        "Réduction drastique du temps de traitement des demandes",
        "Amélioration de l'expérience utilisateur grâce à des réponses instantanées"
      ],
      competences: ["Intelligence Artificielle", "Workflow Automation", "n8n / Make", "Intégration API"]
    }
  },
  {
    title: "Création de site internet E-commerce",
    category: "Développement Web & E-commerce",
    image: "/ecommerce-site.png",
    color: "from-pink-500/20 to-rose-500/20",
    details: {
      contexte: "Les commerçants locaux ont besoin d'une présence en ligne professionnelle pour élargir leur clientèle et faciliter les ventes.",
      objectif: "Concevoir un site e-commerce moderne, rapide et optimisé pour la conversion, avec une gestion simple des commandes.",
      actions: [
        "Design UI/UX premium mettant en valeur les produits phares",
        "Intégration de fonctionnalités de vente (panier, paiement à la livraison, WhatsApp)",
        "Optimisation des performances (SEO, temps de chargement)",
        "Mise en place d'un système de gestion de contenu (CMS) facile à utiliser"
      ],
      resultats: [
        "Augmentation du taux de conversion grâce à un parcours utilisateur fluide",
        "Visibilité accrue sur les moteurs de recherche",
        "Simplification du processus de commande pour les clients"
      ],
      competences: ["Développement Web", "UI/UX Design", "E-commerce", "SEO"]
    }
  },
]

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes Réalisations</h2>
            <p className="text-muted-foreground max-w-lg">
              Projets d’automatisation & d’analyse
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border cursor-pointer hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative aspect-[4/3] overflow-hidden">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative z-10 bg-gradient-to-t from-background via-background/90 to-transparent -mt-20 pt-24 min-h-[180px] flex flex-col justify-end">
                <span className="text-sm font-medium text-primary mb-2 block tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    Voir les détails <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Sheet open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto px-6 py-10">
            {selectedProject && (
                <>
                <div className="absolute right-6 top-6">
                    <SheetClose className="rounded-full h-10 w-10 flex items-center justify-center bg-secondary/80 backdrop-blur-md border border-border hover:bg-secondary transition-colors">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Fermer</span>
                    </SheetClose>
                </div>
                <SheetHeader className="mb-6">
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">{selectedProject.category}</span>
                    <SheetTitle className="text-2xl md:text-3xl font-bold">{selectedProject.title}</SheetTitle>
                    <SheetDescription>
                        Détails complets du projet et impact.
                    </SheetDescription>
                </SheetHeader>
                
                <div className="space-y-8">
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Contexte</h4>
                            <p className="text-muted-foreground">{selectedProject.details.contexte}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Objectifu</h4>
                            <p className="text-muted-foreground">{selectedProject.details.objectif}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Actions réalisées</h4>
                        <ul className="space-y-2">
                            {selectedProject.details.actions.map((action, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>{action}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Résultats / Impact</h4>
                         <ul className="space-y-2">
                            {selectedProject.details.resultats.map((res, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                                    <span>{res}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Compétences mobilisées</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.details.competences.map((comp, i) => (
                                <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                    {comp}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                </>
            )}
        </SheetContent>
      </Sheet>
    </section>
  )
}
