import { FiPlusCircle } from "react-icons/fi";

export default function PortfolioCard(params) {
  const { title, category, image } = params;

  return (
    <div className="portfolio-box">
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-texts">
        <FiPlusCircle size="3rem" color="#fec544" />
        <h2 className="text-2xl">{title}</h2>
        <p>{category}</p>
      </div>
    </div>
  );
}
