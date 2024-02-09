export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <a id="header_profile_picture" href="./index.html">
          <img
            src="/img/logo.png"
            alt="Logo Website"
            id="profile_picture_image"
          ></img>
          <p id="profile_picture_text">Padaria Pão Feliz</p>
        </a>
        <ul className="header_user_menu">
          <a href="">
            Produtos
            <span />
          </a>
          <a href="">
            Contato
            <span />
          </a>
          <a href="">
            Sobre
            <span />
          </a>
          <a href="./cart.html">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-user-large"></i>
          </a>
        </ul>
        <div className="header_hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
