import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'



const Tab = (props) => {

    return(
        <>
                  <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={props.image} alt="" />
          </span>
          <p>
            {props.text1}
          </p>
          <p>
            {props.text2}
          </p>

          <p>
              {props.text3}
          </p>



        </>
    )
}


export default Tab