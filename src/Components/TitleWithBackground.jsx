export default function TitleWithBackground(params) {
  const { title, color } = params;
  return (
    <div className="relative flex flex-col items-center w-full">
      <h2 style={{ color: color }} className="text-2xl title-after-before">
        {title}
      </h2>
      <p className="text-[70px] font-bold text-textGray absolute opacity-10 top-[-20px] uppercase">{title}</p>
    </div>
  );
}
