export default function ResumeBoxInfo(params) {
  const { title, year, location, desc } = params;

  return (
    <div className="flex flex-col gap-3 resume-box">
      <h2 className="text-2xl text-textYellow font-bold resume-box-title">{title}</h2>
      <span className="text-textGray">{year}</span>

      <h3 className="text-xl text-white">{location}</h3>
      <p className="text-textGray">{desc}</p>
    </div>
  );
}
