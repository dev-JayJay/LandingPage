import Image from 'next/image'
import { TeamCardProps } from './type'
import styled from 'styled-components'

export const TeamCard: React.FC<TeamCardProps> = ({
    userName,
    role,
    image,
    status
}) => {
    return (
        <section>
            <div>
            <Image
            src={image}
            alt='images'
            width={300}
            height={300}
            />
            </div>
            <div>
                <h5> { userName }</h5>
                <span> { role } </span>
            </div>

        </section>
    )
}

export const TeamWarp = styled.div`
    h5{
        color: #101828;
        font-size: 20px;
        font-weight: 400;
    }
    span{
        color: #BF0110;
    }
`;