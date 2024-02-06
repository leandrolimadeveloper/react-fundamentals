interface MovieProps {
    title: string
    genre: string
    releaseYear: number
}

export function Movie({title, genre, releaseYear}: MovieProps) {
    return (
        <div>
            <h4>{title}</h4>
            <p>Gênero: {genre}</p>
            <p>Ano de Lançamento: {releaseYear}</p>
        </div>
    )
}