const Contact_a = () => {
  return (
    <>
      <section id="contact_container">
        <div id="contact_address">
          Endereço:{" "}
          <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        </div>
        <div id="contact_phone">
          Telefone: <span>(99) 99999-9999</span>
        </div>
        <div id="contact_social">
          <div className="contact_social_item">
            <i className="fa-brands fa-facebook"></i>
            Facebook<span></span>
          </div>
          <div className="contact_social_item">
            <i className="fa-brands fa-instagram"></i>
            Instagram<span></span>
          </div>
          <div className="contact_social_item">
            <img src="/ifood.svg" />
            IFood<span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_a;
// golpe duplo
