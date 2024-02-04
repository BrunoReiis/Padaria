import Card from "./Card";

interface Props {
  title: string;
  content: Object;
}
const ProductRow = ({ title, content }: Props) => {
  return (
    <>
      <div className="product_row">
        <h1 id={title}>{title}</h1>
        <div className="product_row_carousel">
          {Object.keys(content).map((key, index) => {
            return (
              <Card
                key={index}
                img={content[key][0]}
                title={content[key][1]}
                buttonText={content[key][2]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
