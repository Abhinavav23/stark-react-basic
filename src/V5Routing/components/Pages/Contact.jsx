import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const [info, setInfo] = useState({
    email: "",
    feedback: "",
  });

  const navigate = useNavigate();

  const sendFeedback = (e) => {
    e.preventDefault();
    console.log(info);
    if(info.feedback === ''){
      navigate('/myProfile');
    }else{
      navigate('/home');
    }
  }


  return (
    <form onSubmit={sendFeedback}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={info.email}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="feedback">feedback:</label>
      <textarea
        name=""
        id="feedback"
        cols="30"
        rows="10"
        value={info.feedback}
        onChange={(e) => setInfo({ ...info, feedback: e.target.value })}
      />
      <br />
      <br />
      <button>send</button>
    </form>
  );
};
