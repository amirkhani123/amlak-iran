import p2e from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    setProfileData((profileData) => ({
      ...profileData,
      [e.target.name]: p2e(e.target.value),
    }));
  };
  return (
    <div className="my-2">
      <p className="font-light mb-1 block  text-gray-800">{title} :</p>
      {textArea ? (
        <textarea
          name={name}
          id={name}
          onChange={changeHandler}
          defaultValue={profileData[name]}
          className="border rounded-md p-1  w-60 border-dashed border-primary outline-none "
        ></textarea>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          onChange={changeHandler}
          defaultValue={profileData[name]}
          className="border rounded-md p-1  w-60 border-dashed border-primary outline-none"
        />
      )}
    </div>
  );
}

export default TextInput;
