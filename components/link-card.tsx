"use client"

import { ArrowUpRight } from "lucide-react"
import type { PortfolioLink } from "@/lib/links"

export function LinkCard({ link }: { link: PortfolioLink }) {
  const Icon = link.icon
  const isExternal = link.href.startsWith("http")

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="font-medium leading-tight text-card-foreground">
            {link.title}
          </span>
          {link.meta && (
            <span className="hidden shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground sm:inline">
              {link.meta}
            </span>
          )}
          <ArrowUpRight
            className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </span>
        <span className="mt-1 block text-pretty text-sm leading-relaxed text-muted-foreground">
          {link.description}
        </span>
      </span>
    </a>
  )
}
