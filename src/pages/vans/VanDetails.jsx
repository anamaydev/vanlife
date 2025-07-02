import {useState, useEffect} from 'react'
import {useParams, Link, useLocation} from "react-router-dom";
import {getVan} from "../../api";
import Chip from "../../components/Chip.jsx"
import backArrow from "../../assets/images/back-arrow.svg"

const VanDetails = () => {
  const params = useParams();
  const location = useLocation();
  const [vanData, setVanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const prevTypeParam = new URLSearchParams(location.state.search);
  console.log("prevSearchParam", prevTypeParam.get("type"));

  useEffect(() => {
    async function getVanDetails() {
      setLoading(true);
      const data = await getVan(params.id);
      setVanData(data);
      setLoading(false);
    }

    getVanDetails();
  }, [params.id])

  if(loading){
    return <div className="flex-grow flex justify-center items-center px-3"><h1 className="text-2xl">Loading...</h1></div>
  }

  return (
    <main className="px-3 pt-4 pb-6 flex flex-col gap-4 text-[#161616]">
      <div className="flex gap-1">
        <img src={backArrow} alt=""/>
        <Link to={`..?${location.state?.search ?? ""}`} relative="path" className="text-base font-medium leading-normal underline underline-offset-2">Back to {prevTypeParam ? `${prevTypeParam.get("type")}` : "all"} vans</Link>
      </div>
      {
        vanData &&
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <img src={vanData.imageUrl} alt="Van Image" className="h-full w-full object-cover rounded-[5px]" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="self-start">
              <Chip type={vanData.type}>{vanData.type}</Chip>
            </div>
            <p className="text-[2rem] font-bold leading-none">{vanData.name}</p>
            <div>
              <span className="text-2xl font-bold">{`$${vanData.price}`}</span>
              <span>/day</span>
            </div>
            <p className="text-base font-medium">{vanData.description}</p>
            {/* change link later */}
            <Link to="rent" className="w-full flex justify-center items-center py-2 rounded-sm text-white text-base font-bold bg-[#FF8C38]">Rent this van</Link>
          </div>

        </div>
      }
    </main>
  )
}
export default VanDetails
