export default function BorderIndicators() {
  return (
    <div className="hidden md:block">
      <div className="absolute z-10 -top-1 -left-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
      <div className="absolute z-10 -top-1 -right-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
      <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
      <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
    </div>
  );
}
