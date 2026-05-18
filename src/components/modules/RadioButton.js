function RadioButton({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    setProfileData((profileData) => ({
      ...profileData,
      category: e.target.value,
    }));
  };
  return (
    <div>
      <p className="font-light mb-1 block  text-gray-800">دسته بندی :</p>
      <div className="flex gap-2">
        <div className="lable-radio">
          <label htmlFor="villa">ویلایی</label>
          <input
            type="radio"
            value="villa"
            name="category"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="lable-radio">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            value="apartment"
            name="category"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="lable-radio">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            value="store"
            name="category"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="lable-radio">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            value="office"
            name="category"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioButton;
