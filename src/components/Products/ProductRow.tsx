import Card from "./Card";

interface Props {
  title: string;
  content: string[][];
}

const Home_ProductRow = ({ title, content }: Props) => {
  function addsTitle(title: string) {
    return (
      <>
        <span id={title} />
        <h1>{title}</h1>
      </>
    );
  }

  function addsContent(content: any, index: number) {
    return (
      <>
        {content.length === 5 ? (
          <Card
            key={index}
            price={content[0]}
            img={content[1]}
            title={content[2]}
            info={content[3]}
          />
        ) : (
          <Card
            key={index}
            price={content[0]}
            img={content[1]}
            title={content[2]}
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
          {Object.keys(content).map((key: any, index) =>
            addsContent(content[key], index)
          )}
        </div>
      </div>
    </>
  );
};

export default Home_ProductRow;
