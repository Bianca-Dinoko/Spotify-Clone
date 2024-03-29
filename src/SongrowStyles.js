import styled from 'styled-components';

export const Container = styled.div`
 margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  overflow: none;
  
  color: white;
  &:hover {
 cursor: pointer;
  background-color: black;
  opacity: 0.8;
  }
`;

export const Img = styled.img`
 height: 40px;
  width: 40px;
`;

export const SongRowInfo = styled.div`
 margin-left: 20px;
`;

export const H1 = styled.h1`
font-size: 16px;
`;

export const P = styled.p`
font-size: 14px;
  margin-top: 3px;
  color: gray;
`;