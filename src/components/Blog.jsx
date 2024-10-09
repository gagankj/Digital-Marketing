import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of SEO in Digital Marketing',
      excerpt: 'Search Engine Optimization (SEO) is crucial for enhancing your online presence and driving traffic to your website.',
      date: 'October 1, 2024',
    },
    {
      id: 2,
      title: 'Content Marketing Strategies for 2024',
      excerpt: 'Effective content marketing strategies can significantly improve your brand visibility and engagement.',
      date: 'September 25, 2024',
    },
    {
      id: 3,
      title: 'Maximizing Your Social Media Reach',
      excerpt: 'Learn how to optimize your social media efforts to connect with your audience more effectively.',
      date: 'September 20, 2024',
    },
  ];

  return (
    <div className="container custom-cursor pt-20 mx-auto px-4" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero rounded-xl bg-cover bg-main h-56 text-white p-10 mt-10 text-center">
        <h1 className="text-5xl md:text-7xl text-[#082522] font-bold">Our <span className="text-orange-500">Blog</span></h1>
        <p className="mt-4 text-zinc-500 text-lg md:text-xl">Learn more about our mission, values, and the team behind our success.</p>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          {blogPosts.map(post => (
            <div key={post.id} className="post bg-white p-6 rounded-lg shadow mb-8">
              <h2 className="text-xl md:text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="mt-4 text-sm md:text-base">{post.excerpt}</p>
              <a href="#" className="text-[#16423C] font-bold mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="sidebar bg-white p-6 rounded-lg shadow mt-8 md:mt-0">
          <h2 className="text-xl font-bold">Categories</h2>
          <ul className="mt-4">
            <li><a href="#" className="text-[#16423C]">SEO</a></li>
            <li><a href="#" className="text-[#16423C]">Content Marketing</a></li>
            <li><a href="#" className="text-[#16423C]">Social Media</a></li>
          </ul>

          <h2 className="text-xl font-bold mt-8">Recent Posts</h2>
          <ul className="mt-4">
            {blogPosts.map(post => (
              <li key={post.id}>
                <a href="#" className="text-[#16423C]">{post.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default Blog;
