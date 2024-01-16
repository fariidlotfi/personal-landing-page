export default function IconBox(params) {
  const { icon, title, desc } = params;

  return (
    <div className="flex flex-col items-center bg-bgBox justify-center min-h-[300px] text-center gap-5 border border-[#232935] rounded icon-box py-14">
      <div className=" flex items-center icon-box-image-holder justify-center rounded-full border bg-mainBgColor border-textGray p-5">
        <img
          src={icon}
          alt={title}
          width="50px"
          height="50px"
          className="grayscale icon-box-image"
        />
      </div>
      <h2 className="text-2xl text-white icon-box-title">{title}</h2>
      <p className="text-textGray">{desc}</p>
    </div>
  );
}
