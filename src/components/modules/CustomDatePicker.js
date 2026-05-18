import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ setProfileData, profileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData((profileData) => ({
      ...profileData,
      constructionDate: date,
    }));
  };
  return (
    <div>
      <p className="font-light">تاریخ ساخت :</p>
      <div className="datePicker">
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          value={new Date(profileData.constructionDate)}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export default CustomDatePicker;
