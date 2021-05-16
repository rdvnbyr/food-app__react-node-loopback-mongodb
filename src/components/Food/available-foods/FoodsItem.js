import styled from "styled-components";

import { FoodItemForm } from "./food-item-form/FoodItemForm";

const List = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const Description = styled.div`
  font-style: italic;
  text-align: left;
`;
const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

export function FoodsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <List>
      <div>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </div>
      <div>
        <FoodItemForm item={props} />
      </div>
    </List>
  );
}
