import React from "react";
;
//import { navigate } from "gatsby";


///const EstimateForm = (props) => (

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    /*e.preventDefault();*/
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      /*.then(() => navigate(form.getAttribute("action")))*/
      .then(() => alert("Sent Succesfully! We'll Respond As Soon As We Can"))
      .catch(error => alert(error));

      e.preventDefault();
  };

  return (
    <>
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
    <input 
    type="text" 
    name="name" 
    id="name"
    required
    onChange={handleChange}
    />
  </div>

  <div className="field half">
    <label htmlFor="email">Email</label>
    <input 
    type="text" 
    name="email" 
    id="email" 
    required
    onChange={handleChange}
    />
  </div>

  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="4"></textarea>
  </div>
  <ul className="actions">
    <li>
      <input 
      type="submit"
      value="Submit" 
      className="special" 
      onChange={handleSubmit}
      />
    </li>
    <li>
      <input type="reset" value="Reset" />
    </li>
  </ul>
</form>


    </>
  );
}
