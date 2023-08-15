"use client"

import { memo, PropsWithChildren } from "react"
import Link from "next/link"

type ButtonProps = PropsWithChildren & {
  href: string
}

function LinkButton({ href, children, ...props }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="bg-light-green text-white text-base font-bold rounded-full px-10 py-2">
        {children}
      </button>
    </Link>
  )
}

export default memo(LinkButton)
