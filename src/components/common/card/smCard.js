import React, { useState } from "react";
import styled from "styled-components";
import ModalLg from "../modal-lg";

const Link = styled.a`
  text-decoration: none;

  &:nth-of-type(4n) {
    margin: 0;
  }
`;

const Container = styled.div`
  /* width: 268px; */
  height: 92px;
  background-color: var(--card-color-1);
  border-radius: var(--card-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-left: 26px;

  & h4 {
    font-size: 14px;
    font-weight: 500;
    color: #717989;
    margin-bottom: 3px;
  }

  & p {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-text-2);
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--white);
  margin-right: 16px;
  object-fit: contain;
`;

const SmCard = ({ title, price, detail, thumbnail, icon, link }) => {
  const [display, setDisplay] = useState(false);
  const OpenModal = () => {
    setDisplay(true);
    document.body.style.overflow = "hidden";
  };
  const CloseModal = () => {
    setDisplay(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <Link style={{ cursor: "pointer" }} onClick={OpenModal}>
        <Container>
          <TextWrapper>
            <h4>{title}</h4>
            <p>{price}</p>
          </TextWrapper>
          <Icon src={icon} />
        </Container>
      </Link>
      <ModalLg
        title={title}
        price={price}
        detail={detail}
        thumbnail={thumbnail}
        link={link}
        display={display}
        closeModal={CloseModal}
      />
    </>
  );
};

export default SmCard;
