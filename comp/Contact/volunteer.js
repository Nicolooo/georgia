import React, { useState } from 'react';
import axios from 'axios';

const FormV = ({message,title}) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    name: '',
    city: '',
    age: '',
    type: '',
    time: '',
    fb: '',
    phone: '',
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
        name: '',
        city: '',
        age: '',
        type: '',
        time: '',
        fb: '',
        phone: ''
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
      url: 'https://formspree.io/f/xeqwvavr',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          message,
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section className="scta">
      <h3 className="con-title">{title}</h3>
      <form onSubmit={handleOnSubmit} id="form" className="topBefore" autocomplete="false">
      <input
          autocomplete="off"
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="NAME AND LAST NAME"
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
          placeholder="EMAIL"
          className="form-input"
        />
        <input
          autocomplete="false"
          id="city"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          value={inputs.city}
          placeholder="CiTY OF RESIDENCE"
          className="form-input"
        />
          <input
          autocomplete="false"
          id="fb"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.age}
          placeholder="AGE"
          className="form-input"
        />
          <input
          autocomplete="false"
          id="fb"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.fb}
          placeholder="FACEBOOK PROFILE LINK"
          className="form-input"
        />
           {/* <fieldset id="fs-frm-selects">
            <label for="timely">CITY OF RESIDENCE</label>
            <select name="timely" id="timely" required="true" onChange={handleOnChange} value={inputs.city}>
                <option value="" selected="" disabled="">Choose</option>
                <option value="1">BATUMI</option>
                <option value="3">TBILISI</option>
                <option value="5">XOBI</option>
                <option value="7">Disagree</option>
                <option value="9">Strongly Disagree</option>
            </select>
        </fieldset>
        <fieldset id="fs-frm-selects">
            <label for="timely">AGE</label>
            <select name="timely" id="timely" required="true" onChange={handleOnChange} value={inputs.age}>
                <option value="" selected="" disabled="">Choose</option>
                <option value="14-17">14-17</option>
                <option value="18-21">18-21</option>
                <option value="22-25">22-25</option>
                <option value="25+">25+</option>
            </select>
        </fieldset> */}
        
      <button type="submit" disabled={status.submitting} className="btn con-sub pp" onClick={handleOnSubmit}>
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
      {!status.info.error && status.info.msg && <p className="jim">{status.info.msg}</p>}
    </section>
  );
};

export default FormV

