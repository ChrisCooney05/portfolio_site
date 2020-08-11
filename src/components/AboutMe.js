import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <div className='tc animate__animated animate__fadeIn animate__delay-3s'>
        <p className='f2 b'>About Me</p>
        <div className='tl b dib pa3 f4'>
          Fun fact, after years of wanting to learn how to code, but telling <br />
          myself "programming is magic and there is no way you could understand it" <br />
          I decided, I fancy learning me some of this magic, loved it, quit <br />
          my job of 5 years, joined Makers and here I am fresh of the press a software developer!
        </div>
      </div>
    )
  }
}

export default AboutMe;