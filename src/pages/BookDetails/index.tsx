import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";

export function BookDetails() {
  return (
    <Container>
      <HeaderTitle />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-32 mb-20">
        <div>
          <h1 className="text-5xl text-evergreen font-bold mb-4">O Código Limpo</h1>
          <p className="text-grayText text-3xl mb-16">Robert C. Martin</p>
          <p className="text-grayText text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna mollis, volutpat metus ut, convallis nisi. Sed vel neque scelerisque, pretium magna vel, tempus massa. Phasellus vel erat a orci egestas ultricies non in erat. Curabitur sodales et enim in rutrum. Nunc tortor nunc, posuere eget convallis non, posuere vel libero. Quisque tempus feugiat auctor. Pellentesque in libero leo. Cras dui libero, posuere eu maximus et, sollicitudin eu quam. Fusce dapibus arcu nec justo accumsan lobortis. Cras velit mauris, varius ac tellus eget, tincidunt sagittis orci. Integer ullamcorper consectetur eros ac gravida. Cras blandit eros venenatis massa sodales, id pretium leo suscipit. Vivamus id lectus id lorem ornare aliquet eget nec eros. Maecenas et fermentum risus, ac interdum arcu. In odio erat, blandit vitae metus nec, fermentum porta lectus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Container>
  )
}