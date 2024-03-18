interface Props {
  id: number;
  img: string;
  title: string;
  info?: string;
  price: string;
}

const Card = ({ id, img, title, info, price }: Props) => {
  return (
    <div className="card">
      <div className="image_content">
        <img src={img} />
        <button className="add_to_cart">
          <span className="add_to_cart_span"></span>
          <span className="add_to_cart_span"></span>
        </button>
      </div>
      {info ? (
        <div className="card_content">
          <p className="product_id">{id}</p>
          <p className="product_price">{price}</p>
          <h1 className="product_name">{title}</h1>
          <p className="product_info">{info}</p>
        </div>
      ) : (
        <div className="card_content">
          <p className="product_id">{id}</p>
          <p className="product_price">{price}</p>
          <h1 className="product_name">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Card;
