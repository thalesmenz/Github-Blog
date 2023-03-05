import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostsInfos } from "../../../../contexts/PostsInfosContext";
import { DateFormatter } from "../../../../utils/Formatter";
import { ContainerIssue, Parag, StyledNavLink } from "./styles";


export function ContainerIssues() {

    const {Posts} = useContext(PostsInfos)

    console.log(Posts)

    return (
        <>
        {Posts.map((Post, index) => {
            return (
                <div key={index}>
                    <StyledNavLink to={`/post/${index}`} >
                        <ContainerIssue>
                            <div>
                                <h1>{Post.title}</h1>
                                <p>{DateFormatter.format(new Date(Post.updated_at))}</p>
                            </div>
                        <Parag>{Post.body}</Parag>
                    </ContainerIssue> 
                 </StyledNavLink>
                </div>
            )
        })}
        </>
    )
}