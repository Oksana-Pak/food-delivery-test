import styled from "styled-components";
import { Button } from "../Button/Button";

export const DishItemStyled = styled.li`
  width: 250px;
  height: 350px;
`;

export const PreviewImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const ImgTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonAdd = styled(Button)`
  width: 50px;
`;
