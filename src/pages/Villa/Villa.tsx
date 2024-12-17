import "./villa.css";

export const Villa = () => {
  return (
    <div className="villa-wrapper">
      <div className="top-villa-buttons">
        <a
          target="_blank"
          href="https://seneshal.com/wp-content/uploads/2024/12/villa-spa12.pdf"
          className="button secondary-button"
        >
          CПА-меню
        </a>
        <a
          target="_blank"
          href="https://wa.me/79030104509"
          className="button secondary-button"
        >
          Получить консультацию
        </a>
      </div>

      <button className="button primary-button">Подобрать программу</button>
    </div>
  );
};
