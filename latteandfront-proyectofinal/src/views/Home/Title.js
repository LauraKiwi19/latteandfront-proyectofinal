import styled from 'styled-components';

const ImageBackground = styled.div`
  background-image: url(https://miro.medium.com/max/800/1*Km98PgzRp9yRYfVZeSzwzQ.png);
  background-size: contain;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  `;

const H2Styled = styled.h2`
  position: relative;
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1rem;
  top: 1.75rem;
`;

const H1Styled = styled.h1`
  background: url(https://media.giphy.com/media/BWEY1LI6WdaN2/giphy.gif);
  -webkit-background-clip: text;
  background-position: center;
  background-size: cover;
  color: transparent;
  font-size: 132px;
  text-align: center;
  margin: 0;
  line-height: 7rem;
  padding-right: 0.5rem;
`;


export default function Title() {

  return(
    <>
      <ImageBackground/>
      <Container>
        <H2Styled>Do I have this</H2Styled>
        <H1Styled>Book</H1Styled>
      </Container>
    </>
      
  );

};