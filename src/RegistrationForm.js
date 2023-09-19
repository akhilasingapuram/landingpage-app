import React, { useState } from "react";

const RegistrationForm = () => {
  //Initialize state variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [showpopup, setShowPopup] = useState(false);

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //You can perform form validation here before showing the popup

    //show the "registered successfully"popup
    setShowPopup(true);

    //Reset the form input fields
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setZipcode("");
  };
  //Handle form cancellation
  const handleCancel = () => {
    //Reset the form input fields
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setZipcode("");
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            reguired
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            reguired
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>zipcode:</label>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {showpopup && (
        <div className="popup">
          <p>Registered successfully!</p>
        </div>
      )}
    </div>
  );
};
export default RegistrationForm;
