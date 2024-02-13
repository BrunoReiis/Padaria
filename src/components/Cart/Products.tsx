import CartCard from "./Card";

interface Props {
  content: string[][];
}

const Cart_Products = ({ content }: Props) => {
  return (
    <section id="cart_products">
      {content.length > 0 ? (
        content.map((key, index) => {
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
        })
      ) : (
        <h1>Ops! Parece que você não tem nenhum item na sacola.</h1>
      )}
    </section>
  );
};

export default Cart_Products;
