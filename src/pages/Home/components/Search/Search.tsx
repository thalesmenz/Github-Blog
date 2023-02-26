import { useContext } from "react";
import { SearchPostContext } from "../../../../contexts/SearchContext";
import { ContainerSearch } from "./styles";

export function Search() {

    const {valueSearch, setValueSearch} = useContext(SearchPostContext)

    return (
        <ContainerSearch>
            <div>
                <p>Publicações</p>
                <p>6 publicações</p>
            </div>
            <input type="text" 
            placeholder="Buscar conteúdo" 
            value={valueSearch} 
            onChange={(event) => setValueSearch(event.target.value)} />
        </ContainerSearch>
    )
}