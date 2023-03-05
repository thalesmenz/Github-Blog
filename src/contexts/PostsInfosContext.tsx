import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface PostsInfosProps {
    children: ReactNode
}

interface PostsInfosTypes {
    Posts: PostsTypes[]
    setPosts: (value: PostsTypes[]) => void
}

interface PostsTypes {
    title: string,
    body: string,
    updated_at: Date
    html_url: string
    comments: number
}

export const PostsInfos = createContext({} as PostsInfosTypes)

export function PostsInfosContext({children}: PostsInfosProps ) {

    const [Posts, setPosts] = useState<PostsTypes[]>([])

    useEffect(() => {
        GetPosts()
    }, [])

    async function GetPosts() {
        const response = await api.get('/repos/thalesmenz/Github-Blog/issues')

        setPosts(response.data)
    }

    return (
        <PostsInfos.Provider value={{Posts, setPosts}}>
            {children}
        </PostsInfos.Provider>
    )
}