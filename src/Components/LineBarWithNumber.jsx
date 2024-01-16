export default function LineBarWithNumber(params) {
  const { title, percent } = params;

  return (
    <>
      <div className="flex justify-between">
        <p className="text-white">{title}</p>
        <p className="text-textYellow">{percent}</p>
      </div>

      <div className="relative bg-bgBox h-[5px] rounded-sm w-full">
        <div
          className="absolute z-10 bg-textYellow left-0 top-0 rounded-sm h-[5px]"
          style={{ width: percent }}
        ></div>
      </div>
    </>
  );
}
