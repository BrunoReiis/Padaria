import Card from "./Card";

interface Props {
  title: string;
  content: Object;
}

const Home_ProductRow = ({ title, content }: Props) => {
  function addsTitle(title: string) {
    return (
      <>
        <span id={title.split(" ").join("_")} />
        <h1>{title}</h1>
      </>
    );
  }

  function AddsContent({ content }: { content: any }) {
    return (
      <>
        {Object.keys(content).length === 5 ? (
          <Card
            id={content.id}
            price={content.price}
            img={content.image}
            title={content.title}
            info={content.description}
          />
        ) : (
          <Card
            id={content.id}
            price={content.price}
            img={content.image}
            title={content.title}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="product_row">
        {addsTitle(title)}
        <div className="product_row_products">
          {Object.values(content).map((value: any, index) => (
            <AddsContent key={index} content={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home_ProductRow;
