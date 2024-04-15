import Image from "next/image"
import styled from 'styled-components'

export const LogoWrap = styled.div`
display: flex;
flex-direction: row;
p{
  color: #18181B;
  font-size: 23px;
  font-weight: 500;
}
`;

function SchovelaLogo() {
  return (
    <LogoWrap>
        <Image
        src='/images/logo.jpg'
        alt='schovela logo'
        width={45}
        height={45}
        />
        <p>Schovela</p>
      
    </LogoWrap>
  )
}

export default SchovelaLogo;
