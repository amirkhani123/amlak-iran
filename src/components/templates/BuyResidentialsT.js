"use cilent";
import Card from "../modules/Card";
import SideBarSearch from "../modules/SideBarSearch";
function BuyResidentialsPageT({ data }) {
  return (
    <div className="flex gap-2 w-full text-black p-1 dark:text-second max-md:flex-col">
      <aside className="w-[20%] shadow-3xl rounded-xl text-black p-1 h-[270px] max-md:w-full">
        <SideBarSearch />
      </aside>
      <main className="w-[80%] flex items-center  flex-wrap gap-2 gap-x-4 flex-auto max-xl:justify-between max-xl:gap-1 max-md:w-full">
        {data.length ? (
          <>
            {data?.map((item) => (
              <Card data={item} key={item._id} />
            ))}
          </>
        ) : (
          <h2 className="w-full text-center font-normal text-2xl text-red-500 mt-11">
         هیچ آگهی یافت نشد !🥲
          </h2>
        )}
      </main>
    </div>
  );
}

export default BuyResidentialsPageT;
