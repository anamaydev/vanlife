import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {getVans} from "../../api";
import clsx from "clsx";
import Chip from "../../components/Chip.jsx"

const Vans = () => {
  const [vansData, setVansData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const filteredVansData = vansData ? typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData : [];
  console.log("typeFilter: ", typeFilter);
  console.log("searchParams: ", searchParams.toString());

  const uniqueType = vansData ? [...new Set(vansData.map(van => van.type))] : null;
  // console.log("uniqueType", uniqueType);

  useEffect(() => {
    async function getVansData(){
      const data = await getVans();
      setVansData(data);
    }

    getVansData();
  }, [])

  function handleSearchParams(key, value) {
    setSearchParams(prevSearchParams => {
      const newSearchParams = prevSearchParams;
      if(value === null) newSearchParams.delete(key);
      else newSearchParams.set(key, value);
      return newSearchParams;
    });
  }

  return (
    <main className="flex-grow px-3 pt-4 pb-6">
      <h2 className="text-[2rem] font-bold">Explore our van options</h2>

      {/* chips */}
      <div className="pb-3 flex justify-between items-center">
        <div className="flex gap-3">
          {
            uniqueType &&
            // uniqueType.map(type => <Link to={`?type=${type}`} key={type}><Chip>{type[0].toUpperCase() + type.slice(1)}</Chip></Link>)
            uniqueType.map(type =>
              <button
                key={type}
                onClick={() => handleSearchParams("type", type)}
                className={clsx(
                  {"py-[6px] px-2.5 rounded-[5px] font-medium transition-colors duration-300 cursor-pointer": true},
                  {"bg-[#E17654] text-white": type === "simple" && typeFilter === "simple"},
                  {"bg-[#115E59] text-white": type === "rugged" && typeFilter === "rugged"},
                  {"bg-[#161616] text-white": type === "luxury" && typeFilter === "luxury"},

                  {"bg-[#FFEAD0] text-[#4D4D4D]": typeFilter !== type},

                  {"hover:bg-[#E17654] hover:text-white": type && type === "simple"},
                  {"hover:bg-[#115E59] hover:text-white": type && type === "rugged"},
                  {"hover:bg-[#161616] hover:text-white": type && type === "luxury"},
                )}
            >{type[0].toUpperCase() + type.slice(1)}</button>)
          }
        </div>
        {typeFilter && <button onClick={() => handleSearchParams("type", null)} className="border-b-1 cursor-pointer">Clear filters</button>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {
          filteredVansData &&
          filteredVansData.map(van => (
            <Link to={van.id} state={{search: searchParams.toString()}} key={van.name} >
              <Vans.Card imgUrl={van.imageUrl} name={van.name} price={van.price} type={van.type}/>
            </Link>
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