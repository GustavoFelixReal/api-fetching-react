import type { GetStaticProps, NextPage } from 'next'
import FilmList from '../components/FilmList'
import { Film, IResponse } from '../types'

interface HomeProps {
  films: Film[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { response: films } = (await fetch(
    'http://localhost:3000/api/hello'
  ).then((res) => res.json())) as IResponse<Film[]>

  return {
    props: {
      films: films
    }
  }
}

const Home: NextPage<HomeProps> = ({ films }) => {
  return <FilmList films={films} />
}

export default Home
