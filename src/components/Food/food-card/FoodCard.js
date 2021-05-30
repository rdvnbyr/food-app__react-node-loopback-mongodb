import styled from "styled-components";
import { ButtonGroup, IconButton, Button, Tooltip } from "@chakra-ui/react";

function FoodCard(props) {
  return (
    <Card>
      <ImageDiv>
        <img src={props.image} alt={props.name} />
      </ImageDiv>
      <CardContent>
        <ContentHeader>
          <div>
            <Tooltip label="Add to wishlist" fontSize="sm">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="Like"
                fontSize="1.2rem"
                icon={<i className="far fa-heart"></i>}
              />
            </Tooltip>
            <> </>
            <Tooltip label="Extend details" fontSize="sm">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="Info"
                fontSize="1.2rem"
                icon={<i className="fas fa-info-circle"></i>}
              />
            </Tooltip>
          </div>
          <h5>
            <span
              className={
                props.promotion.isPromotion ? "promotion__span text-muted" : ""
              }
            >
              ${props.price}
            </span>
            {props.promotion.isPromotion && (
              <span className="mx-2 text-decoration-none">{`$${props.promotion.price}`}</span>
            )}
          </h5>
        </ContentHeader>
        <CardDescription>
          <h5>{props.name}</h5>
          <p>{props.description}</p>
        </CardDescription>
        <CardAction>
          <ButtonGroup size="sm" isAttached variant="outline">
            <IconButton
              aria-label="Add to friends"
              icon={<i className="fas fa-minus"></i>}
              variant="solid"
            />
            <Button colorScheme="blue" variant="unstyled">
              1
            </Button>
            <IconButton
              aria-label="Add to friends"
              icon={<i className="fas fa-plus"></i>}
              variant="solid"
            />
          </ButtonGroup>
          <Button
            rightIcon={<i className="fas fa-shopping-cart"></i>}
            bg="var(--primary-color)"
            color="white"
            _hover={{ bg: "var(--primary-color-dark)" }}
          >
            Add to Cart
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}

export default FoodCard;

const Card = styled.div`
  padding: 0;
  margin: 0.8rem 0.4rem;
  width: 24rem;
  height: 36rem;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-light-gray);
  border: 1px solid var(--color-dark-gray);
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  width: 100%;
  height: 20rem;
  padding: 0 1.5rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & h5 {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-color-light);

    & .promotion__span {
      text-decoration: line-through;
      text-decoration-color: var(--color-dark);
    }
  }
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  & h5 {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
  & p {
    font-size: 0.9rem;
  }
`;

const CardAction = styled(ContentHeader)``;
