export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <a id="header_profile_picture" href="/index.html">
          <img
            src="/vite.svg"
            alt="Logo Website"
            id="profile_picture_image"
          ></img>
          <p id="profile_picture_text">Logo</p>
        </a>
        <ul className="header_user_menu">
          <a href="">Usuário</a>
          <a href="">Usuário</a>
          <a href="">Usuário</a>
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
