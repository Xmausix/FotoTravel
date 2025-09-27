import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Eye, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePost } from '../hooks/usePosts';
import { formatDate } from '../lib/utils';
import GoogleMap from '../components/GoogleMap';
import CommentSection from '../components/CommentSection';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [postSlug, hash] = (slug || '').split('-').reduce(
    (acc, part, index, array) => {
      if (index === array.length - 1) {
        acc[1] = part;
      } else {
        acc[0] += (index === 0 ? '' : '-') + part;
      }
      return acc;
    },
    ['', ''] as [string, string]
  );

  const { post, loading } = usePost(postSlug, hash);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-96 bg-gray-300 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Posts</span>
        </Link>

        <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {post.thumbnail && (
            <div className="h-96 overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
              {post.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{post.location}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none mb-12">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {post.images && post.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {post.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${post.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.lat && post.lng && post.location && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
                <GoogleMap lat={post.lat} lng={post.lng} location={post.location} />
              </div>
            )}
          </div>
        </article>

        <div className="mt-12">
          <CommentSection postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;