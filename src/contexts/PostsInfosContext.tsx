import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PostsInfosProps {
    children: ReactNode
}

interface PostsInfosTypes {
    Posts: PostsTypes[]
}

interface PostsTypes {
    title: string,
    body: string,
}

export const PostsInfos = createContext({} as PostsInfosTypes)

export function PostsInfosContext({children}: PostsInfosProps ) {

    const [Posts, setPosts] = useState<PostsTypes[]>([])

    useEffect(() => {
        GetPosts()
    }, [])

    async function GetPosts() {
        const response = await api.get('/repos/thalesmenz/Github-Blog/issues')

        setPosts( response.data)
    }

    return (
        <PostsInfos.Provider value={{Posts}}>
            {children}
        </PostsInfos.Provider>
    )
}