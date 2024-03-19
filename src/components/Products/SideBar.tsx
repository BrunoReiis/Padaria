interface Props {
  titles: string[];
}

const Home_SideBar = ({ titles }: Props) => {
  const titlesArray: string[] = [];

  Object.keys(titles).forEach((key: any) => {
    titlesArray.push(titles[key]);
  });

  return (
    <>
      <section id="sidebar">
        <ul id="sidebar_list">
          {titlesArray.map((title, index) => {
            return (
              <li key={index} className="sidebar_list_element">
                <a href={`#${title.split(" ").join("_")}`}>
                  {title}
                  <span />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Home_SideBar;
