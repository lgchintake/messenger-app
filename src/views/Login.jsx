import { useState } from "react";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const mobileNumberChange = (mobile) => {
    mobile = mobile.replace(/\D/g, "");
    setMobileNumber(mobile);
    setOtpSent(false);
  };

  const sendOtp = () => {
    if (mobileNumber.length < 10) {
      setMobileError(true);
      return;
    } else {
      setMobileError(false);
      setOtpSent(true);
    }

    // Write logic to send otp
  };

  const otpChange = (e) => {
    const { value } = e.target;
    if (value.length === 6) {
      localStorage.setItem("isLoggedIn", true);
      window.location.reload();
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="row justify-content-center pt-5 login-top">
          <div className="col-10 col-md-6 col-lg-4 text-center">
            <img
              src="/media/logo-white.svg"
              className="login-logo"
              alt="Logo"
            />{" "}
            <span className="login-app-name">Messenger</span>
          </div>
        </div>
        <div className="row justify-content-center pt-5 login-bottom">
          <div className="col-10 col-md-6 col-lg-4 phone-div text-center">
            <div className="row mb-3 mt-5">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="mobile"
                      name="mobile"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => mobileNumberChange(e.target.value)}
                    />
                    {mobileError ? (
                      <div>
                        <span className="error">Not a valid mobile number</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="btn btn-primary" onClick={sendOtp}>
                  Send OTP
                </div>
              </div>
            </div>

            {otpSent ? (
              <div className="row mb-3">
                <div className="col-12">
                  <input
                    type="password"
                    name="otp"
                    className="otp"
                    maxLength={6}
                    placeholder="OTP"
                    onChange={(e) => otpChange(e)}
                  />
                </div>
                <div className="col-12">
                  <span className="success ms-2">Otp has been sent</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
