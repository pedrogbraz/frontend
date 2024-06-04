import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <div className="px-5 py-4 max-w-7xl mx-auto w-full">
      {children}
    </div>
  )
}