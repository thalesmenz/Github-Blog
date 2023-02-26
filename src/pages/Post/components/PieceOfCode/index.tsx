import { ContainerPieceOfCode } from "./styles";

export function PieceOfCode() {
    return (
        <ContainerPieceOfCode>
            <div>
                <p>let foo = 42</p>
                <p>foo = 'bar'</p>
                <p>foo = true</p>
            </div>
            <div>
                <p>// foo is now a number</p>
                <p>// foo is now a string</p>
                <p>// foo is now a boolean</p>
            </div>  
        </ContainerPieceOfCode>

    )
}