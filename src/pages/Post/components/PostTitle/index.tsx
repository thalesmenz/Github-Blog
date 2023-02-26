import { useContext } from "react";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { ContainerAll, ContainerTitlePost, HeadersInfo } from "./styles";

interface PostTitleProps {
    id: number
}

export function PostTitle({id}: PostTitleProps) {

    const {Posts} = useContext(PostsInfos)

    
    if (Posts.length === 0) {
        return <div>Carregando...</div>
    }

    return (
        <ContainerAll >
            <ContainerTitlePost>
                <HeadersInfo>
                    <p>voltar</p>
                    <p>Ver no github</p>
                </HeadersInfo>
                <div>
                    <h1>{Posts[id].title}</h1>
                    <div>
                        thales ha 1 dia 5 comentarios
                    </div>
                </div>
            </ContainerTitlePost>
        </ContainerAll>
    )
}