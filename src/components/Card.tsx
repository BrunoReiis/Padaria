interface Props {
  img: string;
  title: string;
  buttonText: string;
}

const Card = ({ img, title, buttonText }: Props) => {
  return (
    <div className="card">
      <img src={img} />
      <div className="card_content">
        <h1>{title}</h1>
        <a href="#">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;
