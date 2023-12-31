import styled from "styled-components";
import { TextProps } from "./type"

export const  Text: React.FC<TextProps> = ({
    title,
    content
}) =>{
  return (
    <section>
        <h4>{ title }</h4>
        <p>{ content }</p>
    </section>
  )
}

export default Text;

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
h4{
    color: #BF0110;
    font-size: 25px;
    font-weight: 500;
}
p{
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 200;
}
`;
