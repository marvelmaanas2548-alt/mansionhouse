import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-amber-600 hover:text-amber-700">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
              />
              {product.isOnSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-full text-sm font-bold">
                  SALE
                </div>
              )}
              <div className="absolute top-4 right-4 bg-amber-500 text-gray-900 px-3 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                4.8 (124 reviews)
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm text-amber-600 font-medium bg-amber-100 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Alcohol Content</h3>
                  <p className="text-gray-600">{product.alcohol}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Volume</h3>
                  <p className="text-gray-600">{product.volume}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Origin</h3>
                  <p className="text-gray-600">{product.origin}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">Quality</h3>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-amber-500 mr-1" />
                    <span className="text-gray-600">Premium</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                    {product.isOnSale && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                        Save ${(product.originalPrice! - product.price).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>

                <div className="mt-6 text-sm text-gray-500">
                  <p>• Free shipping on orders over $75</p>
                  <p>• 30-day return policy</p>
                  <p>• Secure payment processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;