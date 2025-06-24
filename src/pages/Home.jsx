import mountains from "../assets/images/mountains.png"

const Home = () => {
  return (
    <main className="flex-grow h-full w-full bg-cover bg-center px-3 pt-7 pb-5" style={{backgroundImage: `url(${mountains})`}}>
      <h1 className="text-white text-[2.25rem] font-extrabold pb-3">You got the travel plans, we got the travel vans.</h1>
      <p className="text-white text-base font-medium pb-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <button className="w-full py-2 rounded-sm text-white text-base font-bold bg-[#FF8C38]">Find your van</button>
    </main>
  )
}
export default Home
