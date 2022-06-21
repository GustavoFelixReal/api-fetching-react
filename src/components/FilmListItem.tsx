import { Film } from '../types';

import { StyledFilmListItem } from './styled';

interface FilmListItemProps {
  film: Film;
}

export default function FilmListItem({ film }: FilmListItemProps) {
  return (
    <StyledFilmListItem banner={film.movie_banner}>
      <div className="film-info">
        <div className="film-header">
          <img src={film.image} alt={`Capa do filme "${film.title}"`} />
          <h2>
            {film.title} ({film.release_date})
          </h2>

          <small>Dirigido por: </small>
          <h3>{film.director}</h3>

          <small>Sinopse: </small>
          <p>{film.description}</p>
        </div>
      </div>
      <div className="film-banner"></div>
    </StyledFilmListItem>
  );
}