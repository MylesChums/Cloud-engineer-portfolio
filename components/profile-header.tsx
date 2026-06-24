"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-border md:h-32 md:w-32">
        <Image
          src="/profile.jpg"
          alt="Portrait of Myles Chumley"
          fill
          sizes="128px"
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-balance md:text-3xl">
        Myles Chumley
      </h1>

      <p className="mt-1 text-sm font-medium text-primary md:text-base">
        Cloud Engineer
      </p>

      <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        I specialize in building scalable, available, and AI powered Cloud Platforms.
      </p>

      <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        <span>Dallas, Texas</span>
      </div>
    </header>
  )
}
