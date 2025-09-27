import { useState, useEffect } from 'react';
import { Post } from '../types';
import { supabase } from '../lib/supabase';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, refetch: fetchPosts };
};

export const usePost = (slug: string, hash: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .eq('hash', hash)
          .single();

        if (error) throw error;
        
        // Increment view count
        await supabase
          .from('posts')
          .update({ views: (data.views || 0) + 1 })
          .eq('id', data.id);

        setPost({ ...data, views: (data.views || 0) + 1 });
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug && hash) {
      fetchPost();
    }
  }, [slug, hash]);

  return { post, loading };
};