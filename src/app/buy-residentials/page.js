import BuyResidentialsPageT from "@/components/templates/BuyResidentialsT";

async function BuyResidentials({ searchParams }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/advertisements`,
    { cache: "force-cache" },
  );
  const data = await res.json();
  if (data.profiles) {
    const { category, search } = await searchParams;
    if (category && search) {
      const showData = data.profiles.filter((i) => {
        const categoryMatch = i.category === category;
        const searchMatch = i.title.indexOf(search) > -1;
        return searchMatch && categoryMatch;
      });
      return <BuyResidentialsPageT data={showData} />;
    } else if (category) {
      const showData = data.profiles.filter((i) => i.category === category);
      return <BuyResidentialsPageT data={showData} />;
    } else if (search) {
      const showData = data.profiles.filter(
        (i) => i.title.indexOf(search) > -1,
      );
      return <BuyResidentialsPageT data={showData} />;
    } else {
      return <BuyResidentialsPageT data={data.profiles} />;
    }
  } else {
    return (
      <div className="flex items-center justify-center w-full h-[50vh] text-black dark:text-white">
        <p>مشکلی پیش آمده است</p>
      </div>
    );
  }
}

export default BuyResidentials;
