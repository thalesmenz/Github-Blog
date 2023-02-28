
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { ContainerIssue, Parag } from "./styles";

export function ContainerIssues() {

    const {Posts} = useContext(PostsInfos)

    return (
        <>
        {Posts.map(Post => {
            return (
                <div key={Post.title}>
                    <NavLink to={`/post/1`} >
                        <ContainerIssue>
                            <div>
                                <h1>{Post.title}</h1>
                                <p>Há 1 dia</p>
                            </div>
                        <Parag>{Post.body}</Parag>
                    </ContainerIssue> 
                 </NavLink>
                </div>
            )
        })}
        </>
    )
}