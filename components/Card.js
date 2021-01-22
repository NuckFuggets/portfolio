import styled from "styled-components";
import { useState } from "react";

const CardElement = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex: 0 1 calc(100% / 3);
  padding-left: 42px;
  margin-top: 36px;
`;

const Image = styled.div`
  min-height: 320px;
  border-radius: 5px;
`;

const Header = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  margin: 0;
  color: #01022e;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url("/images/menu.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 16px;
  background-color: transparent;
  border: 0;
`;

const Link = styled.a`
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url("/images/link.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Card({ title, image, link }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardElement>
      <Image style={{ backgroundImage: `url(${image})` }}></Image>
      <div>
        <Header>
          <Title>{title}</Title>
          <Buttons>
            <MenuButton onClick={() => setIsOpen(!isOpen)}></MenuButton>
            <Link href={link} target="_blank"></Link>
          </Buttons>
        </Header>
      </div>
    </CardElement>
  );
}
