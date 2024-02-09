interface Props {
  img: string;
  title: string;
  description?: string;
  price: string;
  quantity: string;
}

const CartCard = ({ img, title, description, price, quantity }: Props) => {
  return (
    <div className="cart_card">
      <img src={img} />

      <div className="cart_card_content">
        <h1 className="card_title">{title}</h1>

        {description ? (
          <div className="container">
            <p className="card_description">{description}</p>
            <p className="card_price">{price}</p>
          </div>
        ) : (
          <div className="container">
            <p className="card_price">{price}</p>
          </div>
        )}
      </div>
      <div className="cart_card_buttons">
        <i className="fa-solid fa-plus adds"></i>
        <p className="cart_card_quantity">{quantity}</p>
        <i className="fa-solid fa-minus removes"></i>
      </div>
    </div>
  );
};

export default CartCard;
