import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const samplePosts = [
      {
        id: 1,
        alt: "Modern eco-friendly building with solar panels and green roof",
        src: "Architecture.jpg",
        title: "The Future of Sustainable Architecture",
        author: "Prashant Rastogi",
        date: "2025-08-10",
        excerpt:
          "Discover how green building materials and smart design are shaping the future of construction, creating eco-friendly and energy-efficient homes...",
      },
      {
        id: 2,
        alt: "Stylish living room with modern furniture and biophilic design elements",
        src: "Interior Design.jpg",
        title: "Top 5 Interior Design Trends for 2025",
        author: "Prashant Rastogi",
        date: "2025-08-05",
        excerpt:
          "From biophilic design to bold colors, explore the latest trends in interior design that will transform your living space into a modern masterpiece...",
      },
      {
        id: 3,
        alt: "Structural engineer reviewing blueprints on a construction site",
        src: "Structure.jpg",
        title: "Why Structural Engineering is Crucial for Your Project",
        author: "Prashant Rastogi",
        date: "2025-08-01",
        excerpt:
          "Learn about the critical role of structural engineers in ensuring the safety, stability, and longevity of your building projects. A must-read for any homeowner...",
      },
    ];
    setPosts(storedPosts.length > 0 ? storedPosts.slice(0, 3) : samplePosts);
  }, []);

  const handleReadMore = () => {
    alert("A full blog page can be created in the next step.");
  };

  return (
    <section id="blog" className="py-20 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            From Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and insights from the
            construction and design industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              alt={post.alt}
              src={post.src}
              title={post.title}
              author={post.author}
              date={post.date}
              excerpt={post.excerpt}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
