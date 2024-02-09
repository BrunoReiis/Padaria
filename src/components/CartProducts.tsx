import CartCard from "./CartCard";

interface Props {
  content: string[][];
}

const CartProducts = ({ content }: Props) => {
  return (
    <section id="cart_products">
      {content.map((key, index) => {
        if (key.length === 4) {
          return (
            <CartCard
              key={index}
              price={key[0]}
              img={key[1]}
              title={key[2]}
              description={key[3]}
            />
          );
        } else {
          return (
            <CartCard price={key[0]} key={index} img={key[1]} title={key[2]} />
          );
        }
      })}
    </section>
  );
};

export default CartProducts;
