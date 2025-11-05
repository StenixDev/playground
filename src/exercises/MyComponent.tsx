import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products/2");
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>id: {data.id}</p>
          <p>title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>price: {data.price}</p>
          <p>rating: {data.rating}</p>
          <p>
            <img
              src={data.images[0]}
              alt=""
              style={{ width: "64px", height: "64px" }}
            />
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default MyComponent;
