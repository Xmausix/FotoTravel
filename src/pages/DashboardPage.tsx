import React from 'react';
import { BarChart3, Plus, FileText, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { usePosts } from '../hooks/usePosts';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { posts } = usePosts();

  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{posts.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Views</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalViews}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg. Views</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {posts.length > 0 ? Math.round(totalViews / posts.length) : 0}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Your Posts</h2>
              <Link
                to="/dashboard/posts/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Post</span>
              </Link>
            </div>
          </div>

          <div className="p-6">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-6">Create your first travel post to get started.</p>
                <Link
                  to="/dashboard/posts/new"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create Post</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {post.views} views • Created {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/post/${post.slug}-${post.hash}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View
                        </Link>
                        <Link
                          to={`/dashboard/posts/edit/${post.id}`}
                          className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;