import Card from "./Card";

interface Props {
  title: string;
  content: string[][];
}

const ProductRow = ({ title, content }: Props) => {
  return (
    <>
      <div className="product_row">
        <span id={title} />
        <h1>{title}</h1>
        <div className="product_row_products">
          {content.map((key, index) => {
            if (key.length === 4) {
              return (
                <Card
                  key={index}
                  price={key[0]}
                  img={key[1]}
                  title={key[2]}
                  info={key[3]}
                />
              );
            } else {
              return (
                <Card price={key[0]} key={index} img={key[1]} title={key[2]} />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
