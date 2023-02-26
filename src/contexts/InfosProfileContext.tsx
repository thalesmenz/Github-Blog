import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface InfosProfileProviderProps {
    children: ReactNode
}

interface InfosProfileContextType {
    infoPerfil: InfosPerfilGet
}

interface InfosPerfilGet  {
    avatar_url: string,
    name: string,
    bio: string,
    login: string,
    followers: string,
}


export const ProfileContext = createContext({} as InfosProfileContextType)

export function InfosProfileContext({children}: InfosProfileProviderProps) {

    const [infoPerfil, setInfoPerfil] = useState<InfosPerfilGet>({
        avatar_url: '',
        name: '',
        bio: '',
        login: '',
        followers: '',
    }) 

    useEffect(() => {
        GetInfoPerfil()
    }, [])

    async function GetInfoPerfil() {
        const response = await api.get('/users/thalesmenz')

        setInfoPerfil(response.data)
    }


    return (
        <ProfileContext.Provider value={{infoPerfil}}>
            {children}
        </ProfileContext.Provider>
    )
}