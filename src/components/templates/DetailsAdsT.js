import { GrLocation } from "react-icons/gr";
import Title from "../ui/Title";
import SideBarDetails from "./SideBarDetails";

function DetailsAdsT({ data }) {
  return (
    <div className="flex gap-1 max-md:flex-col">
      <main className="text-primary p-2 w-[75%] max-md:w-full">
        <div className="mb-5">
          <h2 className="text-lg font-normal ">{data.title}</h2>
          <p className="flex items-center gap-1 mt-1 text-gray-600 text-sm">
            <GrLocation size={19} />
            {data.location}
          </p>
        </div>
        <div className="my-8">
          <Title>توضیحات</Title>
          <p className="text-black">{data.description}</p>
        </div>
        <div className="my-8">
          <Title>امکانات</Title>
          {data.amenities ? (
            <ul className="mr-5">
              {data.amenities?.map((i, index) => (
                <li key={index} className="text-black list-style">
                  {Object.values(i)}
                </li>
              ))}
            </ul>
          ) : (
            <p>هیچ قوانین ندارد !</p>
          )}
        </div>
        <div className="my-8">
          <Title>قوانین</Title>
          {data.rules.length ? (
            <ul>
              {data.rules?.map((i, index) => (
                <li key={index} className="text-black list-style">
                  {Object.values(i)}
                </li>
              ))}
            </ul>
          ) : (
            <p>هیچ قوانینی ندارد !</p>
          )}
        </div>
      </main>
      <aside className=" text-black w-[25%] max-md:w-full">
        <SideBarDetails data={data}></SideBarDetails>
      </aside>
    </div>
  );
}

export default DetailsAdsT;
