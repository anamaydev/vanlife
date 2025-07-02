import {useEffect, useState} from "react";

const Login = () => {
  const [userData, setUserData] = useState({email: "", password: ""});

  function handleSubmit(event) {
    event.preventDefault();
    console.log("userData: ", userData);
  }

  function handleChange(event){
    const {name, value} = event.target;
    setUserData(prevData => ({...prevData, [name]:value}))
  }

  useEffect(() => {
    console.log("Email: ", userData.email);
    console.log("Password: ", userData.password);
  }, [userData]);

  return (
    <main className="flex flex-col justify-center items-center flex-grow px-3">
      <h2 className="text-[2rem] font-bold mb-4">Sign in to you account</h2>
      <form action="/" className="flex flex-col justify-center items-center w-full max-w-60">
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
        <button onClick={handleSubmit} className="bg-[#FF8C38] text-white w-full p-2 rounded-md mt-3 cursor-pointer font-bold">Sign in</button>
      </form>
      <div className="flex gap-1 text-base mt-4">
        <p className="font-medium text-[#161616]">Don’t have an account?</p>
        <a href="#" className="font-bold text-[#FF8C38]">Create one now</a>
      </div>
    </main>
  )
}
export default Login