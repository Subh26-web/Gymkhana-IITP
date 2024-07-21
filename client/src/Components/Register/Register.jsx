// Components/Register/Register.jsx

import React from 'react';
import './Register.css';
import iitp_drone from '../../assets/iitp-drone.jpg'; // Import the background image

const Register = () => {
  return (
    <div className="register-container" style={{ backgroundImage: `url(${iitp_drone})` }}>
      <div className="register-box">
        <h2>Welcome to the registration of E-Gymkhana IIT-Patna</h2>
        <form>
          <label htmlFor="email">Enter your IIT Patna mail ID:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
