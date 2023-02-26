import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsInfos } from "../../contexts/PostsInfosContext";
import { ContentPost } from "./components/ContentPost";
import { PieceOfCode } from "./components/PieceOfCode";
import { PostTitle } from "./components/PostTitle";
import { ContainerAll } from "./styles";

export function Post() {

    let {id} = useParams()

    return (
        <ContainerAll>
            <PostTitle id={id ? Number.parseInt(id) : 0 }/>
            <ContentPost id={id ? Number.parseInt(id) : 0 } />
        </ContainerAll>
    )
}