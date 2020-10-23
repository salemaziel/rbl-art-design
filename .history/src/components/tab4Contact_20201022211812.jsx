import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'



const TabContact = (props) => {

    return(
        <>
                  <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={props.image} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>

<h2 className="major">Contact</h2>
<form 
name="ContactForm"
method="post" 
action="/" 
data-netlify="true"
data-netlify-honeypot="bot-field"
>
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="ContactForm" />

  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="4"></textarea>
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Reset" />
    </li>
  </ul>
</form>
<ul className="icons">
  <li>
    <a
      href="https://twitter.com/HuntaroSan"
      className="icon fa-twitter"
    >
      <span className="label">Twitter</span>
    </a>
  </li>
  <li>
    <a href="https://codebushi.com" className="icon fa-facebook">
      <span className="label">Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://codebushi.com" className="icon fa-instagram">
      <span className="label">Instagram</span>
    </a>
  </li>
  <li>
    <a
      href="https://github.com/codebushi/gatsby-starter-dimension"
      className="icon fa-github"
    >
      <span className="label">GitHub</span>
    </a>
  </li>
</ul>



        </>
    )
}


export default TabContact
















