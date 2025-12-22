type Props = {
  hasTopIndicators?: boolean;
  hasBottomIndicators?: boolean;
};

export default function BorderIndicators({
  hasTopIndicators = true,
  hasBottomIndicators = true,
}: Props) {
  return (
    <div className="hidden xl:block">
      {hasTopIndicators && (
        <>
          <div className="absolute z-10 -top-3.5 -left-2 text-xl text-sky-500 drop-shadow-lg filter">
            ✦︎
          </div>
          <div className="absolute z-10 -top-3.5 -right-2 text-xl text-sky-500 drop-shadow-lg filter">
            ✦︎
          </div>
        </>
      )}
      {hasBottomIndicators && (
        <>
          <div className="absolute z-10 -bottom-3.5 -left-2 text-xl text-sky-500 drop-shadow-lg filter">
            ✦︎
          </div>
          <div className="absolute z-10 -bottom-3.5 -right-2 text-xl text-sky-500 drop-shadow-lg filter">
            ✦︎
          </div>
        </>
      )}
    </div>
  );
}
