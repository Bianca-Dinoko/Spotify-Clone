import styled from 'styled-components';

export const Container = styled.div`
background: #040404;
height: 100vh;
min-width: 230px;
padding-left: 5px;
padding-right: 5px;

@media (min-width: 600px){
    padding-left: 10px;
    padding-right:10px;
}
`;

export const Strong = styled.strong`
color: white;
margin-left: 10px;
padding: 5px;
font-size: 12px;
`;

export const Hr = styled.hr`
border: 1px solid #282828;
width: 90%;
margin: 10px;
`;