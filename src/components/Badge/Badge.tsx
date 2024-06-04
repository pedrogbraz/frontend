import { useCallback } from "react"

type BadgesProps = {
  text: string
}

export function Badges({text}: BadgesProps) {

  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 20%)`;
    return { lightness, darkness }
  }, []);

  return (
    <p 
    style={{backgroundColor: randomColors().lightness, color: randomColors().darkness}}
    className="my-3 text-xs w-fit px-2 py-[2px] rounded-full items-center">
      {text}
    </p>
  )
}