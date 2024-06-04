import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

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
      <Title text='O que você quer ler hoje?' />
      <div className="grid grid-cols-8 gap-6">
        {genderBooks.map(book => (
          <Button text={book} className={''} variant={selectedGender.includes(book) ? 'dark' : 'light'} onClick={() => handleSelect (book)} />
        ))}
      </div>
    </Container>
  </>
  )
}