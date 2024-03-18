import CartCard from "./Card";

interface Props {
  content: any;
}

const Cart_Products = ({ content }: Props) => {
  return (
    <section id="cart_products">
      {Object.keys(content).length > 0 ? (
        content.map((key: any, index: number) => {
          return (
            <CartCard
              key={index}
              price={key.price}
              img={key.image}
              title={key.title}
              quantity={key.quantity}
              id={key.id}
              description={key.info ? key.info : null}
            />
          );
        })
      ) : (
        <h1>Ops! Parece que você não tem nenhum item na sacola.</h1>
      )}
    </section>
  );
};

export default Cart_Products;
