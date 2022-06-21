import { Film } from '../types';

import FilmListItem from './FilmListItem';
import { FilmListContainer } from './styled';

interface FilmListProps {
  films: Film[];
}

export default function FilmList({ films }: FilmListProps) {
  return (
    <FilmListContainer>
      {films.length > 0 && (
        <>
          {films.map((film) => (
            <FilmListItem key={film.id} film={film} />
          ))}
        </>
      )}
    </FilmListContainer>
  );
}