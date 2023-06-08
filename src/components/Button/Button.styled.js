import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;
  width: ${(p) => p.width};
  height: 40px;
  margin: 0 auto;
  padding: 5px 10px;

  background: ${(p) => (p.ordered ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #373737;
  ${(p) =>
    p.hover
      ? `&:hover {
    background: #5cd3a8;
  }`
      : null}
  ${(p) =>
    p.hover && !p.ordered
      ? `&:hover {
    background: #5cd3a8;
  }`
      : `&:hover {
    background: #ebd8ff;
  }`}
`;
