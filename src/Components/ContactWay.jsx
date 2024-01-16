export default function ContactWay(params) {
  const { icon, title, firstInfo, secondInfo } = params;

  return (
    <div className="flex gap-2 p-3">
      <img
        src={icon}
        alt={title}
        className="px-8 border border-borderColor rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <p className="text-textGray text-sm">{firstInfo}</p>
        <p className="text-textGray text-sm">{secondInfo}</p>
      </div>
    </div>
  );
}
