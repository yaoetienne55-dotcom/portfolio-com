"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl">Etienne Yao — Portfolio</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 pt-4">
           <Link href="/" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setOpen(false)}>
             Accueil
           </Link>
           <Link href="/#about" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setOpen(false)}>
             About me
           </Link>
           <Link href="/#portfolio" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setOpen(false)}>
             Réalisations
           </Link>
           <Link href="/#skills" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setOpen(false)}>
             Compétences
           </Link>
           <Link href="/#contact" className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setOpen(false)}>
             Contact
           </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
