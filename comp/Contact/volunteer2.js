import React, { useState } from 'react';
import axios from 'axios';

const FormE = ({message,title}) => {
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
        phone: '',
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
          required={true}
          value={inputs.name}
          placeholder="სახელი და გვარი"
          className="form-input"
        />
         <input
          autocomplete="false"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required={true}
          value={inputs.email}
          placeholder="ელ.ფოსტა"
          className="form-input"
        />
         <input
          autocomplete="false"
          id="phone"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          required={true}
          value={inputs.phone}
          placeholder="ტელ.ნომერი"
          className="form-input"
        />

          <input
          autocomplete="false"
          id="fb"
          type="text"
          name="_replyto"
          onChange={handleOnChange}
          required={true}
          value={inputs.fb}
          placeholder="Facebook პროფილის ბმული"
          className="form-input"
        />
            <fieldset id="fs-frm-selects" className="field-parent">
            <select name="city" id="city" required="true" onChange={handleOnChange} value={inputs.city} className="honeypie">
                <option value="" selected="" disabled="">საცხოვრებელი ადგილი</option>
                <option value="1">თბილისი</option>
                <option value="3">ბათუმი</option>
                <option value="5">რუსთავი</option>
                <option value="7">ქუთაისი</option>
                <option value="8">გორი</option>
                <option value="9">თელავი</option>
                <option value="10">ფოთი</option>
                <option value="11">ზუგდიდი</option>
                <option value="12">სხვა</option>
            </select>
        </fieldset>
        <fieldset id="fs-frm-selects" className="field-parent">
            <select name="city" id="city" required="true" onChange={handleOnChange} value={inputs.type} className="honeypie">
                <option value="" selected="" disabled="">საქმიანობა</option>
                <option value="1">საორგანიზაციო სამუშაო</option>
                <option value="3">ღონისძიებებზე მუშაობა</option>
                <option value="5">ციფრული მედია (ფოტო/ვიდეო გადაღება, მონტაჟი, გრაფიკული დიზაინი, კონტენტის შექმნა)</option>
                <option value="7">პლატფორმის განვითარება (პროგრამული მხარდაჭერა, გრაფიკული დიზაინი)</option>
                <option value="8">დისტანციურად მუშაობა</option>
                <option value="9">ანალიტიკა/კვლევა/თარგმნა</option>
                <option value="10">სხვა</option>
            </select>
        </fieldset>
        <fieldset id="fs-frm-selects" className="field-parent">
            <select name="type" id="type" required="true" onChange={handleOnChange} value={inputs.age} className="honeypie">
                <option value=""  selected="" disabled="">ასაკი</option>
                <option value="14-17">14-17</option>
                <option value="18-21">18-21</option>
                <option value="22-25">22-25</option>
                <option value="25+">25+</option>
            </select>
        </fieldset> 
         <fieldset id="fs-frm-selects" className="field-parent">
            <select name="time" id="time" required="true" onChange={handleOnChange} value={inputs.age} className="honeypie">
                <option value=""  selected="" disabled="">მუშაობის სიხშირე</option>
                <option value="14-17">ყოველდღიური</option>
                <option value="18-21">2-4 სამუშაო დღე</option>
                <option value="22-25">22-25</option>
                <option value="25+">კვირაში ერთხელ</option>
            </select>
        </fieldset> 
        
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

export default FormE

