import React from 'react'
import Styled from 'styled-components'
import "../accordion.css"

const Faq = () => {
  return (
    <div>
      <div className="main-container">
      <header>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        
      </header>
      
      <div className="content-container">
      
      <div className="container-one">
      
            <div class="accordion-wrapper">
            
            <div class="accordion">
          <input type="radio" name="radio-a" id="check1" />
          <label class="accordion-label" for="check1">How do I buy a SOL Trader?</label>
          <div class="accordion-content">
            <p>Please connect your Phantom Wallet to the website, and be sure to check out our latest updates for our release date. We chose Solana and Phantom because of the low minting fees for the user and the security of the technology.</p>
          </div>
        </div>
        
        <div class="accordion">
          <input type="radio" name="radio-a" id="check2" />
          <label class="accordion-label" for="check2">How much does it cost to mint?</label>
          <div class="accordion-content">
            <p>It will cost 1 $SOL to mint a Sol Trader.</p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check3" />
          <label class="accordion-label" for="check3">Will there be a pre-sale?</label>
          <div class="accordion-content">
            <p>Yes! Please join our discord community and follow us on twitter. We will be giving away FREE Sol Traders to early members, and we will also be hosting a presale at a deeply discounted price. The presale will allow us to test the minting process on the website to ensure everything is running smoothly for launch.</p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check4" />
          <label class="accordion-label" for="check4">Will there be trading on a secondary market?</label>
          <div class="accordion-content">
            <p>After sales are finished, we will explore options for holders to purchase, sell and/or trade their sol traders . This includes DigitalEyes, SolSea, and Solanart. As Solana evolves, we will evaluate the best solution for rarity and may provide our own ranking system.</p>
          </div>
        </div>
       
      </div>
      
      </div>
      
      
      <div className="container-two">
      
      <div class="accordion-wrapper">
     
            <div class="accordion">
          <input type="radio" name="radio-a" id="check5" />
          <label class="accordion-label" for="check5">How will the rewards work?</label>
          <div class="accordion-content">
            <p>75% of the fee received from trading of the NFTs will go into a bucket and used for community challenges. The other 25% will go to further development and upkeep. A large proportion of the fee received from trading will be split up between holders, which can then be used to challenge other members, buy unique goods, or be used any way you wish.</p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check6" />
          <label class="accordion-label" for="check6">Are there secondary sale fees?</label>
          <div class="accordion-content">
            <p>5% secondary sale fee will be applied with 1% to a development wallet and 4% to a community wallet for reasons discussed earlier.</p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check7" />
          <label class="accordion-label" for="check7">Do I own my SOL Trader after purchase?</label>
          <div class="accordion-content">
            <p>Full intellectual property rights are granted to the buyer of their Sol Trader.</p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check8" />
          <label class="accordion-label" for="check8">What if I have questions that were not answered in this FAQ?</label>
          <div class="accordion-content">
            <p>Please ask us your question on our Discord or by Twitter. We will get back to you as soon as possible.</p>
          </div>
        </div>
      </div>

    
      </div>
  
      </div>

      </div>
    </div>
  )
}



export default Faq
