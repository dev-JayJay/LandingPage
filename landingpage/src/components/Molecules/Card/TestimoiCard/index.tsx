import Image from "next/image";
import { Testimony } from "./type";
import styled from "styled-components";

export const TestimonyCard: React.FC<Testimony> = ({
    Name,
    Content,
    Level,
    image
}) => {
    return(
        <TestimonyWrap>
            <Image
            src={image}
            alt='image'
            width={150}
            height={150}
            style={{borderRadius:'5px'}}
            />
            <div>
                <p className="text-[#090914] w-80">
                    { Content }
                </p>
                <TestimonyText>
                    <h5>{ Name }</h5>
                    <span>{ Level }</span>
                </TestimonyText>
            </div>
        </TestimonyWrap>
    )
}

export const TestimonyWrap = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
align-items: center;
`;


export const TestimonyText = styled.div`
display: flex;
margin-bottom: 0px;

h5{
    color: #090914;
    font-weight: 400;
    font-size: 15px;
}
span{
    color: #64748B;
    font-size: 12px;
}

`;