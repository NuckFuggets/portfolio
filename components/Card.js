import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

const CardElement = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex: 0 1 calc(100% / 3);
  padding-left: 42px;
  margin-top: 36px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    flex-basis: 50%;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;

const Image = styled.div`
  min-height: 320px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Header = styled(motion.div)`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
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

const Body = styled(motion.div)`
  padding: 8px;
  background-color: white;
  position: absolute;
  /* top: -1px; */
`;

const variantsBody = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Card({ title, image, link, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [transform, setTransform] = useState({
    open: { y: 0 },
    closed: { y: 0 },
  });

  const bodyRef = useRef(null);

  useEffect(() => {
    setBodyHeight(bodyRef.current?.clientHeight - 1);

    return null;
  }, [isOpen]);

  useEffect(() => {
    if (!isNaN(bodyHeight)) {
      setTransform({ ...transform, open: { y: -bodyHeight } });
    }
  }, [bodyHeight]);

  return (
    <CardElement>
      <Image style={{ backgroundImage: `url(${image})` }}></Image>
      <motion.div
        style={{ position: "relative" }}
        animate={isOpen ? "open" : "closed"}
        variants={transform}
      >
        <Header>
          <Title>{title}</Title>
          <Buttons>
            <MenuButton onClick={() => setIsOpen(!isOpen)}></MenuButton>
            <Link href={link} target="_blank"></Link>
          </Buttons>
        </Header>
        <Body
          ref={bodyRef}
          animate={isOpen ? "open" : "closed"}
          // variants={variantsBody}
          // transition={{ duration: 0.3 }}
          className="card-body"
        >
          {description}
        </Body>
      </motion.div>
    </CardElement>
  );
}
