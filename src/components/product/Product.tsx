import "./product.css";

type productProps = {
  img: string;
  link: string;
};

function Product(props: productProps) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={props.link} target="_blank">
        <img src={props.img} alt="x" className="p-img" />
      </a>
    </div>
  );
}
export default Product;
