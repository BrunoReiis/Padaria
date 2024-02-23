const Home_Main = () => {
  return (
    <>
      <section id="home_content">
        <div id="home_content_container">
          <img src="/img/logo.png" />
          <div id="content_container">
            <h1>Padaria Pão Feliz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolores amet veniam perferendis pariatur quae sunt hic.
              Blanditiis, adipisci hic.
            </p>
            <a href="/products">
              Comprar
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="home_news">
        <span className="scroll_me">
          <i className="fa-solid fa-arrow-down"></i>
        </span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem corporis quisquam assumenda nostrum tempora distinctio
          voluptatem quam ratione. Sunt itaque at quasi totam facilis cum nulla
          fugiat perspiciatis error illo assumenda, quae corporis voluptas
          doloribus esse iure laborum. Ex, necessitatibus nostrum. Non nam
          maxime quae. Autem provident aliquid voluptatum ratione.
        </p>
      </section>
    </>
  );
};

export default Home_Main;
