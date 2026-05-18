import { FaTrash } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";

function TextList({ title, profileData, name, setProfileData }) {
  const addHandler = () => {
    setProfileData((profileData) => ({
      ...profileData,
      [name]: [...profileData[name], ""],
    }));
  };
  const changeHandler = (e, index) => {
    const list = [...profileData[name]];
    list[index] = e.target.value;
    setProfileData((profileData) => ({ ...profileData, [name]: list }));
  };
  const deleteHandler = (index) => {
    const list = [...profileData[name]];
    list.splice(index, 1);
    setProfileData((profileData) => ({ ...profileData, [name]: list }));
  };
  return (
    <div>
      <p>{title} </p>
      <div>
        {profileData[name]?.map((item, index) => (
          <div key={index} className="flex my-1">
            <input
              type="text"
              defaultValue={item}
              onChange={(e) => changeHandler(e, index)}
              className="border rounded-md px-1 py-[2px]  w-60 border-dashed border-primary outline-none "
            />
            <button
              onClick={() => deleteHandler(index)}
              className="bg-red-500 p-1 rounded-md mr-2 text-white flex items-center gap-1 button-hover "
            >
              حذف
              <FaTrash size={15} />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addHandler}
        className="flex items-center gap-2 bg-blue-600 text-second my-1 p-1 rounded-md button-hover"
      >
        اضافه کردن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
