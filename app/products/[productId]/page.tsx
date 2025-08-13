import { notFound } from "next/navigation";

export default function Product(props: { params: { productId: string } }) {
    const {productId } = props.params
    if (parseInt(productId)>100) return notFound()
     return <div>Product {props.params.productId}</div>;
  }
  