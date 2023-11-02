import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  // form states
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  // for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fullname, email, phone, city, zipcode);
    const data = {
      Full_Name: fullname,
      Email: email,
      Phone: phone,
      City: city,
      Zip_Code: zipcode
    }
    

    axios.post('https://sheet.best/api/sheets/ca2c3ce3-6865-42ed-9a3c-186c2d42a9e8', data).then((Response) => {
      console.log(Response);
      setFullname('');
      setEmail('');
      setPhone('');
      setCity('');
      setZipcode('');
      // document.write("thany for fill the form..")
    }).then(()=>{
      const formsubmit = document.getElementById('formsubmitted')
      formsubmit.innerText = "Our team will contact you soon..."
    })
  }



  // body content
  return (
    <div>

      <div className="container py-3 mb-5">
        <div className="section-head ">
          <h4>Contact <span>Us</span></h4>
        </div>
        <div className="row m-auto">
          <div className="compcont col-lg-6 col-12 mt-3 py-3 px-4 border border-3 border-primary border-bottom-0 border-top-0 border-end-0">
            <div classname="forconatcthead">
              <h3>India</h3>
              <p>
                Thakur Village, kandivali (East), Mumbai, Maharashtra
                <br />
                400101
              </p>
            </div>
            <div classname="forconatcthead">
              <h3>Phone:- </h3>
              <p>
                <img src="https://img.icons8.com/fluency/25/phone.png" alt="phone" />
                <a href="https://wa.me/917304755630 " target="_blank ">
                  +91 7304755630{" "}
                </a>
                /
                <a href="https://wa.me/917304755630 " target="_blank ">
                  +91 7304755640
                </a>
              </p>
            </div >
            <div classname="forconatcthead">
              <h3>Email:- </h3>
              <img src="https://img.icons8.com/emoji/25/e-mail.png" alt="e-mail" />
              <a href="mailto: drmf@drfoundation.in">drmf@drfoundation.in</a>
            </div>
          </div>
          <div className=" form-bg col-lg-6 col-12 mt-3 py-3 px-4 bg-secondary-subtle">
            
            <form onSubmit={handleSubmit} className="needs-validation" noValidate="">
              <div className="section-head ">
                <h4>
                  <span>we will </span> contact <span>soon</span>
                </h4>
              </div>
              <div className="">
                <label htmlFor="validationCustom01" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="text-capitalize form-control"
                  id="validationCustom01"
                  placeholder="Enter full name"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                />
              </div>


              <div className="row">
                <div className="col-lg-6 col-12 mt-3">
                  <label htmlFor="validationCustomEmail" className="form-label">
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustomEmail"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <label htmlFor="validationCustomPhone" className="form-label">
                    Phone
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="tel"
                      className="form-control"
                      pattern="[0-9]{10}"
                      minlength="10" maxlength="10"
                      id="validationCustomPhone"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Enter phone no."
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                    />
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-6 col-12 mt-3">
                  <label htmlFor="validationCustomCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="text-capitalize form-control"
                    id="validationCustomCity"
                    placeholder="Enter city name"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    required
                  />
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <label htmlFor="validationCustom05" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="tel"
                    minlength="6" maxlength="6"
                    className="form-control"
                    id="validationCustom05"
                    placeholder="Enter Zip Code"
                    onChange={(e) => setZipcode(e.target.value)}
                    value={zipcode}
                    required
                  />
                </div>
              </div>


              <div className="col-12 mt-3 m-auto">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            <h6 className="text-end text-danger"  id="formsubmitted">
            </h6 >
          </div>
        </div>
      </div>



    </div>
  )
}

export default Contact