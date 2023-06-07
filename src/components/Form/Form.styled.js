import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: rgba(255, 255, 255, 0.3);
  padding: 35px;
`;

export const FormikInput = styled(Field)`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 15px;

  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    opacity: 0.7;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const FormikLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-left: 45px;
  opacity: 0.7;
`;

export const FormikError = styled(ErrorMessage)`
  font-weight: 700;
  color: red;
  margin: 0;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 60%;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.7;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
