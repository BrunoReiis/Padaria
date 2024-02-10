export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <a id="header_profile_picture" href="/">
          <img
            src="/img/logo.png"
            alt="Logo Website"
            id="profile_picture_image"
          ></img>
          <p id="profile_picture_text">Padaria Pão Feliz</p>
        </a>
        <ul className="header_user_menu">
          <a href="/">
            Produtos
            <span />
          </a>
          <a href="/contact">
            Contato
            <span />
          </a>
          <a href="/about">
            Sobre
            <span />
          </a>
          <a href="/cart">
            <i className="fa-solid fa-basket-shopping"></i>
          </a>
          <a href="/user">
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
