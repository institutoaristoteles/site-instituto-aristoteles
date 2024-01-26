"use client"

import Image from "next/image"
import { memo } from "react"
import { Author } from "@/integration/types"

function PostAuthorBadge({ avatar, name }: Author) {
  return (
    <div className="flex gap-2 items-center">
      {avatar && (
        <Image
          src={avatar}
          alt={`Avatar de ${name}`}
          width={40}
          height={40}
          className="rounded-full w-7 shadow"
        />
      )}
      <span className="text-xs">{name}</span>
    </div>
  )
}

export default memo(PostAuthorBadge)
