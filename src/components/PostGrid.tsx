import React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

interface PostGridProps {
  posts: Post[];
  loading: boolean;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-300 h-64 rounded-2xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 p-8 rounded-2xl max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Posts Yet</h3>
          <p className="text-gray-600">Check back soon for new travel stories and adventures!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;