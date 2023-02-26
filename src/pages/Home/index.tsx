import { Header } from "../../components/Header";
import { ContainerIssues } from "./components/ContainerIssues";
import { Perfil } from "./components/Perfil";
import { Search } from "./components/Search/Search";
import { ContainerAll, ContainerContent, SpaceContainers } from "./styles";

export function Home() {
    return (
        <>       
        <ContainerAll>
            <ContainerContent>
                <Perfil />
                <Search />
                <SpaceContainers>
                    <ContainerIssues />
                </SpaceContainers>
            </ContainerContent>
        </ContainerAll>
        </>

    )
}