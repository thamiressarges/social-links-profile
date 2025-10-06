import styled from "styled-components";

export const Container = styled.a`
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 10px 0;
`;