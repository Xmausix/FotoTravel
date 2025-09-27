import React from 'react';
import Hero from '../components/Hero';
import PostGrid from '../components/PostGrid';
import { usePosts } from '../hooks/usePosts';

const HomePage: React.FC = () => {
  const { posts, loading } = usePosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Adventures</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing travel stories and breathtaking destinations from around the world.
          </p>
        </div>

        <PostGrid posts={posts} loading={loading} />
      </div>
    </div>
  );
};

export default HomePage;