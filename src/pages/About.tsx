import React from 'react';
import { Award, Users, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About MH Liquors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1985, MH Liquors has been your trusted destination for premium spirits including Chivas Regal, Jack Daniel's, 
            Royal Stag, Mansion House, and the finest Indian brands. We pride ourselves on curating an exceptional selection 
            from renowned distilleries worldwide and celebrating India's rich heritage in spirits.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="MH Liquors Store"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by Michael Harrison, MH Liquors began as a small family business with a simple mission: 
              to provide connoisseurs and casual drinkers alike with access to the finest beverages from around the globe, 
              with special focus on premium Indian brands like Royal Stag, Mansion House, Magic Moments, and international 
              favorites like Chivas Regal, Jack Daniel's, and Jameson. Over the decades, we've built relationships with 
              premium distilleries ensuring our customers always have access to both timeless classics and exciting new discoveries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to honor that tradition while embracing modern convenience through our online platform, 
              bringing our carefully curated selection of premium Indian and international spirits directly to your door. 
              From the iconic Old Monk to the sophisticated Chivas Regal, we celebrate both heritage and excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Hand-selected products from the world's finest producers</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
            <p className="text-gray-600">Our knowledgeable team is here to guide your selections</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Selection</h3>
            <p className="text-gray-600">Sourced from renowned regions across the world</p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Since 1985</h3>
            <p className="text-gray-600">Four decades of excellence and customer satisfaction</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Experience the MH Difference</h2>
          <p className="text-xl text-amber-100 mb-6">
            Join thousands of satisfied customers who trust us for premium Indian and international spirits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">22+</div>
              <div className="text-amber-100">Premium Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold">40</div>
              <div className="text-amber-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;