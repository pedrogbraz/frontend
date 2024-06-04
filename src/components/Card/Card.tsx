import { Badges } from "../Badge/Badge";

export function Card() {
  return (
    <div className="grid grid-cols-3 px-4 py-2 gap-5 shadow-lg rounded-2xl border border-gray-100 max-w-lg w-full items-center">
      <img className="col-span-1 w-full h-full" src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg" />
      <div className="col-span-2">
        <p className="font-bold text-xl text-evergreen">O Código Limpo</p>
        <p className="text-sm text-grayText">Robert C. Martin</p>
        <Badges text="Computer Engineer" />
        <p className="text-sm">
          <strong className="font-semibold">Sinopse: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida. In hac habitasse platea dictumst.
        </p>
        <button className="border-evergreenLight border-2 px-4 py-1.5 rounded-lg font-semibold text-evergreenLight mt-4 w-1/2">Ver mais</button>
      </div>
    </div>
  )
}