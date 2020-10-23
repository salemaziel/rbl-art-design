import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'



const Tab = (props) => {
    return(
        <>
        <h2 className="major">{props.title}</h2>
        <p>
            {props.text1}
          </p>
          <span className="image main">
            <img src={props.image} alt="" />
          </span>
          <p>
            {props.text2}
          </p>

          <span className="image main">
            <img src={props.image2} alt="" />
          </span>


          <span className="image main">
            <img src={props.image3} alt="" />
          </span>

          <p>
              {props.text3}
          </p>


        </>
    )
};



export default Tab