import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[30rem] ml-[2rem] p-3 relative">
      <div className="relative">
        {/* HeartIcon outside the Link and properly positioned */}
        <HeartIcon
          product={product}
          className="" // you can control size with text-*
        />
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-[30rem] rounded"
          />

          <div className="p-4">
            <h2 className="flex justify-between items-center">
              <div className="text-lg">{product.name}</div>
              <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                $ {product.price}
              </span>
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
