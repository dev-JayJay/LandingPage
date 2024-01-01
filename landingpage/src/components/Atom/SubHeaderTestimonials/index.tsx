import { TestimonialsTextProps } from "./type";
import styled from "styled-components"

export const TestimonialHeader: React.FC<TestimonialsTextProps> = ({
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
      <p>{description}</p>
      <h5>{title}</h5>
    </SectionTextWrap>
  );
};

export const SectionTextWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  h5 {
    font-size: 30px;
    color: #101828;
    font-weight: 500;
    line-height: 50px;
    margin: 0;
    padding: 0;
  }
  p {
    width: 50%;
    font-size: 18px;
    color: #BF0110;
    font-weight: bold;
    margin: 0 auto;
  }
`;
