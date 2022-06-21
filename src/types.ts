export interface IResponse<T> {
  status: number;
  response: T
}

export interface Film {
  id: string
  title: string
  originalTitle: string
  originalTitleRomanised: string
  image: string
  movieBanner: string
  description: string
  director: string
  producer: string
  releaseDate: string
  runningTime: string
  rtScore: string
  people: string[]
  species: string[]
  locations: string[]
  vehicles: string[]
  url: string
}

export interface Person {
  age: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  id: string
  name: string
  species: string
  url: string
}
