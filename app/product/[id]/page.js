import ProductSlider from "@/components/ProductSlider";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="p-6 flex gap-10">
      
      {/* Slider */}
      <ProductSlider
        images={product.images}
        thumbnail={product.thumbnail}
      />

      {/* Product Info */}
      <div className="w-[70%]">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl mt-2">${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>

    </div>
  );
}