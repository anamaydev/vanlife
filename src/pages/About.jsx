import stargazing from "../assets/images/star-gazing.png"
const About = () => {
  return (
    <maini className="w-full">
      <img src={stargazing} alt="A person sitting on top of van and looking at the stars" className="w-full" />
      <div className="text-[#161616] flex flex-col gap-4 p-3">
        <h2 className="text-[2rem] font-bold leading-tight">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div className="flex flex-col gap-3 font-medium leading-normal ">
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>(Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="flex flex-col gap-3 items-start p-4 bg-[#FFCC8D]">
          <p className="text-2xl font-bold leading-tight">Your destination is waiting.<br/> Your van is ready.</p>
          <button className="font-base font-bold leading-normal text-white bg-[#161616] p-2 rounded-[10px]">Explore our vans</button>
        </div>
      </div>
    </maini>
  )
}
export default About
