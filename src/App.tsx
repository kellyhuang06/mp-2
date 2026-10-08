import GbifOccurrences from "./components/GbifOccurrences";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Occurrence } from "./interfaces/Occurrence";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgreen solid;
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
        <GbifOccurrences data={data} />
      </ParentDiv>
  );
}