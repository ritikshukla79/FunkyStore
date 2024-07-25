import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { useGetProductsQuery } from "../../Reduxe/api/productQuery";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Toast } from 'primereact/toast';
import { classNames } from "primereact/utils";
import { addToCart } from "../../Reduxe/slice/cartSlice/cartSlice";
import "./Product1.css";
import ProductLoading from "../ProductLoading/ProductLoading";


export default function Product1() {
    const dispatch = useDispatch();
  const { data: products, error, isLoading } = useGetProductsQuery([]);
  const toast = useRef<Toast>(null);

  const [layout, setLayout] = useState("grid");
  if (isLoading || products.length === 0) {
    return (
      <ProductLoading />
    );
  }
  if (error) return <div>Error occurred</div>;

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.current?.show({severity:'success', summary: 'Success', detail:'Item Added to Cart', life: 3000});
    };

  const getSeverity = () => {
    switch ("INSTOCK") {
      case "INSTOCK":
        return "success";

      // case 'LOWSTOCK':
      //     return 'warning';

      // case 'OUTOFSTOCK':
      //     return 'danger';

      default:
        return null;
    }
  };

  const listItem = (product, id: number) => {
    // const image = JSON.parse(product.images);
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": product.id !== 0 }
          )}
        >
          <img
            className="w-12 sm:w-25rem xl:w-10rem shadow-2 block xl:block mx-auto border-round "
            // src={image[0]}
            src={product.category.image}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.title}</div>
              {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category.name}</span>
                </span>
                <Tag value="INSTOCK" severity={getSeverity()}></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                onClick={()=>handleAddToCart(product)}
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    // const image = JSON.parse(product.images);
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.category.name}</span>
            </div>
            <Tag value="INSTOCK" severity={getSeverity()}></Tag>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img
              className="w-5 shadow-2 border-round"
            //   src={image[0]}
            src={product.category.image}
              alt={product.name}
            />
            <div className="text-2xl font-bold">{product.title}</div>
            <Rating value={product.rating} cancel={false}></Rating>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">${product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              onClick={()=>handleAddToCart(product)}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout, id) => {
    if (!product) {
      return;
    }
    if (layout === "list") return listItem(product, id);
    if (layout === "grid") return gridItem(product);
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
          style={{
            background: '#f9fafb',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderWidth: '1px 0 1px 0',
            padding: '1rem 1rem',
            fontWeight: '700'
        }}
        />
      </div>
    );
  };

  return (
    <>
    <div className="card " style={{position:'absolute',top:'15%', left:'5%' , right:'5%'}}>
      <DataView
        value={products}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()}
      />
    </div>
    <Toast className='toast' position="bottom-right"  ref={toast} />
    </>
  );
}
