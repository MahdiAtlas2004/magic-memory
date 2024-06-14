import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    //Check if the selected card is disabled or not
    if (!disabled) {
      handleChoice(card);
    }
  };

  //Returning JSX Template
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
