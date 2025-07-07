import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {loginUser} from "../api.js";

const Login = () => {
  const [userData, setUserData] = useState({email: "", password: ""});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname ?? "/host";
  console.log(location);
  console.log("from: ", from);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    try {
      setError(null);
      const data = await loginUser(userData);
      localStorage.setItem("loggedIn", true);
      navigate(from, {replace: true});
      console.log(data);
    }catch(error) {
      setError(error);
      setStatus("idle");
    }finally {
      setStatus("idle");
    }
  }

  function handleChange(event){
    const {name, value} = event.target;
    setUserData(prevData => ({...prevData, [name]:value}))
  }

  return (
    <main className="flex flex-col justify-center items-center flex-grow px-3">
      <h2 className="text-[2rem] font-bold mb-4">
        {location.state?.message ?? "Sign in to your account"}
      </h2>
      {error && <p className="text-red-400">{error.message}</p>}
      <form
        action="/"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-60"
      >
        <div className="w-full">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="text-[#161616] bg-white placeholder:text-[#4D4D4D] border-[#D1D5DB] text-base py-1 px-1.5 border rounded-t-md w-full"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            className="text-[#161616] bg-white placeholder:text-[#4D4D4D] border-[#D1D5DB] text-base py-1 px-1.5 border border-t-0 rounded-b-md w-full"
          />
        </div>
        <button disabled={status === "submitting"} className="bg-[#FF8C38] text-white w-full p-2 rounded-md mt-3 cursor-pointer font-bold">{status === "idle" ? "Log in" : "Logging in..."}</button>
      </form>
      <div className="flex gap-1 text-base mt-4">
        <p className="font-medium text-[#161616]">Don’t have an account?</p>
        <a href="#" className="font-bold text-[#FF8C38]">Create one now</a>
      </div>
    </main>
  )
}
export default Login