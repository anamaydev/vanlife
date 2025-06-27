import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Chip from "../../components/Chip";
import backArrow from '../../assets/images/back-arrow.svg';

const HostVansDetails = () => {
  const params = useParams();
  console.log(params);

  const [vanData, setVanData] = useState(null);

  useEffect(() => {
    async function fetchVanData() {
      const response = await fetch(`/api/host/vans/${params.id}`);
      const data = await response.json();
      setVanData(data.vans);
    }

    fetchVanData();
  }, [params.id]);

  useEffect(() => {
    if (vanData) {
      console.log(vanData);
    }
  }, [vanData]);

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

          </div>
        </>
      }
    </div>
  )
}
export default HostVansDetails
