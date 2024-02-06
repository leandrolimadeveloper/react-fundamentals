interface GameProps {
  title: string;
  genre: string;
  releaseYear: string;
  platform: string;
  rating: string;
  isMultiplayer: boolean;
  score?: number;
}

export function Game(props: GameProps) {
  return (
    <ul>
      <li><strong>{props.title}</strong></li>
      <li><strong>Gênero:</strong> {props.genre}</li>
      <li><strong>Ano de Lançamento:</strong> {props.releaseYear}</li>
      <li><strong>Plataforma:</strong> {props.platform}</li>
      <li><strong>Classificação:</strong> {props.rating}</li>
      {props.score !== undefined && <li><strong>Pontuação:</strong> {props.score}</li>}
    </ul>
  )
}
