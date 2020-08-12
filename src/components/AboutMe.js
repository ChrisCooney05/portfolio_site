import React, { Component } from 'react'
import image from '../assets/me.png'

class AboutMe extends Component {
  render() {
    return (
      <div className='tc animate__animated animate__fadeIn animate__delay-3s'>
        <p className='f2 b'>About Me</p>
        <div className='tl b dib pa3 f5 '>
          Fun fact, after years of wanting to learn how to code, but telling <br />
          myself "programming is magic and there is no way you could understand it" <br />
          I decided, I fancy learning me some of this magic, loved it, quit <br />
          my job of 5 years, studied software development and here I am fresh of the press <br />
          and making myself this shinny website!<br />
          Two things are nearly always on my mind. What shall I learn next? <br />
          and what shall I have for dinner? one less important than the other, but both <br />
          important to understand how my mind works. <br />
          a bit further down you can see a few of my projects, but you can also visit my github<br />
          or get in contact with me via email or linkedIn<br /><br />
          <div className='flex'>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black" href="https://github.com/ChrisCooney05">GitHub</a>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black" href="https://www.linkedin.com/in/chris-cooney-003028160/">LinkedIn</a>
            <a className="w-25 pa3 mr2 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black" href="mailto:chris.cooney05@hotmail.co.uk">Email Me</a>
          </div>
        </div>
        <img src={image} alt='myImage' width='200px' className='bw2 shadow-5 br3' />
      </div>
    )
  }
}

export default AboutMe;