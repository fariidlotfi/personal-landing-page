export default function Button(params) {
  const { title, borderRadius, backColor, textColor, padding } = params;

  return (
    <button
      className="p-5"
      style={{
        color: textColor,
        background: backColor,
        borderRadius: borderRadius,
        padding: padding,
      }}
    >
      {title}
    </button>
  );
}
