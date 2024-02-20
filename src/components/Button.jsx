export default function Button({ children, ...props }) {
  return (
    <p>
      <button
        {...props}
        className="bg-stone-500 rounded-md px-2 py-1 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
      >
        {children}
      </button>
    </p>
  );
}
