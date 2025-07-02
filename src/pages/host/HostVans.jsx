import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getHostVans} from "../../api";

const HostVans = () => {
  const [vansData, setVansData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVansData() {
      setLoading(true);
      const data = await getHostVans();
      setVansData(data);
      setLoading(false);
    }

    fetchVansData();
  },[])

  if(loading){
    return <div className="flex-grow flex justify-center items-center px-3"><h1 className="text-2xl">Loading...</h1></div>
  }

  return (
    <div className="flex-grow flex flex-col gap-3">
      {
        vansData && vansData.map(van => (
          <HostVans.Card key={van.id} id={van.id} imgUrl={van.imageUrl} name={van.name} price={van.price} />
        ))
      }
    </div>
  )
}

HostVans.Card = function HostVansCard({id, imgUrl, name, price}){
  return(
    <Link to={id} className="flex gap-2.5 py-2.5 px-3 bg-white rounded-md hover:scale-105 transition-transform duration-400">
      <div className="h-8 w-8">
        <img src={imgUrl} alt="Van image" className="rounded-[5px] h-full w-full object-cover" />
      </div>
      <div>
        <p className="font-semibold text-xl">{name}</p>
        <p className="text-base font-medium text-[#4D4D4D]">{`$${price}/day`}</p>
      </div>
    </Link>
  )
}

export default HostVans
