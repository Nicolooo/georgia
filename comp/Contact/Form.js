import React, { useState } from 'react';
import axios from 'axios';

const FormC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/meqnqzww',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section className="scta">
      <h3 className="con-title">WE RESPOND TO EVERY MAIL</h3>
      <form onSubmit={handleOnSubmit} id="form" className="topBefore" autocomplete="false">
      <input
          autocomplete="off"
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="NAME"
          className="form-input"
        />
         <input
          autocomplete="false"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="EMAIl"
          className="form-input"
        />
         <textarea
          id="message"
          name="message"
          autocomplete="off"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="E-MAIL"
          className="form-textarea"
        />
      <button type="submit" disabled={status.submitting} className="con-sub" >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </section>
  );
};

export default FormC

