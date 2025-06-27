import {useOutletContext} from "react-router-dom";

const HostVansInfo = () => {
  const {vanData} = useOutletContext();
  console.log(vanData);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="font-bold text-xl">Name: </span>
        <span className="font-medium text-xl">{vanData.name}</span>
      </div>

      <div>
        <span className="font-bold text-xl">Category: </span>
        <span className="font-medium text-xl">{vanData.type[0].toUpperCase() + vanData.type.slice(1)}</span>
      </div>

      <div>
        <span className="font-bold text-xl">Description: </span>
        <span className="font-medium text-xl">{vanData.description}</span>
      </div>

      <div>
        <span className="font-bold text-xl">Visibility: </span>
        <span className="font-medium text-xl">Public</span>
      </div>

    </div>
  )
}
export default HostVansInfo
