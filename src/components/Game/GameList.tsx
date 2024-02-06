import { Game } from './Game';
import './styles.css'

interface GameListProps {
  games: {
    title: string;
    genre: string;
    releaseYear: string;
    platform: string;
    rating: string;
    isMultiplayer: boolean;
    score?: number;
  }[];
}

export function GameList({ games }: GameListProps) {
  return (
    <div>
      <h3>Melhores jogos de todos os tempos</h3>
      {games.map((game, index) => (
        <Game 
          key={index}
          title={game.title}
          genre={game.title}
          releaseYear={game.releaseYear}
          platform={game.platform}
          rating={game.rating}
          isMultiplayer={game.isMultiplayer}
          score={game.score}
        />
      ))}
    </div>
  );
}
