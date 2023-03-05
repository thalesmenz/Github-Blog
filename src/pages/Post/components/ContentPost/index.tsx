import { useContext } from "react";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { ContainerContentPost } from "./styles";
import ReactMarkdown from 'react-markdown';

interface ContentPostProps {
    id: number
}

export function ContentPost({id}:ContentPostProps) {

    const {Posts} = useContext(PostsInfos)

    const markdown = Posts[id].body
    
    if (Posts.length === 0) {
        return <div>Carregando...</div>
    }


    return (
        <ContainerContentPost>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </ContainerContentPost>
    )
}