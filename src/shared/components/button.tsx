"use client"

import React, { ButtonHTMLAttributes, memo, PropsWithChildren } from "react"
import cn from "classnames"

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `
        bg-light-green
        text-white
        font-bold
        rounded-full
        px-5
        py-2
        transition-all
        hover:scale-105
      `,
        props.className,
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
