import clsx from 'clsx';

const Chip = ({children, type}) => {
  const chipClass = clsx(
    {"py-[6px] px-2.5 rounded-[5px]":true},
    {"bg-[#FFEAD0] text-[#4D4D4D] font-medium": !type},
    {"text-base text-[#FFEAD0] font-semibold": type},
    {"bg-[#E17654]": type && type === "simple"},
    {"bg-[#115E59]": type && type === "rugged"},
    {"bg-[#161616]": type && type === "luxury"},
  )
  return (
    <div className={chipClass}>
      {children}
    </div>
  )
}
export default Chip
