import FilmList from '../components/FilmList'

export const getStaticProps = async () => {
  const { response: films } = (await fetch(
    'http://localhost:3000/api/hello'
  ).then((res) => res.json()))

  return {
    props: {
      films: films
    }
  }
}

const Home = ({ films }) => {
  return <FilmList films={films} />
}

export default Home
