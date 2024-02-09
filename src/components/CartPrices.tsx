const CartPrices = () => {
  return (
    <section id="cart_prices">
      <h1 id="cart_subtotal">Subtotal:</h1>
      <h2 id="cart_service_tax">Taxa de serviço:</h2>
      <h3 id="cart_shipping">Taxa de entrega:</h3>
      <h1 id="cart_total">Total:</h1>
      <div id="cart_payment_container">
        <button>Comprar</button>
      </div>
    </section>
  );
};

export default CartPrices;
