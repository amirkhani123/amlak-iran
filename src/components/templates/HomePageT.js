import Banner from "../modules/home/Banner";
import Cards from "../modules/home/Cards";
import ListCity from "../modules/home/ListCity";
import Questions from "../modules/home/Questions";
import SliceDiv from "../ui/SliceDiv";

function HomePageT() {
  return (
    <div className="mt-2">
      <Banner />
      <SliceDiv text="دسته بندی ها" />
      <Cards />
      <SliceDiv text="محله های پر بازدید" />
      <ListCity />
      <SliceDiv text="سوالات متداول" />
      <Questions />
    </div>
  );
}

export default HomePageT;
