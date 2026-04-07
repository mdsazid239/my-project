import { getProducts } from "../api/productApi";
import useFetch from "../hooks/useFetch";
import ProductList from "../components/product/ProductList";

function Home() {
  const data = useFetch(getProducts);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Food Items</h1>
      <ProductList data={data} />
    </div>
  );
}

export default Home;