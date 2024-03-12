import { ReactNode, createContext, useContext, useState } from "react";

// Definindo o tipo para os dados do contexto
interface MyContextData {
    data: string;
    updateData: (newData: string) => void;
}

// Criando o contexto
const MyContext = createContext<MyContextData | undefined>(undefined);


// Definindo as props para o provedor do contexto
interface MyContextProviderProps {
    children: ReactNode;
}

// Provedor (Provider) que fornece os dados
function MyContextProvider({ children }: MyContextProviderProps): JSX.Element {
    const [data, setData] = useState('Dados iniciais');

    function updateData(newData: string): void {
        setData(newData)
    }

    return (
        <MyContext.Provider value={{ data, updateData}}>
            {children}
        </MyContext.Provider>
    )
}

// Consumidor (Consumer) que consome os dados
function MyComponent(): JSX.Element {
    const contextData = useContext(MyContext);

    if (!contextData) {
        throw new Error("MyComponent must be used withn a MyContextProvider");
    }

    const {data, updateData} = contextData;

    return (
        <div>
            <p>Dados: {data}</p>
            <button onClick={() => updateData('Novos dados')}>Atualizar dados</button>
        </div>
    )
}


function Contexts(): JSX.Element {
    return (
        <MyContextProvider>
            <MyComponent />
        </MyContextProvider>
    )
}

export default Contexts;