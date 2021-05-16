import { DUMMY_Food } from "../../../dummy-data";
import styled, { keyframes } from "styled-components";

import { Card } from "../../UIElements";
import { FoodsItem } from "./FoodsItem"

const animate = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AvailableSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${animate} 1s ease-out forwards;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export function AvailableFoods() {
  return (
    <AvailableSection>
      <Card>
        <ul>
          {DUMMY_Food.map((meal) => (
            <FoodsItem key={meal.id} {...meal}/>
          ))}
        </ul>
      </Card>
    </AvailableSection>
  );
}
