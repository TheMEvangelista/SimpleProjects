import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    height: 18px;
    width: 18px;
  }
`;
