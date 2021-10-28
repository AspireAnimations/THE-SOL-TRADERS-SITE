import React from 'react'
import Styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';

const Join = () => {
  return (
    <>
      <Container>
        <h1>JOIN THE MOVEMENT</h1>
        <h3>Price : 1 SOL</h3>
        <input type="text" value="" />
        <button>MINT</button>
        <Zoom left>
        <Card>
          <Text>
          <h1>JOIN THE COMMUNITY</h1>
          <p>Have any questions about the project? Join the discord for more information</p>
          <button className="cardbtn">JOIN THE SOLSTREET FAMILY ON DISCORD</button>
          </Text>
          <Img>
          <img src="cardimg.png" alt="" />
          </Img>
        </Card>
        </Zoom>
      </Container>
    </>
  )
}

const Container = Styled.section`
background: black;
color: #fff;
max-width: 100vw;
padding-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
  font-size: 37px;
  margin: 1rem;
}

h3 {
  font-size: 24px;
}

input {
  font-size: 16px;
    min-height: 47px;
    padding: 6px 16px;
    border-radius: 4px;
    width: 420px;
    border: none;
    margin: 2rem;
}

button{
  font-size: 18px ;
    font-weight: 700 ;
    text-transform: uppercase ;
    background-color: transparent ;
    background-image: linear-gradient( 
    100deg, #25DAB2 12%, #BA42F0 85%) ;
    border-radius: 5px 5px 5px 5px;
   padding: 18px 70px 18px 70px;
   outline: none;
   border: none;
   color: #fff;
   cursor: pointer;
}

`

const Card = Styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 6rem 0;
background-image: linear-gradient( 
100deg, #25DAB2 12%, #BA42F0 85%);
border-radius: 20px;
padding: 1rem;

h1 {
  font-size: 45px;
}

p {
  font-size: 20px;
  padding: 0 1.2rem;
  font-weight: 600;
  max-width: 80%;
}
`

const Text = Styled.div`



button {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    background: #DC1FFF !important;
    padding: 18px 35px 18px 35px;
    margin-top: 1.8rem;
    margin-left: 1rem;
    
}
`;

const Img = Styled.div`
  img {
    height: 100%;
    
  }
`

export default Join
