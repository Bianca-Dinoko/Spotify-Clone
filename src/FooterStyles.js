import styled from 'styled-components';

export const Box = styled.div`
display: flex;
justify-content: space-between;
background: #171717;
position: fixed;
bottom: 0;
width: 97%;
height: 60px;
padding: 20px; 


`;

export const FooterLeft = styled.div`
flex: 0.3;
color: white;
display: flex;
align-items: center;
width: 300px;
`;

export const FooterMiddle = styled.div`
flex: 0.4;
padding: 0 100px;
margin-left: 20px;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 400px;
color: white;
/*&:hover {
    transition: transform 0.2s ease-in-out
    transform: scale(1.2) !important;
}*/
`;

export const FooterRight = styled.div`
flex: 0.3;
color: white;

display: flex;
align-items: center;
max-width: 300px;
justify-content: space-between;

`;

export const Img = styled.img`
height: 70px;
width: 70px;
margin-right: 20px;
object-fit: contain;
`;