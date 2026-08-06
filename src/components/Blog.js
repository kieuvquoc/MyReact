import React, { useState } from 'react';
import { 
  Plus, 
  User, 
  Clock, 
  Calendar, 
  Star, 
  ChevronsRight 
} from 'lucide-react';

const categories = [
  {
    id: 'sportswear',
    name: 'Sportswear',
    items: ['Nike', 'Under Armour', 'Adidas', 'Puma', 'ASICS']
  },
  {
    id: 'mens',
    name: 'Mens',
    items: ['Fendi', 'Guess', 'Valentino', 'Dior', 'Versace', 'Armani', 'Prada', 'Dolce and Gabbana', 'Chanel', 'Gucci']
  },
  {
    id: 'womens',
    name: 'Womens',
    items: ['Fendi', 'Guess', 'Valentino', 'Dior', 'Versace']
  },
  { id: 'kids', name: 'Kids' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'households', name: 'Households' },
  { id: 'interiors', name: 'Interiors' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'bags', name: 'Bags' },
  { id: 'shoes', name: 'Shoes' }
];

const brands = [
  { name: 'Acne', count: 50 },
  { name: 'Grüne Erde', count: 56 },
  { name: 'Albiro', count: 27 },
  { name: 'Ronhill', count: 32 },
  { name: 'Oddmolly', count: 5 },
  { name: 'Boudestijn', count: 9 },
  { name: 'Rösch creative culture', count: 4 }
];

const blogPosts = [
  {
    id: 1,
    title: 'Girls Pink T Shirt arrived in store',
    author: 'Mac Doe',
    time: '1:33 pm',
    date: 'DEC 5, 2013',
    image: 'images/blog/blog-one.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    title: 'Girls Pink T Shirt arrived in store',
    author: 'Mac Doe',
    time: '1:33 pm',
    date: 'DEC 5, 2013',
    image: 'images/blog/blog-two.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 3,
    title: 'Girls Pink T Shirt arrived in store',
    author: 'Mac Doe',
    time: '1:33 pm',
    date: 'DEC 5, 2013',
    image: 'images/blog/blog-three.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const BlogSection = (props) => {
  const [priceRange, setPriceRange] = useState(250);

  return (
    <section>
      <h1>heloo {props.name}</h1>
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">
                {categories.map((cat) => (
                  <div className="panel panel-default" key={cat.id}>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        {cat.items ? (
                          <a data-toggle="collapse" data-parent="#accordian" href={`#${cat.id}`}>
                            <span className="badge pull-right"><Plus size={12} /></span>
                            {cat.name}
                          </a>
                        ) : (
                          <a href={`#${cat.id}`}>{cat.name}</a>
                        )}
                      </h4>
                    </div>
                    {cat.items && (
                      <div id={cat.id} className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            {cat.items.map((item, idx) => (
                              <li key={idx}><a href={`#${item}`}>{item}</a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Brands */}
              <div className="brands_products">
                <h2>Brands</h2>
                <div className="brands-name">
                  <ul className="nav nav-pills nav-stacked">
                    {brands.map((brand, idx) => (
                      <li key={idx}>
                        <a href={`#${brand.name}`}>
                          <span className="pull-right">({brand.count})</span>
                          {brand.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price Range */}
              <div className="price-range">
                <h2>Price Range</h2>
                <div className="well">
                  <input 
                    type="range" 
                    min="0" 
                    max="600" 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(e.target.value)} 
                    className="span2"
                  />
                  <br />
                  <b>$ 0</b> <b className="pull-right">$ 600</b>
                </div>
              </div>

              {/* Shipping Banner */}
              <div className="shipping text-center">
                <img src="images/home/shipping.jpg" alt="Shipping Banner" />
              </div>
            </div>
          </div>

          {/* Main Content (Blog Posts) */}
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Latest From our Blog</h2>

              {blogPosts.map((post) => (
                <div className="single-blog-post" key={post.id}>
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <ul>
                      <li><User size={12} className="inline-block mr-1" /> {post.author}</li>
                      <li><Clock size={12} className="inline-block mr-1" /> {post.time}</li>
                      <li><Calendar size={12} className="inline-block mr-1" /> {post.date}</li>
                    </ul>
                    <span>
                      <Star size={12} className="inline-block text-yellow-500 fill-current" />
                      <Star size={12} className="inline-block text-yellow-500 fill-current" />
                      <Star size={12} className="inline-block text-yellow-500 fill-current" />
                      <Star size={12} className="inline-block text-yellow-500 fill-current" />
                      <Star size={12} className="inline-block text-yellow-500 fill-current" />
                    </span>
                  </div>
                  <a href={`#blog-${post.id}`}>
                    <img src={post.image} alt={post.title} />
                  </a>
                  <p>{post.excerpt}</p>
                  <a className="btn btn-primary" href={`#blog-${post.id}`}>Read More</a>
                </div>
              ))}

              {/* Pagination */}
              <div className="pagination-area">
                <ul className="pagination">
                  <li><a href="#page-1" className="active">1</a></li>
                  <li><a href="#page-2">2</a></li>
                  <li><a href="#page-3">3</a></li>
                  <li>
                    <a href="#next">
                      <ChevronsRight size={14} className="inline-block" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;