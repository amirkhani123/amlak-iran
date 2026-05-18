import { useFormStatus } from "react-dom";
function Submit({ text1, text2 }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="sumbit"
      className="bg-primary text-second p-2 mt-2 rounded-md font-light transition-all duration-300 hover:opacity-50 disabled:opacity-50"
    >
      {pending ? text2 : text1}
    </button>
  );
}

export default Submit;
