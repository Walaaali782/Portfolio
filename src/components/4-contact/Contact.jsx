import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '.././../../public/animation/done.json'
import contactAnimation from '../../../public/animation/contact.json'

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzppgok");





  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex"  style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>

          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">Submit</button>




        {state.succeeded && ( <p className="flex" style={{fontSize : "30px" , marginTop : "1.8rem"}}> 

          <Lottie style={{height : 55 ,fontSize : "32px"}} animationData={doneAnimation} />
          Message send succsefully
        </p>

        )

}


        </form>

        <div className="animation">
          
        <Lottie
        className="contactAnimation"
         style={{height:350}} animationData={contactAnimation} />

        </div>
      </div>
    </section>
  );
};

export default Contact;
