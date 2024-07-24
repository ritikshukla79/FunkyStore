import { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Skeleton } from "primereact/skeleton";
import { classNames } from "primereact/utils";
import "./ProductLoading.css";

export default function Product1() {
  const [layout, setLayout] = useState("grid");
  const products = [
    {
      id: 631,
      title: "Effortbfffff",
      price: 1868855,
      description: "Vitae labore sunt eofcf",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:05.000Z",
      updatedAt: "2024-07-23T20:01:56.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
    {
      id: 631,
      title: "Effortbfffff",
      price: 1868855,
      description: "Vitae labore sunt eofcf",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:05.000Z",
      updatedAt: "2024-07-23T20:01:56.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
    {
      id: 631,
      title: "Effortbfffff",
      price: 1868855,
      description: "Vitae labore sunt eofcf",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:05.000Z",
      updatedAt: "2024-07-23T20:01:56.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
    {
      id: 632,
      title: "Trustworthiness",
      price: 186,
      description: "Vitae labore sunt eo",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:05.000Z",
      updatedAt: "2024-07-23T07:13:05.000Z",
      category: {
        id: 1,
        name: "Clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
    {
      id: 633,
      title: "Optimism",
      price: 186,
      description: "Vitae labore sunt eo",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:06.000Z",
      updatedAt: "2024-07-23T07:13:06.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
    {
      id: 634,
      title: "Mastery",
      price: 186,
      description: "Vitae labore sunt eo",
      images: [
        '["https://static.india.com/wp-content/uploads/2020/05/table-tennis.jpg?impolicy=Medium_Widthonly&w=700"]',
      ],
      creationAt: "2024-07-23T07:13:06.000Z",
      updatedAt: "2024-07-23T07:13:06.000Z",
      category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-07-23T04:38:02.000Z",
        updatedAt: "2024-07-23T04:38:02.000Z",
      },
    },
  ];

  const listItem = (product, id: number) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": product.id !== 0 }
          )}
        >
          <Skeleton className="w-12 sm:w-25rem xl:w-10rem shadow-2 block xl:block mx-auto border-round " />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <Skeleton className="w-8rem border-round h-2rem" />
              <div className="flex align-items-center gap-3">
                <Skeleton className="w-6rem border-round h-1rem" />
                <Skeleton className="w-3rem border-round h-1rem" />
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Skeleton className="w-4rem border-round h-2rem" />
              <Skeleton shape="circle" className="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <Skeleton className="w-6rem border-round h-1rem" />
            <Skeleton className="w-3rem border-round h-1rem" />
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <Skeleton className="w-9 shadow-2 border-round h-10rem" />
            <Skeleton className="w-8rem border-round h-2rem" />
            <Skeleton className="w-6rem border-round h-1rem" />
          </div>
          <div className="flex align-items-center justify-content-between">
            <Skeleton className="w-4rem border-round h-2rem" />
            <Skeleton shape="circle" className="w-3rem h-3rem" />
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
            background: "#f9fafb",
            color: "#374151",
            border: "1px solid #e5e7eb",
            borderWidth: "1px 0 1px 0",
            padding: "1rem 1rem",
            fontWeight: "700",
          }}
        />
      </div>
    );
  };

  return (
    <div
      className="card "
      style={{ position: "absolute", top: "15%", left: "5%", right: "5%" }}
    >
      <DataView
        value={products}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()}
      />
    </div>
  );
}
