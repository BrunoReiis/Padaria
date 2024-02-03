import Card from "./Card";

const ProductRow = () => {
  return (
    <>
      <div className="product-row">
        <Card
          img="/mockup-01.avif"
          title="PÃO FRANCÊS PACOTE COM 5 UNIDADES"
          buttonText="R$ 11,60"
        />
        <Card
          img="/mockup-02.avif"
          title="PÃO DE QUEIJO PEQUENO"
          buttonText="R$ 9,60"
        />
        <Card
          img="/mockup-03.avif"
          title="PÃO FRANCÊS COM REQUEIJÃO NA CHAPA"
          buttonText="R$ 12,90"
        />
        <Card
          img="/mockup-01.avif"
          title="PÃO FRANCÊS PACOTE COM 5 UNIDADES"
          buttonText="R$ 11,60"
        />
        <Card
          img="/mockup-02.avif"
          title="PÃO DE QUEIJO PEQUENO"
          buttonText="R$ 9,60"
        />
        <Card
          img="/mockup-03.avif"
          title="PÃO FRANCÊS COM REQUEIJÃO NA CHAPA"
          buttonText="R$ 12,90"
        />
      </div>
    </>
  );
};

export default ProductRow;
