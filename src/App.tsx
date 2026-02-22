import { useState, useEffect } from 'react'
import Disney from "./components/Disney.tsx"
import styled from "styled-components";
import {type Character} from "./interfaces/Characters.ts";

const ParentDiv=styled.div`
  width: 80vw;
  
  margin-left: 20%;

  justify-self: center;
  border: 5px darkgoldenrod solid;`;


export default function App() {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.disneyapi.dev/character?films[0]=Hercules");
      const {data} : {data: Character[]} = await rawData.json();
      setData(data);
    }
    fetchData()
    .then(() => console.log("Data fetched successfully"))
    .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Disney data={data}/>
    </ParentDiv>
  )
    
}