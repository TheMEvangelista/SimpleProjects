import React from "react";
import * as C from "./styles";
import CardItem from "../Card_Items";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <CardItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <CardItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
