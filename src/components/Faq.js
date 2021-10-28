import React from 'react'
import { Accordion } from 'react-bootstrap'
import Styled from 'styled-components'
import "../accordion.css"

const Faq = () => {
  return (
    <div>
      <div class="accordion-wrapper">
  <div class="accordion">
    <input type="radio" name="radio-a" id="check1" checked />
    <label class="accordion-label" for="check1">Accordion 1</label>
    <div class="accordion-content">
      <p>Hey there, you are watching codiesbugs &#128522;</p>
    </div>
  </div>
  <div class="accordion">
    <input type="radio" name="radio-a" id="check2" />
    <label class="accordion-label" for="check2">Accordion 2</label>
    <div class="accordion-content">
      <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
    </div>
  </div>
  <div class="accordion">
    <input type="radio" name="radio-a" id="check3" />
    <label class="accordion-label" for="check3">Accordion 3</label>
    <div class="accordion-content">
      <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
    </div>
  </div>
</div>
    </div>
  )
}


const Container = Styled.section`
`

const Heading = Styled.div`

`

export default Faq
