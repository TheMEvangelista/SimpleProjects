import React from "react";
import * as C from "./styles";
import CardItem from "../Card_Items";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="2.7k" />
      <CardItem title="Saídas" Icon={FaRegArrowAltCircleDown} />
      <CardItem title="Total" Icon={FaDollarSign} />
    </C.Container>
  );
};

export default Resume;
