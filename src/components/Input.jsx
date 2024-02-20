import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputsCss =
    "bg-stone-100 focus:bg-stone-200 py-1 px-2 w-[32.5rem] focus:outline-none focus:border-b-2 focus:border-black text-stone-500 focus:text-stone-800 my-1";
  return (
    <div className="flex flex-col my-4">
      <label className="uppercase text-stone-600 text-xl">{label}</label>
      {textarea ? (
        <textarea className={inputsCss} ref={ref} />
      ) : (
        <input {...props} className={inputsCss} ref={ref} />
      )}
    </div>
  );
});

export default Input;
