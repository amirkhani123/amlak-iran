import { categorys } from "@/constants/variables";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";

function SideBarSearch() {
  return (
    <>
      <p className="text-lg font-normal flex items-center gap-1 m-2 mx-9 dark:text-second max-md:text-center max-md:items-center max-md:justify-center">
        <FaFilter color="#1d4ed8" />
        دسته بندی
      </p>
      <div className="flex text-gray-600 gap-1 items-center flex-col ">
        <Link href="/buy-residentials">همه</Link>
        {categorys.map((query, index) => (
          <Link
            key={index}
            href={{
              pathname: "/buy-residentials",
              query: { category: Object.keys(query) },
            }}
          >
            {Object.values(query)}
          </Link>
        ))}
      </div>
    </>
  );
}

export default SideBarSearch;
