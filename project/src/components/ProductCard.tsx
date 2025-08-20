import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.isOnSale && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              SALE
            </div>
          )}
          <div className="absolute top-2 right-2 bg-amber-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <Star className="h-3 w-3 mr-1 fill-current" />
            4.8
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <div className="mb-2">
            <span className="text-sm text-amber-600 font-medium">{product.category}</span>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
          </div>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className="text-sm text-gray-500">{product.volume}</span>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 font-medium"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;