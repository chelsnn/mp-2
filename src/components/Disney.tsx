import styled from "styled-components";
import {Character} from "./interfaces/Characters.ts";

const AllCharsDiv=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
background-color: #832161;


`;

const SingleCharDiv=styled.div<{status: string}>`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 35%;
padding: 2%;
margin: 1%;
color: #ffff;
border: 3px groove #fff8f6;
font-family: Papyrus;
background-color: #fadf63;
border-radius: 50%;
text-align: center;`;


const StyledImg=styled.img`
border-radius: 50%;
width:60%;


align-self: center;

`;

const Styledh=styled.div<{status: string}>`
font-weight: bolder;
font-size: x-large;



align-self: center;

`;


export default function Disney(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <Styledh>{char.name}</Styledh>
                        <StyledImg src={char.imageUrl} alt={`image of ${char.name}`}/>
                    </SingleCharDiv>
                    )
            }
        </AllCharsDiv>
    );
}