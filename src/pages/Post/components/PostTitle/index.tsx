import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProfileContext } from "../../../../contexts/InfosProfileContext";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { DateFormatter } from "../../../../utils/Formatter";
import { ContainerAll, ContainerMiniInfos, ContainerTitlePost, HeadersInfo } from "./styles";

interface PostTitleProps {
    id: number
}

export function PostTitle({id}: PostTitleProps) {

    const {Posts} = useContext(PostsInfos)

    const {infoPerfil} = useContext(ProfileContext)


    console.log(Posts)

    
    if (Posts.length === 0) {
        return <div>Carregando...</div>
    }

    return (
        <ContainerAll >
            <ContainerTitlePost>
                <HeadersInfo>
                    <NavLink to='/'>
                        <CaretLeft size={16} />
                        <p>VOLTAR</p>
                    </NavLink>
                    <NavLink to={Posts[id].html_url}>
                        <p>VER NO GITHUB</p>
                        <ArrowSquareOut size={16} />
                    </NavLink>
                </HeadersInfo>
                <div>
                    <h1>{Posts[id].title}</h1>
                    <ContainerMiniInfos>
                        <span>
                            <UserCircle size={20} />
                            {infoPerfil.login}
                        </span>
                        <span>
                            <CalendarBlank size={28} />
                            {DateFormatter.format(new Date(Posts[id].updated_at))}
                        </span>
                        <span>
                            <ChatCircle size={20} />
                            {Posts[id].comments}
                           <span> comentários</span> 
                        </span>
                    </ContainerMiniInfos>
                </div>
            </ContainerTitlePost>
        </ContainerAll>
    )
}
