export default function Product(props: { params: { productId: string } }) {
    return <div>Product {props.params.productId}</div>;
  }
  