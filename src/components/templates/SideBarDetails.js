import { FaPhone, FaRegCalendarCheck } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import ButtonShare from "../ui/ButtonShare";
import { icons } from "@/constants/variables";
function SideBarDetails({ data }) {
  const { constructionDate, price, realState, phone, category } = data;
  const categorys = {
    villa: "ویلا",
    apartment: "آپارتمان",
    store: "مغازه",
    office: "اداره",
  };
  return (
    <>
      <div className="box-sidbar">
        <SiHomebridge size={55} color="#1d4ed8" />
        <h1 className=" font-light my-2"> املاک {realState}</h1>
        <p className="p text-gray-600">
          <FaPhone />
          {phone}
        </p>
      </div>
      <ButtonShare />
      <div className="box-sidbar font-light text-gray-600">
        <p className="p ">
          {icons[category]}
          {categorys[category]}
        </p>
        <p className="my-3">{Number(price).toLocaleString("fa-IR")} تومان</p>
        <p className="p">
          <FaRegCalendarCheck size={22} color="#1d4ed8" />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </p>
      </div>
    </>
  );
}

export default SideBarDetails;
