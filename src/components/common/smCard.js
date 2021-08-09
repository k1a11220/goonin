import React, { useState } from "react";
import styled from "styled-components";
import ModalLg from "./modal-lg";

const Link = styled.a`
  text-decoration: none;

  &:nth-of-type(4n) {
    margin: 0;
  }
`;

const Container = styled.div`
  /* width: 268px; */
  height: 90px;
  background-color: var(--card-color-1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 16px;
  margin-right: 20px;

  & h4 {
    font-weight: 500;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-2);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--white);
  margin-left: 20px;
`;

const SmCard = ({ title, price, icon, link }) => {
  const [display, setDisplay] = useState(false);
  const OpenModal = () => {
    setDisplay(true);
  };
  const CloseModal = () => {
    setDisplay(false);
    console.log(display);
  };
  console.log(display);
  return (
    <>
      <Link style={{ cursor: "pointer" }} onClick={OpenModal}>
        <Container>
          <Icon src={icon} />
          <TextWrapper>
            <h4>{title}</h4>
            <p>{price}</p>
          </TextWrapper>
        </Container>
      </Link>
      <ModalLg
        title={title}
        price={price}
        display={display}
        closeModal={CloseModal}
      />
    </>
  );
};

export default SmCard;
