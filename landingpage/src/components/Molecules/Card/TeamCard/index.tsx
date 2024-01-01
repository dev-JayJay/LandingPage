import Image from 'next/image'
import { TeamCardProps } from './type'
import styled from 'styled-components'

export const TeamCard: React.FC<TeamCardProps> = ({
    Name,
    role,
    image,
}) => {
    return (
        <TeamWarp>
            <div>
            <Image
            src={image}
            alt='images'
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
            />
            </div>
            <div>
                <h5> { Name }</h5>
                <span> { role } </span>
            </div>

        </TeamWarp>
    )
}

export const TeamWarp = styled.div`
margin: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
    h5{
        color: #101828;
        font-size: 20px;
        font-weight: 400;
    }
    span{
        color: #BF0110;
        font-weight: 400;
    }
`;