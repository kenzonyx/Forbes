import './Card.css';
import ForbesData from '../ForbesData'

function Card() {
  return (
    <div className="container">
      {ForbesData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} alt="Card Image" />
          <div className="content">
            <h2>{card.title}</h2>
            {/* <p>{card.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
