import Carousel from 'react-multi-carousel'
import { ContainerItemStyled } from './style'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const items = [
  {
    name: 'Jose Bonifácio',
    profession: 'Professor de libras',
  },
  {
    name: 'Flora Figueiredo',
    profession: 'Poeta',
  },
  {
    name: 'Valdinei Souza',
    profession: 'Pedreiro',
  },
  {
    name: 'Fátima Bernardes',
    profession: 'Jornalista',
  },
]

export default function CarouselStyled() {
  return (
    <Carousel
      ssr={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      responsive={responsive}
    >
      {items.map((item) => (
        <ContainerItemStyled key={item.name}>
          <h1>{item.name}</h1>
          <h2>{item.profession}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam molestias sit aperiam consectetur. Consequatur magnam
            explicabo aliquam earum inventore numquam, quibusdam ipsa soluta
            dignissimos maiores nostrum dolore? Eveniet, quae!
          </p>
        </ContainerItemStyled>
      ))}
    </Carousel>
  )
}
