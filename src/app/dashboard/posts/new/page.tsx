// src/app/dashboard/posts/new/page.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Image as ImageIcon, Tag, Folder, Save, UploadCloud } from 'lucide-react';
import { useRouter } from 'next/navigation'; // For redirecting after submission

// Mock data - replace with actual data fetching for categories/tags if needed
const availableCategories = ['Nature', 'Culture', 'Travel', 'City Break', 'Food', 'Adventure'];
const availableTags = ['mountains', 'adventure', 'patagonia', 'history', 'city', 'rome', 'beach', 'relaxation', 'thailand', 'japan', 'urban', 'food', 'asia', 'vietnam', 'wildlife', 'africa', 'safari'];

export default function NewPostPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFeaturedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!title || !content || !category) {
        toast({
            title: "Missing Fields",
            description: "Please fill in title, content, and category.",
            variant: "destructive",
        });
        setIsSubmitting(false);
        return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log({
      title,
      content,
      category,
      tags,
      featuredImageName: featuredImage?.name,
    });

    toast({
      title: 'Post Created!',
      description: `"${title}" has been successfully created.`,
    });
    
    // Reset form or redirect
    setTitle('');
    setContent('');
    setCategory('');
    setTags([]);
    setNewTag('');
    setFeaturedImage(null);
    setImagePreview(null);
    setIsSubmitting(false);
    
    router.push('/dashboard/posts'); // Redirect to posts list
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <PlusCircle className="mr-2 h-6 w-6 text-primary" />
          Create New Post
        </CardTitle>
        <CardDescription>Fill in the details for your new blog post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Content (Markdown supported)</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your amazing post content here..."
              className="min-h-[200px]"
              required
            />
          </div>

          <div>
            <Label htmlFor="category" className="flex items-center"><Folder className="mr-2 h-4 w-4"/>Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {availableCategories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tags" className="flex items-center"><Tag className="mr-2 h-4 w-4"/>Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                id="new-tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
              />
              <Button type="button" variant="outline" onClick={handleAddTag}>Add Tag</Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 p-2 border rounded-md">
                {tags.map(tag => (
                  <span key={tag} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                    {tag}
                    <Button type="button" variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0" onClick={() => handleRemoveTag(tag)}>
                      &times;
                    </Button>
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <Label htmlFor="featured-image" className="flex items-center"><ImageIcon className="mr-2 h-4 w-4"/>Featured Image</Label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Featured image preview" className="mx-auto h-48 w-auto rounded-md" />
                    ) : (
                        <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                    )}
                    <div className="flex text-sm text-muted-foreground">
                    <label
                        htmlFor="featured-image-input"
                        className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                    >
                        <span>Upload a file</span>
                        <Input id="featured-image-input" name="featured-image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
            {featuredImage && <p className="text-sm text-muted-foreground mt-1">Selected: {featuredImage.name}</p>}
          </div>


          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Post...' : <><Save className="mr-2 h-4 w-4" /> Create Post</>}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
