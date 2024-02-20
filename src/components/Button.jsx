export default function Button({ children, props }) {
  return (
    <p>
      <button
        {...props}
        className="bg-stone-600 rounded-md px-2 py-1 text-stone-900"
      >
        {children}
      </button>
    </p>
  );
}
