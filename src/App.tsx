import GbifOccurrences from "./components/GbifOccurrences.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Occurrence } from "./interfaces/Occurrence.ts";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgreen solid;
`;
const Header = styled.header`
  background-color: darkgreen;
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
  border-bottom: 5px solid #a8d5a2;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  letter-spacing: 1px;
`;

export default function App() {
  // useState Hook to store data.
  const [data, setData] = useState<Occurrence[]>([]);

  // useEffect Hook to fetch data once, when the page loads.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
          "https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&limit=24"
      );
      const { results }: { results: Occurrence[] } = await rawData.json();
      setData(results);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);

  return (
      <ParentDiv>
        <Header>
          <HeaderTitle>GBIF Occurrences</HeaderTitle>
        </Header>
        <GbifOccurrences data={data} />
      </ParentDiv>
  );
}