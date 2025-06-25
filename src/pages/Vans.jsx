import {useEffect, useState} from "react";
import Chip from "../components/Chip"

const Vans = () => {
  const [vansData, setVansData] = useState(null);

  useEffect(() => {
    async function getVansData(){
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVansData(data.vans);
    }

    getVansData();
  }, [])

  useEffect(() => {
    console.log(vansData);
  }, [vansData]);

  return (
    <main className="px-3 pt-4 pb-6">
      <h2 className="text-[2rem] font-bold">Explore our van options</h2>

      {/* chips */}
      <div></div>

      <div className="grid grid-cols-2 gap-4">
        {
          vansData &&
          vansData.map(van => (
            <Vans.Card  key={van.name} imgUrl={van.imageUrl} name={van.name} price={van.price} type={van.type}/>
          ))
        }
      </div>
    </main>
  )
}
export default Vans

Vans.Card = function VansCard({imgUrl, name, price, type}){
  return (
    <div className="text-[#161616] w-full">
      <div>
        <img src={imgUrl} alt="Van Image" className="rounded-[5px] object-cover w-full h-full"/>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-xl font-semibold leading-normal">{name}</p>
          <Chip type={type}>
            <p>{type[0].toUpperCase() + type.slice(1)}</p>
          </Chip>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xl font-semibold leading-relaxed">{`$${price}`}</p>
          <p className="text-sm font-medium">/day</p>
        </div>
      </div>
    </div>
  )
}