import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;