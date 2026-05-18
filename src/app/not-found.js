import { BiErrorAlt } from "react-icons/bi";
function noFound() {
  return (
    <div className="w-full mt-10  flex items-center justify-center flex-col">
      <h1 className="font-light text-xl mb-6 text-black dark:text-white">
        صفحه مورد نظر یافت نشد 🥲
      </h1>
      <BiErrorAlt color="red" size={55} />
    </div>
  );
}

export default noFound;
