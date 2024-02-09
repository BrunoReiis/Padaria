import CartCard from "./CartCard";

interface Props {
  content: string[][];
}

const CartProducts = ({ content }: Props) => {
  return (
    <section id="cart_products">
      {content.map((key, index) => {
        if (key.length === 5) {
          return (
            <CartCard
              key={index}
              price={key[0]}
              img={key[1]}
              title={key[2]}
              description={key[3]}
              quantity={key[4]}
            />
          );
        } else {
          return (
            <CartCard
              key={index}
              price={key[0]}
              img={key[1]}
              title={key[2]}
              quantity={key[3]}
            />
          );
        }
      })}
    </section>
  );
};

export default CartProducts;
