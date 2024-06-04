type TitleProps = {
  text: string
}

export function Title({text}: TitleProps) {
  return (
    <div>
      <h1 className="w-fit font-bold text-4xl text-evergreen border-evergreenLight border-b-4">{text}</h1>
    </div>
  )
}