"use client";

export const AddToCard = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => console.log("Added to cart")}
    >
      Add to Cart
    </button>
  );
};
