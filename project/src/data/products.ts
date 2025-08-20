import { Product } from '../types';

export const products: Product[] = [
  // Premium International Brands
  {
    id: 1,
    name: "Chivas Regal 12 Years",
    category: "Scotch Whisky",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Scotch whisky aged for 12 years with rich, smooth taste and honey notes. A blend of the finest malt and grain whiskies.",
    alcohol: "40%",
    volume: "750ml",
    origin: "Scotland",
    isOnSale: true
  },
  {
    id: 2,
    name: "Jameson Irish Whiskey",
    category: "Irish Whiskey",
    price: 54.99,
    originalPrice: 69.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Triple-distilled Irish whiskey with smooth, balanced flavor. Perfect for sipping neat or in cocktails.",
    alcohol: "40%",
    volume: "750ml",
    origin: "Ireland",
    isOnSale: true
  },
  {
    id: 3,
    name: "Jack Daniel's Old No. 7",
    category: "Tennessee Whiskey",
    price: 67.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "America's favorite Tennessee whiskey, charcoal mellowed for smoothness with distinctive vanilla and caramel notes.",
    alcohol: "40%",
    volume: "750ml",
    origin: "USA"
  },
  {
    id: 4,
    name: "Teachers Highland Cream",
    category: "Scotch Whisky",
    price: 45.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Blended Scotch whisky with a high malt content, delivering rich smoky flavor with hints of honey and spice.",
    alcohol: "40%",
    volume: "750ml",
    origin: "Scotland"
  },
  {
    id: 5,
    name: "Black & White Scotch Whisky",
    category: "Scotch Whisky",
    price: 42.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic blended Scotch whisky with smooth, well-balanced taste. A timeless favorite with distinctive character.",
    alcohol: "40%",
    volume: "750ml",
    origin: "Scotland"
  },
  {
    id: 6,
    name: "Black Dog Scotch Whisky",
    category: "Scotch Whisky",
    price: 78.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium blended Scotch whisky with rich, complex flavor profile. Aged to perfection with smooth finish.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "Scotland"
  },

  // Indian Premium Brands
  {
    id: 7,
    name: "Mansion House Brandy",
    category: "Indian Brandy",
    price: 28.99,
    image: "https://images.pexels.com/photos/5946907/pexels-photo-5946907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's most popular brandy with smooth, mellow taste. Perfect for celebrations and special occasions.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 8,
    name: "Royal Stag Whisky",
    category: "Indian Whisky",
    price: 32.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Indian whisky with smooth taste and rich aroma. 'It's Your Life, Make It Large' - the spirit of celebration.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 9,
    name: "Magic Moments Vodka",
    category: "Indian Vodka",
    price: 24.99,
    image: "https://images.pexels.com/photos/5947004/pexels-photo-5947004.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's premium vodka with crystal clear purity and smooth taste. Perfect for cocktails and mixed drinks.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 10,
    name: "Daras Whisky",
    category: "Indian Whisky",
    price: 26.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Popular Indian whisky with distinctive taste and smooth finish. A favorite among whisky enthusiasts.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 11,
    name: "Jin Gin",
    category: "Indian Gin",
    price: 35.99,
    image: "https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Indian gin with botanical blend including juniper, coriander, and Indian spices. Crafted for perfection.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 12,
    name: "Kingfisher Ultra Beer",
    category: "Indian Beer",
    price: 18.99,
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's premium beer with crisp, refreshing taste. Brewed with finest ingredients for superior quality.",
    alcohol: "5%",
    volume: "650ml",
    origin: "India"
  },
  {
    id: 13,
    name: "Classic Blue Whisky",
    category: "Indian Whisky",
    price: 29.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Smooth Indian whisky with classic taste and premium quality. A perfect blend for discerning palates.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 14,
    name: "Manjera Rum",
    category: "Indian Rum",
    price: 22.99,
    image: "https://images.pexels.com/photos/5946907/pexels-photo-5946907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Traditional Indian rum with rich flavor and smooth finish. Perfect for cocktails and celebrations.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 15,
    name: "Kerala Coconut Feni",
    category: "Indian Feni",
    price: 38.99,
    image: "https://images.pexels.com/photos/5946907/pexels-photo-5946907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Traditional Kerala coconut feni with authentic taste. A unique Indian spirit with cultural heritage.",
    alcohol: "43%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 16,
    name: "Old Almond Brandy",
    category: "Indian Brandy",
    price: 31.99,
    image: "https://images.pexels.com/photos/5946907/pexels-photo-5946907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Indian brandy with almond essence and smooth taste. Aged for exceptional quality and flavor.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 17,
    name: "Williamson Whisky",
    category: "Indian Whisky",
    price: 34.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Indian whisky with rich heritage and smooth character. Crafted with finest ingredients.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },

  // Additional Premium Products
  {
    id: 18,
    name: "Royal Challenge Premium Whisky",
    category: "Indian Whisky",
    price: 45.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's premium blended whisky with smooth taste and rich aroma. A perfect blend of Indian grain spirits and imported Scotch malts.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 19,
    name: "Amrut Single Malt Whisky",
    category: "Indian Whisky",
    price: 125.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Award-winning single malt whisky from Bangalore. Matured in oak barrels with tropical aging giving it a unique character.",
    alcohol: "46%",
    volume: "700ml",
    origin: "India"
  },
  {
    id: 20,
    name: "Old Monk Dark Rum",
    category: "Indian Rum",
    price: 28.99,
    image: "https://images.pexels.com/photos/5946907/pexels-photo-5946907.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's iconic dark rum with a cult following. Rich, smooth, and full-bodied with hints of vanilla and caramel.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 21,
    name: "McDowell's No.1 Reserve Whisky",
    category: "Indian Whisky",
    price: 32.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "India's largest selling whisky brand. A premium blend with smooth taste and distinctive character.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  },
  {
    id: 22,
    name: "Blenders Pride Reserve Collection",
    category: "Indian Whisky",
    price: 55.99,
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium Indian whisky with international appeal. Smooth, well-balanced with notes of honey and spice.",
    alcohol: "42.8%",
    volume: "750ml",
    origin: "India"
  }
];