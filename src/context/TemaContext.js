import { createContext, useState } from "react";

export const TemaContext = createContext({})

export function TemaProvider( {children} ){
    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual]
        }}>
            {children}
        </TemaContext.Provider>
    )
}