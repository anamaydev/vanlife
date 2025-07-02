import {useState, useEffect} from "react";
import {Link, NavLink, useParams, Outlet} from "react-router-dom";
import {getHostVan} from "../../api"
import Chip from "../../components/Chip";
import backArrow from '../../assets/images/back-arrow.svg';

const HostVansDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const[fetchingError, setFetchingError] = useState(null);
  console.log(params);

  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    async function fetchVanData() {
      setLoading(true);
      try{
        const data = await getHostVan(params.id);
        setVanData(data);
      }catch(error){
        setFetchingError(error);
      }finally {
        setLoading(false);
      }
    }

    fetchVanData();
  }, [params.id]);

  function checkActivePage(isActive) {
    return (isActive ? "page-link border-b-2 active-page-link": "page-link")
  }

  if(fetchingError){
    return <main className="flex-grow flex justify-center items-center px-3"><h1 className="text-2xl">{fetchingError.message}</h1></main>
  }

  if(loading){
    return <div className="flex-grow flex justify-center items-center px-3"><h1 className="text-2xl">Loading...</h1></div>
  }

  return (
    <div className="flex flex-col gap-3 pb-6">
      {
        vanData &&
        <>
          {/* back button */}
          <div className="flex gap-1">
            <img src={backArrow} alt=""/>
            <Link to=".." className="text-base font-medium leading-normal underline underline-offset-2">Back to all vans</Link>
          </div>

          {/* van card */}
          <div className="bg-white p-3 rounded-md">
            <div className="flex gap-3 items-center">
              {/* img */}
              <div className="h-20 w-20">
                <img src={vanData.imageUrl} alt="" className="h-full w-full object-cover rounded-[5px]"/>
              </div>

              <div className="flex flex-col items-start">
                <Chip type={vanData.type}>{vanData.type[0].toUpperCase() + vanData.type.slice(1)}</Chip>
                <p className="font-bold text-[26px]">{vanData.name}</p>
                <div>
                  <span className="font-bold text-base">{`$${vanData.price}`}</span>
                  <span className="font-medium text-base">/day</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <nav className="flex justify-start items-center gap-3 text-[#4D4D4D] pt-4 pb-3">
              <NavLink to="." end className={({isActive})=>checkActivePage(isActive)}>Details</NavLink>
              <NavLink to="pricing" className={({isActive})=>checkActivePage(isActive)}>Pricing</NavLink>
              <NavLink to="photos" className={({isActive})=>checkActivePage(isActive)}>Photos</NavLink>
            </nav>
            <Outlet context={{vanData}}/>
          </div>
        </>
      }
    </div>
  )
}
export default HostVansDetails
