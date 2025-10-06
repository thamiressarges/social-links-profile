import styled from "styled-components";
import avatar from '../../assets/avatar-jessica.jpeg';

export const Container = styled.div`
    width: 400px;
    height: 600px;
    background-color: ${({theme}) => theme.COLORS.GRAY_800};

    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: normal;
    }

    > h3 {
        color: ${({theme}) => theme.COLORS.GREEN};
    }

    > p {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 14px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
`;

export const Avatar = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(${avatar});
    background-repeat: no-repeat;
    background-size: cover;
`;