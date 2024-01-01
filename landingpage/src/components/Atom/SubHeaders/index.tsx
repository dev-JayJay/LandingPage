import styled from "styled-components";
import { SectionTextProps } from "./type";

export const SectionText: React.FC<SectionTextProps> = ({
  title,
  description,
  align,
}) => {
  return (
    <SectionTextWrap
      style={{
        textAlign:
          align === "left" ? "left" : align === "right" ? "right" : "center",
      }}
    >
      <p>{title} <span>Schovela</span></p>
      <h5>{description}</h5>
    </SectionTextWrap>
  );
};

export const SectionTextWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  p {
    font-size: 35px;
    color: #101828;
    font-weight: 500;
    line-height: 50px;
    margin: 0;
    padding: 0;
  }
  span{
    color: #BF0110;
    font-size: 30px;
  }
  h5 {
    width: 55%;
    font-size: 18px;
    color: #101828;
    font-weight: 500;
    margin: 0 auto;
  }
`;
