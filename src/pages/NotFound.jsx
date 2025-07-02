import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex-grow flex flex-col gap-3 px-3">
      <h1 className="text-[2rem] font-bold">Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="text-white bg-[#161616] rounded-[5px] py-2 flex justify-center">Return to home</Link>
    </main>
  )
}
export default NotFound
