import styled from "styled-components";
import type { Occurrence } from "../interfaces/Occurrence";

const AllOccurrencesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #eef5ee;
    `;

const SingleOccurrenceDiv = styled.div<{ $kingdom?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) =>
        props.$kingdom === "Plantae"
            ? "#a8d5a2"
            : props.$kingdom === "Animalia" 
                        ? "#f4c98b" 
                        : "#dddddd"};
    border: 3px darkgreen solid;
    text-align: center;
`;

const Photo = styled.img`
    width: 100%;
`;

export default function GbifOccurrences(props: { data: Occurrence[] }) {
    return (
        <AllOccurrencesDiv>
            {props.data.map((item: Occurrence) => (
                <SingleOccurrenceDiv key={item.key} $kingdom={item.kingdom}>
                    <h2>{item.scientificName}</h2>
                    <p>Kingdom: {item.kingdom ?? "Unknown"}</p>
                    <p>Country: {item.country ?? "Unknown"}</p>
                    <p>Date: {item.eventDate?.slice(0, 10) ?? "Unknown"}</p>
                    {item.media?.[0]?.identifier && (
                        <Photo
                            src={item.media[0].identifier}
                            alt={`photo of ${item.scientificName}`}
                        />
                    )}
                </SingleOccurrenceDiv>
            ))}
        </AllOccurrencesDiv>
    );
}

