export default function Button({ children, handleClick }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 p-4 font-bold text-white shadow-lg shadow-primary/50 transition-all duration-300 hover:bg-primary/50 mt-4 "
      onClick={handleClick}
    >
      {children}
    </button>
  );
}