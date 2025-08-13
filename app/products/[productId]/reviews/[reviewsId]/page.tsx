// export default function Reviews({params}:{params:{prductid :string , reiewsid :string}})
//   return <div>Reviews{prop.params.reviewsid
// }

export default function Reviews({params} : {params : {reviewsId : string , productId : string}}){
  return <div>Reviews{params.reviewsId} for product{params.productId} </div>
}