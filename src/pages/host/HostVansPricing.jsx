import {useOutletContext} from "react-router-dom";

const HostVansPricing = () => {
  const {vanData} = useOutletContext();
  return (
    <div>
      <span className="text-2xl font-medium">{`$${vanData.price}.00`}</span>
      <span>/day</span>
    </div>
  )
}
export default HostVansPricing
