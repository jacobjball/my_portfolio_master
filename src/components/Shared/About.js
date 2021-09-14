import React from 'react';
import '../../index.css'
import headshot from '../../images/headshot.jpg'

const About = () => (
    <div>
      <div class='row'>
        <div class='column'>
          <div class='abouttext'>
            Hello. My name is Jake Ball. My pathway to software engineering was a little unconventional. 
            After graduating with my Bachelor of Sciece in Economics I started to consider what I wanted to do for a career. 
            I knew I liked technology and because I had been in a sales position before, I decided I would give sales a try.
            After about a year of being in this field, I knew it wasn't what I wanted to do the rest of my life. 
            After doing some soul searching, some personality tests, talking to a lot of people in different departments, 
            I knew I wanted to go into something with product and a little more technical. I decided to go to coding bootcamp in 
            Salt Lake City called DevPoint Labs. Like many bootcamps, the focus was developing a foundation as a full stack engineer. 
            While there I learned Ruby, JS and ReactJS, SQL, HTML, and CSS. Since then I have worked on multiple projects which you can 
            see in the portfolio tab. I believe in life-long learning and look forward to the next opportunity to develop my skill set
            and create a long career in the world of software engineering.
          </div>
        </div>
        <div class='column'>
          <img
            src={headshot}
            width='70%'
            height='87%'
            />
        </div>
      </div>
    </div>
)

export default About;