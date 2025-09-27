import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Eye, Calendar } from 'lucide-react';
import { Post } from '../types';
import { formatDate, truncateText } from '../lib/utils';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.thumbnail || `https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800`}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {post.location && (
          <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white text-sm">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{post.location}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{post.views} views</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {truncateText(post.excerpt || post.content, 120)}
        </p>

        <Link
          to={`/post/${post.slug}-${post.hash}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Read more
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;