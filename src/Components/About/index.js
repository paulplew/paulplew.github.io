import './about.css'
import pages from '../Navigation/navigation_pages.json'
import React from 'react';
import Navigation from '../Navigation';

const About = () => {
  document.title = "About";
  
  return (
    <>
      <Navigation selected={pages.about} />
      <div className='flex-center padding-all'>
        <div className='content-left'>
          <div className='bio-photo'>
            <img src='/images/paul-plew-yellow.png' alt="Paul Plew's beautiful portrait" height='500px' />
            <img src='/images/paul-plew.png' alt="Paul Plew's beautiful portrait" className='img-top' height='500px' />
          </div>
        </div>
        <div className='content-right'>
          <div className='padding-all'>
            <h1>About Paul</h1>
            <p>
              Paul Plew is currently a Computer Science and Interaction Design student at Northeastern University. Paul is
              passionate about Computer Science specifically relating to user interface design, and web design. Outside the
              realm of computer science he is
              a classNameically trained pianist with numerous songs in his repertoire, and a designer with an eye for clean
              lines. One day he aspires to take his passion for design and computer science and become a designer that knows
              no bounds.
            </p>
            <p>
              Say hello.
            </p>
            <div className='grid-3-col'>
              <div>Call</div>
              <div className='right-span-3'><a href='tel:3109483839' className='contact-link'>310.948.3839</a></div>
              <div>Text</div>
              <div className='right-span-3'><a href='sms:3109483839' className='contact-link'>310.948.3839</a></div>
              <div>Email</div>
              <div className='right-span-3'><a href='mailto:plew.p@northeastern.edu'
                className='contact-link'>plew.p@northeastern.edu</a></div>
              <div>github</div>
              <div className='right-span-3'><span style={{ color: 'var(--primary-yellow)' }}>@</span><a
                href='https://github.com/paulplew' className='contact-link'>paulplew</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;