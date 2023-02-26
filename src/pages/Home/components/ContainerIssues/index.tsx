
import { useContext } from "react";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { ContainerIssue, Parag } from "./styles";

export function ContainerIssues() {

    const {Posts} = useContext(PostsInfos)

    return (
        <>
        {Posts.map(Post => {
            return (
                <ContainerIssue key={Post.title}>
                    <div>
                        <h1>{Post.title}</h1>
                        <p>Há 1 dia</p>
                    </div>
                    <Parag>{Post.body}</Parag>
                </ContainerIssue> 
            )
        })}
        </>
    )
}