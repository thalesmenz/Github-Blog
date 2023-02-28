import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SearchPostContext } from "../../../../contexts/SearchContext";
import { ContainerSearch } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostsInfos } from "../../../../contexts/PostsInfosContext";


const SearhFormSchema = z.object({
    postContent: z.string()
})

type SearhFormInputs = z.infer<typeof SearhFormSchema>

export function Search() {

    const { setValueSearch } = useContext(SearchPostContext)

    const {Posts} = useContext(PostsInfos)



    const {register, handleSubmit } = useForm<SearhFormInputs>({
        resolver: zodResolver(SearhFormSchema)
    })

    function handleSearchPost(postContent: SearhFormInputs) {
        setValueSearch(postContent)
    }

    return (
        <ContainerSearch>
            <div>
                <p>Publicações</p>
                <p>{Posts.length} publicações</p>
            </div>
            <form onSubmit={handleSubmit(handleSearchPost)}>
                <input type="text" 
                placeholder="Buscar conteúdo" 
                {...register('postContent')}
                />
            </form>
        </ContainerSearch>
    )
}