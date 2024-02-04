interface Props {
  img: string;
  title: string;
  buttonText: string;
}

const Card = ({ img, title, buttonText }: Props) => {
  return (
    <div className="card">
      <div className="image_content">
        <img src={img} />
        <button className="add_to_cart">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="card_content">
        <h1>{title}</h1>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
