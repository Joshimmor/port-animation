import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Form.scss";

export default function Form() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <div className="form-div">
            <form  className="form" onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    id="full-name"
                    type="string" 
                    name="name"
                />
                <ValidationError 
                    prefix="string" 
                    field="name"
                    errors={state.errors}
                />
                <input
                    placeholder="Email"
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
                </form>
      </div>
      
  );
}