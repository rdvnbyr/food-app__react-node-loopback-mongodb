import styled from "styled-components";
import { useSelector } from "react-redux";

import HeaderCartButton from "./HeaderCartButton";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderAuthLinks } from "./HeaderAuthLinks";

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  background: var(--primary-color);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  .content {
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// const MainImageDiv = styled.div`
//   width: 100%;
//   height: 25rem;
//   z-index: 0;
//   overflow: hidden;
// `;

// const MainImageImg = styled.img.attrs((props) => ({
//   src: image,
//   alt: "Food",
// }))`
//   width: 110%;
//   height: 100%;
//   object-fit: cover;
//   transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
// `;

function Header() {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.auth.isLogin,
  }));
  return (
    <>
      <HeaderDiv>
        <div className="content">
          <h3>JUST FOOD</h3>
          <HeaderLinks />
          {!isLogin ? <HeaderAuthLinks /> : <HeaderCartButton />}
        </div>
      </HeaderDiv>
    </>
  );
}

export default Header;
