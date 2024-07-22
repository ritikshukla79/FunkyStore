import Cards from "../../components/Card/Cards";
import { useGetProductsQuery } from "../../Reduxe/api/productQuery"

export default function Products() {
    const { data:products, error, isLoading } = useGetProductsQuery();
    console.log(products);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred</div>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap:'10px 0px'}}>
        {products?.map((item)=>(
                   <div style={{ marginLeft: '20px', marginRight: '20px' ,width: 'calc(20% - 40px)'}}>
                   <Cards
                       name={item.title}
                       price={item.price}
                       image={item.images[0]}
                       category={item.category.name}
                   />
               </div>
        ))}
    </div>
  )
}
