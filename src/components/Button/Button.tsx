import classNames from "classnames"

type ButtonProps = {
  text: string;
  className?: string;
  variant?: 'light' | 'dark';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (title: any) => void;
}

export function Button({text, className, variant = 'dark', onClick}: ButtonProps) {
  return(
    <button className={classNames([
      'font-semibold px-4 py-2 rounded-lg shadow-md',
      variant === 'dark' && 'bg-evergreenLight text-white',
      variant === 'light' && 'bg-white border-2 border-evergreenLight text-evergreenLight', className
    ])}
    onClick={onClick}
    >{text}</button>
  )
}