import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

const genderBooks = [
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção',
  'Romance',
]

export function Home() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  
  const handleSelect = useCallback((title: string) => {
    if (selectedGender.includes(title)) {
      const removeGender = selectedGender.filter(item => item != title)
      setSelectedGender(removeGender);
    } else {
      setSelectedGender([...selectedGender, title]);
    }
  },[selectedGender])
  
  return (
    <>
    <Header />
    <Container>
      <div className="mt-12">
        <Title text='O que você quer ler hoje?' />
        <div className="grid grid-cols-3 md:grid-cols-8 gap-8 my-16">
          {genderBooks.map(book => (
            <Button text={book} className={''} variant={selectedGender.includes(book) ? 'dark' : 'light'} onClick={() => handleSelect (book)} />
          ))}
        </div>
        <div className="space-y-7">
          <p className="text-3xl font-bold text-evergreen">Sobre o que você gostaria de receber uma recomendação de livro?</p>
          <input className="text-grayText shadow-md px-6 py-4 rounded-2xl w-full outline-evergreenLight" type="text" placeholder="Eu gostaria de ler..." />
        </div>
        <div className="mt-20 space-y-12">
          <Title text='Livros  recomendados' />
          <div className="grid grid-cols-3">
            <Card />
          </div>
        </div>
      </div>
    </Container>
  </>
  )
}