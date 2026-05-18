import { citys } from "@/constants/variables";
import { FaCity } from "react-icons/fa";
function ListCity() {
  return (
    <div className="text-primary my-11">
      <div className="max-sm:p-2">
        <ul className="flex items-center justify-between flex-wrap mt-10 gap-2">
          {citys.map((i, index) => (
            <li className="home-list" key={index}>
              <FaCity />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCity;
