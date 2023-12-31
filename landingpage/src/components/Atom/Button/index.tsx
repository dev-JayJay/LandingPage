import styled from 'styled-components'

export const Button = styled.button<{ Variant?: string }>`
width: 25vh;
height: 3rem;
align-items: center;
background-color: ${(props) =>
    (props.Variant === 'normal' ?
    '#fff' 
    : '#18181B')
};
color: ${(props) =>
    (props.Variant === 'normal' ?
    '#18181B'
    : '#fff')
};
border: ${(props) =>
    (props.Variant === 'normal' ?
    '1px solid #000000'
    : 'none')};
border-radius: 5px;
padding: 5px;
`;

