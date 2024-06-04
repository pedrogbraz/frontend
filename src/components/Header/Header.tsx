import backgroundImage from "../../assets/img/background-header.png"
import { Button } from "../Button/Button"
import { Container } from "../Container/Container"
import { HeaderTitle } from './HeaderTitle'

export function Header() {
  return (
    <>
      <header style={{backgroundImage: `url(${backgroundImage})`}} className="w-auto bg-cover bg-center bg-no-repeat">
      <Container>
        <HeaderTitle />
        <div className="mt-32 space-y-6 mb-28">
          <p className="text-7xl font-bold text-evergreen">Encontre livros <br /> que seja a sua cara!</p>
          <p className="text-xl text-[#6F7373]">Lorem ipsum</p>
          <Button text="Pesquisar livros" className="bg-evergreenLight text-white" />
        </div>
      </Container>
    </header>
    </>
  )
}