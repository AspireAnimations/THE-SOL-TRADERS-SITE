import React from 'react'
import Styled from 'styled-components'

const Roadmap = () => {
  return (
    <>
      <Container>
        <h1>MINTING ROADMAP</h1>
        <UpperCards>
          <CardOne>
         <h1>25%</h1>
         <p>5 Community Club Members EVERY 100 MINTS – For every 100 mints, we will be giving five winners 5 SOL until all Sol traders have been minted.</p>
         
         </CardOne>
         <img src="green_mark.png" alt="" />
          <CardTwo>
         <h1>100%</h1>
         <p>$10,000 donation to a charity dedicated to helping underprivileged youth to secure financial freedom. Community will select the charity after minting concludes.</p>
         </CardTwo>
        </UpperCards>
        <Img>
         <img src="graph.png" alt="" />
        </Img>
        <LowerCards>
        <CardThree>
         <h1>0%</h1>
         <p>Spread Awareness Via All Applicable Social Media Outlets, Community Givaways, Fan Art Community AMA’s, Presale Early November! Full IP rights – Full intellectual property rights are granted to the buyer of their Sol Trader.</p>
         </CardThree>
          <CardFour>
         <h1>50%</h1>
         <p>Air Drop of Ultra Rare Sol Traders into random members wallets. The user with the most invites on our Discord channel with get to create his/her own unique, one of a kind Sol Trader</p>
         </CardFour>
        </LowerCards>
      </Container>
    </>
  )
}

const Container = Styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 5rem;

h1 {
  font-size: 48px;

}

`

const UpperCards = Styled.section`
display: flex;
justify-content: space-between;
margin-left: 12rem;
margin-top: 2rem;

`

const LowerCards = Styled.section`
display: flex;
justify-content: space-between;
margin-right: 10rem;
`
const Img = Styled.div`

`

const CardOne = Styled.div`
    background: #00FFA3;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 10rem;
   width: 300px;

   img {
     top: 100;
   }

`

const CardTwo = Styled.div`
 background: #DC1FFF;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 1rem;
    width: 300px;
    margin-left: 10rem;
    margin-bottom: 8rem;
`

const CardThree = Styled.div`
    background: #DC1FFF;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 1rem;
   width: 300px;
   margin-top: 8rem;
`

const CardFour = Styled.div`
 background: #00FFA3;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    padding: 1rem;
    width: 300px;
    margin-left: 10rem;
    margin-bottom: 8rem;
`




export default Roadmap
