import { Container } from './components/Container/Container'
import { HeaderTitle } from './components/Header/HeaderTitle'
import './index.css'

function App() {
  return (
    <>
    <Container>
      <HeaderTitle />
      <h1 className='text-evergreen text-4xl'>Hello World!</h1>
    </Container>
    
    </>
  )
}

export default App
