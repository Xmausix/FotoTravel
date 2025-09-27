import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Comment } from '../types';
import { formatDate } from '../lib/utils';
import { supabase } from '../lib/supabase';

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('postId', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !author.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            content: newComment.trim(),
            author: author.trim(),
            postId
          }
        ]);

      if (error) throw error;

      setNewComment('');
      setAuthor('');
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-blue-100 p-2 rounded-lg">
          <MessageCircle className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          Comments ({comments.length})
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
        </div>
        <textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Send className="h-4 w-4" />
          <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">{comment.author}</h4>
              <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>Be the first to leave a comment!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;