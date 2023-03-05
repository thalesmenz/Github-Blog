import { ContainerInfo, ContainerPerfil, ContainerTitle, FooterInHeader } from "./styles";
import { useContext } from "react";
import { ArrowSquareOut, UserCircle, Users } from 'phosphor-react'
import { ProfileContext } from "../../../../contexts/InfosProfileContext";

export function Perfil() {

    const {infoPerfil} = useContext(ProfileContext)

    return (
        <ContainerPerfil>
            <img src={infoPerfil.avatar_url} alt="" />
            <ContainerInfo>
            <ContainerTitle>
                <h1>{infoPerfil.name}</h1>
                <div>
                    <a href="https://github.com/thalesmenz">
                    <p>Github</p>
                    <span>
                        <ArrowSquareOut size={20} />
                    </span>
                </a>
                </div>
            </ContainerTitle>
            <div>
            <p>{infoPerfil.bio}</p> 
            </div>
            <FooterInHeader>
                <div>
                    <span>
                        <UserCircle size={20} />
                    </span>
                    <p>{infoPerfil.login} </p>
                </div>
                <div>
                    <span>
                        <Users size={20} />
                    </span>
                   <p>
                    {infoPerfil.followers} seguidores
                    </p>   
                </div>
            </FooterInHeader>
            </ContainerInfo>

        </ContainerPerfil>
    )
}