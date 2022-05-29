import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  background-color: white;
  margin-top:80px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-size: 30px;
  color: black;
  margin-bottom: 40px;
  margin-left: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
    font-style: bold;
  margin-bottom: 40px;
  margin-left: 20px;

`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 10px;
`;