import React, { Component } from 'react'
import image from '../assets/me.png'

class AboutMe extends Component {
  render() {
    return (
      <div className='tc animate__animated animate__fadeIn animate__delay-3s'>
        <p className='f2 b'>About Me</p>
        <div className='tl b dib pa3 f4 '>
          Fun fact, after years of wanting to learn how to code, but telling <br />
          myself "programming is magic and there is no way you could understand it" <br />
          I decided, I fancy learning me some of this magic, loved it, quit <br />
          my job of 5 years, studied software development and here I am fresh of the press <br />
          and making myself this shinny website!<br />
          Two things are nearly always on my mind. What shall I learn next? <br />
          and what shall I have for dinner? one less important than the other, but both <br />
          important to understand how my mind works. <br />
        </div>
        <img src={image} alt='myImage' width='200px' className='bw2 shadow-5 br3' />
      </div>
    )
  }
}

export default AboutMe;