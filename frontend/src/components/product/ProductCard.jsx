import Button from "../common/Button";

function ProductCard({ item }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img src={item.image} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold mt-2">{item.name}</h3>
      <p>₹{item.price}</p>
      <Button>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;