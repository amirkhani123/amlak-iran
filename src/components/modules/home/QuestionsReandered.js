
import clsx from "clsx";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function QuestionsRendered({ data }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="text-blue-700 border border-primary p-2 rounded-lg my-2 transition-all duration-300 ease-in min-h-6">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setIsShow(!isShow)}
      >
        <p className="font-normal text-base">{data.question}</p>
        <IoIosArrowDown  size={25}
          className={clsx("transition-all duration-300 ease-in text-primary", {
            "rotate-180": isShow,
          })}/>
      </button>
        <p className={clsx("overflow-hidden transition-all duration-500 ease-in-out text-blue-400 font-normal text-sm mt-1", {
          "max-h-0": !isShow,
          "max-h-screen": isShow,
        })}>{data.answer}</p>
    </div>
  );
}

export default QuestionsRendered;
