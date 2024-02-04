interface UserProfileProps {
    name: string;
    age: number;
    location: string;
}

export function UserProfile({name, age, location}: UserProfileProps): JSX.Element {
    
    
    return (
        <div>
            <h2>Perfil do Usuário</h2>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Localização: {location}</p>
        </div>
    )
}