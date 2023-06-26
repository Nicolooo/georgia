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
    <div className="scta">
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
          placeholder="FACEBOOK-ის პროფაილის ლინკი"
          className="form-input"
        />
            <fieldset id="fs-frm-selects" className="field-parent">
            <select name="city" id="city" required="true" onChange={handleOnChange} value={inputs.city} className="honeypie">
                <option value="" selected="" disabled="">საცხოვრებელი ადგილი</option>
                <option value="თბილისი">თბილისი</option>
                <option value="ბათუმი">ბათუმი</option>
                <option value="ქუთაისი">ქუთაისი</option>
                <option value="რუსთავი">რუსთავი</option>
                <option value="გორი">გორი</option>
                <option value="თელავი">თელავი</option>
                <option value="ფოთი">ფოთი</option>
                <option value="ზუგდიდი">ზუგდიდი</option>
                <option value="სხვა">სხვა</option>
            </select>
        </fieldset>
        <fieldset id="fs-frm-selects" className="field-parent">
            <select name="age" id="age" required="true" onChange={handleOnChange} value={inputs.age} className="honeypie">
                <option value=""  selected="" disabled="">ასაკი</option>
                <option value="14-17">14-17</option>
                <option value="18-21">18-21</option>
                <option value="22-25">22-25</option>
                <option value="25+">25+</option>
            </select>
        </fieldset> 
           <fieldset id="fs-frm-selects" className="field-parent">
            <select name="type" id="type" required="true" onChange={handleOnChange} value={inputs.type} className="honeypie">
                <option value="" selected="" disabled="">საქმიანობა</option>
                <option value="საორგანიზაციო სამუშაო">საორგანიზაციო სამუშაო</option>
                <option value="ღონისძიებებზე მუშაობა">ღონისძიებებზე მუშაობა</option>
                <option value="ციფრული მედია (ფოტო/ვიდეო გადაღება, მონტაჟი, გრაფიკული დიზაინი, კონტენტის შექმნა)">ციფრული მედია (ფოტო/ვიდეო გადაღება, მონტაჟი, გრაფიკული დიზაინი, კონტენტის შექმნა)</option>
                <option value="პლატფორმის განვითარება (პროგრამული მხარდაჭერა, გრაფიკული დიზაინი)">Platform development (Software support, Graphic Design)</option>
                <option value="დისტანციურად მუშაობა">დისტანციურად მუშაობა</option>
                <option value="ანალიტიკა/კვლევა/თარგმნა">ანალიტიკა/კვლევა/თარგმნა</option>
                <option value="სხვა">სხვა</option>
            </select>
        </fieldset>
            <fieldset id="fs-frm-selects" className="field-parent">
            <select name="time" id="time" required="true" onChange={handleOnChange} value={inputs.time} className="honeypie">
                <option value="" selected="" disabled="">მუშაობის სიხშირე</option>
                <option value="ყოველდღიური">ყოველდღიური</option>
                <option value="2-4 სამუშაო დღე">2-4 სამუშაო დღე</option>
                <option value="კვირაში ერთხელ">კვირაში ერთხელ</option>
            </select>
        </fieldset>
      <button type="submit" disabled={status.submitting} className="btn con-sub pp" onClick={handleOnSubmit}>
          {!status.submitting
            ? !status.submitted
              ? 'გაგზავნა'
              : 'წარმატებით გაიგზავნა'
            : 'იგზავნება...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className="jim">{status.info.msg}</p>}
    </div>
  );
};

export default FormE

