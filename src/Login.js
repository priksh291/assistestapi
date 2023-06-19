import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        setLoginStatus("Success");
        console.log("Login successful");
        navigate("/Form")
      } else {
        setLoginStatus("Failed");
        console.log("Login failed");
      }
    } catch (error) {
      setLoginStatus("Failed");
      console.log("Login failed with an error:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  

  

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded w-64"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-2 border border-gray-300 rounded w-64"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.133 12.562a7.054 7.054 0 001.707-4.568c0-3.892-3.162-7.054-7.054-7.054S1.732 3.102 1.732 6.994c0 1.634.568 3.135 1.52 4.317l.025-.029a1 1 0 00.15 1.4 1.013 1.013 0 001.413-.148l1.326-1.326a4.98 4.98 0 012.944-1.164c2.772 0 5.015 2.242 5.015 5.014 0 1.117-.297 2.171-.813 3.08l1.487-1.487a1 1 0 00-.15-1.4l-.022-.016a.978.978 0 00-1.406.153l-1.31 1.309zm-1.43-.727l-1.326 1.326A4.98 4.98 0 018.662 15c-2.772 0-5.014-2.242-5.014-5.014 0-1.117.296-2.17.812-3.08L3.872 8.738A1 1 0 006.286 7.33l.022.017A.978.978 0 007.71 7.49L9.132 6.066A7.054 7.054 0 0010 11.435zm-4.195-4.25L5.064 8.63a2.968 2.968 0 000 3.854l-.03.033a1 1 0 001.413.149l2.362-2.36a2.968 2.968 0 000-3.854l.03-.032a1 1 0 00-1.413-1.4L6.316 7.519A2.968 2.968 0 004.122 7.52zm11.093-2.18a2.968 2.968 0 00-2.12-.878l-.05.003a2.97 2.97 0 00-2.126.878l-2.362 2.36a2.967 2.967 0 000 3.853l.03.032a1 1 0 001.413.15l2.36-2.36a2.968 2.968 0 000-3.854l-.03-.033a1 1 0 00-1.413-1.4l-2.36 2.36a2.97 2.97 0 00-.878 2.126c0 .803.312 1.56.878 2.126l2.36 2.36a2.967 2.967 0 003.854 0l.033-.03a1 1 0 00.15-1.413l-2.36-2.36a2.968 2.968 0 00-2.126-.878l-.05-.003a2.97 2.97 0 00-2.126.878L7.71 11.77a2.968 2.968 0 000 3.853l.03.033a1 1 0 001.413.15l1.326-1.326a2.968 2.968 0 002.126-.878l.003-.05a2.97 2.97 0 00-.878-2.126l-1.326-1.326a2.967 2.967 0 000-3.853l-.03-.032a1 1 0 00-1.413-.15l-1.31 1.309a.976.976 0 00-.15 1.407l.022.016A.998.998 0 008.662 6.23l1.326-1.326a2.968 2.968 0 00-1.89-5.146z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 11.435a7.054 7.054 0 001.707-4.568c0-3.892-3.162-7.054-7.054-7.054S1.732 3.102 1.732 6.994c0 1.634.568 3.135 1.52 4.317l.025-.029a1 1 0 00.15 1.4 1.013 1.013 0 001.413-.148l1.326-1.326a4.98 4.98 0 012.944-1.164c2.772 0 5.015 2.242 5.015 5.014 0 1.117-.297 2.171-.813 3.08l1.487-1.487a1 1 0 00-.15-1.4l-.022-.016a.978.978 0 00-1.406.153l-1.31 1.309zm-1.43-.727l-1.326 1.326A4.98 4.98 0 018.662 15c-2.772 0-5.014-2.242-5.014-5.014 0-1.117.296-2.17.812-3.08L3.872 8.738A1 1 0 006.286 7.33l.022.017A.978.978 0 007.71 7.49L9.132 6.066A7.054 7.054 0 0010 11.435zm-4.195-4.25L5.064 8.63a2.968 2.968 0 000 3.854l-.03.033a1 1 0 001.413.149l2.362-2.36a2.968 2.968 0 000-3.854l.03-.032a1 1 0 00-1.413-1.4L6.316 7.519A2.968 2.968 0 004.122 7.52zm11.093-2.18a2.968 2.968 0 00-2.12-.878l-.05.003a2.97 2.97 0 00-2.126.878l-2.362 2.36a2.967 2.967 0 000 3.853l.03.032a1 1 0 001.413.15l2.36-2.36a2.968 2.968 0 000-3.854l-.03-.033a1 1 0 00-1.413-1.4l-2.36 2.36a2.97 2.97 0 00-.878 2.126c0 .803.312 1.56.878 2.126l2.36 2.36a2.967 2.967 0 003.854 0l.033-.03a1 1 0 00.15-1.413l-2.36-2.36a2.968 2.968 0 00-2.126-.878l-.05-.003a2.97 2.97 0 00-2.126.878L7.71 11.77a2.968 2.968 0 000 3.853l.03.033a1 1 0 001.413.15l1.326-1.326a2.968 2.968 0 002.126-.878l.003-.05a2.97 2.97 0 00-.878-2.126l-1.326-1.326a2.967 2.967 0 000-3.853l-.03-.032a1 1 0 00-1.413-.15l-1.31 1.309a.976.976 0 00-.15 1.407l.022.016A.998.998 0 008.662 6.23l1.326-1.326a2.968 2.968 0 00-1.89

-5.146z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded w-64"
        >
          Submit
        </button>
        {loginStatus && <p>{loginStatus}</p>}
        <button
          type="button"
          className="text-sm text-blue-500 underline mt-2 self-start"
          onClick={()=>{
            navigate("/Forgot")
          }}
          
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
