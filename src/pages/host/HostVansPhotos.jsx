import {useOutletContext} from "react-router-dom";

const HostVansPhotos = () => {
  const {vanData} = useOutletContext();
  return (
    <div className="size-12.5">
      <img src={vanData.imageUrl} alt="" className="h-full w-full object-cover rounded-[5px]"/>
    </div>
  )
}
export default HostVansPhotos
