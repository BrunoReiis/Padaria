import Card from "./Card";

interface Props {
  title: string;
  content: string[][];
}
const ProductRow = ({ title, content }: Props) => {
  // const paes = [
  //   ["/mockup-01.avif", "PÃO FRANCÊS PACOTE COM 5 UNIDADES", "R$ 11,60"],
  //   ["/mockup-02.avif", "PÃO DE QUEIJO PEQUENO", "R$ 9,60"],
  //   ["/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA", "R$ 12,90"],
  // ];
  return (
    <>
      <div className="product_row">
        <h1 id={title}>{title}</h1>
        <div className="product_row_carousel">
          {content.map((key, index) => {
            return (
              <Card
                key={index}
                img={key[0]}
                title={key[1]}
                buttonText={key[2]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
