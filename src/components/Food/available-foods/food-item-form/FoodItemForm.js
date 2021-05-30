import styled from "styled-components";
import { UIButton } from "../../../UIElements";


const FormWrapper = styled.form`
  text-align: right;
`;

export const FoodItemForm = (props) => {
  return (
    <FormWrapper>
      <UIButton color="primary" text="Add" />
    </FormWrapper>
  );
};
