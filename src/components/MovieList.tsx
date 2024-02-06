import { Movie } from "./Movie";

interface MovieListProps {
  movies: { title: string; genre: string; releaseYear: number }[];
}
export function MovieList({ movies }: MovieListProps) {
  return (
    <div>
      <h3>Lista de filmes</h3>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.releaseYear}
        />
      ))}
    </div>
  );
}
