import { useContext } from "react";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { ContainerContentPost } from "./styles";

interface ContentPostProps {
    id: number
}

export function ContentPost({id}:ContentPostProps) {

    const {Posts} = useContext(PostsInfos)

    
    if (Posts.length === 0) {
        return <div>Carregando...</div>
    }


    return (
        <ContainerContentPost>
            <p>{Posts[id].body}</p>
        </ContainerContentPost>
    )
}