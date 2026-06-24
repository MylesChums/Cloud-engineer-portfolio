"use client"

import { ProfileHeader } from "@/components/profile-header"
import { LinkCard } from "@/components/link-card"
import { projectLinks, socialLinks } from "@/lib/links"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-xl flex-col px-5 py-16 md:py-24">
      <ProfileHeader />

      <section className="mt-14" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Projects
        </h2>
        <div className="flex flex-col gap-3">
          {projectLinks.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="connect-heading">
        <h2
          id="connect-heading"
          className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Connect
        </h2>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <LinkCard key={link.title} link={link} />
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Myles Chumley. Built with care.</p>
      </footer>
    </main>
  )
}
