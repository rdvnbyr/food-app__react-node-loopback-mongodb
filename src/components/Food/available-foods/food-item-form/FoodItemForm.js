import styled from "styled-components";
import { Input, UIButton } from "../../../UIElements";


const FormWrapper = styled.form`
  text-align: right;
`;

export const FoodItemForm = (props) => {
  return (
    <FormWrapper>
      <Input type="number" input={props.item} defaultValue="1" min={1} max={5}/>
      <UIButton primary text="Add" />
    </FormWrapper>
  );
};
