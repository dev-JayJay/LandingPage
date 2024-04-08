import Image from "next/image";
import { Testimony } from "./type";
import styled from "styled-components";
import { FaStar,FaStarHalfStroke } from "react-icons/fa6";


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
            <div className="m-5" >
                <div className="flex flex-wrap items-start text-blue-500 mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                </div>
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
@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    text-align: left;
    margin: 0;
    gap: 20px;
    p {
        width: 90%;
    }
  }
`;


export const TestimonyText = styled.div`
display: flex;
margin: 0px;
align-items: flex-end;
margin-top: 8px;
padding: 5px;
h5{
    color: #090914;
    font-weight: 400;
    font-size: 15px;
}
span{
    color: #64748B;
    font-size: 12px;
    padding: 5px;
    align-items: center;
}
`;