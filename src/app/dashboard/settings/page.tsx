'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LayoutDashboard, Save, Bell, KeyRound, Palette, UserCircle, Tag, Folder, PlusCircle, Edit2, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Mock data - replace with actual data fetching and state management
const initialCategories = ['Nature', 'Culture', 'Travel', 'City Break', 'Food', 'Adventure'];
const initialTags = ['mountains', 'adventure', 'patagonia', 'history', 'city', 'rome', 'beach', 'relaxation', 'thailand', 'japan', 'urban', 'food', 'asia', 'vietnam', 'wildlife', 'africa', 'safari'];


export default function DashboardSettingsPage() {
  const { toast } = useToast();
  const [categories, setCategories] = useState(initialCategories);
  const [tags, setTags] = useState(initialTags);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editingTag, setEditingTag] = useState<string | null>(null);
  const [editCategoryValue, setEditCategoryValue] = useState('');
  const [editTagValue, setEditTagValue] = useState('');


  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
      toast({ title: 'Category Added', description: `Category "${newCategory.trim()}" has been added.` });
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
      toast({ title: 'Tag Added', description: `Tag "${newTag.trim()}" has been added.` });
    }
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    setCategories(categories.filter(cat => cat !== categoryToDelete));
    toast({ title: 'Category Deleted', description: `Category "${categoryToDelete}" has been deleted.`, variant: 'destructive' });
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
    toast({ title: 'Tag Deleted', description: `Tag "${tagToDelete}" has been deleted.`, variant: 'destructive' });
  };
  
  const handleEditCategory = (category: string) => {
    setEditingCategory(category);
    setEditCategoryValue(category);
  };

  const handleSaveEditCategory = () => {
    if (editingCategory && editCategoryValue.trim() && !categories.includes(editCategoryValue.trim())) {
      setCategories(categories.map(cat => cat === editingCategory ? editCategoryValue.trim() : cat));
      toast({ title: 'Category Updated', description: `Category "${editingCategory}" updated to "${editCategoryValue.trim()}".` });
    }
    setEditingCategory(null);
    setEditCategoryValue('');
  };

  const handleEditTag = (tag: string) => {
    setEditingTag(tag);
    setEditTagValue(tag);
  };

  const handleSaveEditTag = () => {
     if (editingTag && editTagValue.trim() && !tags.includes(editTagValue.trim())) {
      setTags(tags.map(t => t === editingTag ? editTagValue.trim() : t));
      toast({ title: 'Tag Updated', description: `Tag "${editingTag}" updated to "${editTagValue.trim()}".` });
    }
    setEditingTag(null);
    setEditTagValue('');
  };


  return (
    <div className="mx-auto grid w-full max-w-4xl gap-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your blog and profile settings.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
          <Link href="#general" className="font-semibold text-primary">
            General
          </Link>
          <Link href="#profile">Profile</Link>
          <Link href="#appearance">Appearance</Link>
          <Link href="#content-management">Content Management</Link>
          <Link href="#notifications">Notifications</Link>
          <Link href="#security">Security</Link>
          <Link href="#integrations">Integrations</Link>
        </nav>
        <div className="grid gap-6">
          <Card id="general">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your blog's general settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="blogName">Blog Name</Label>
                <Input id="blogName" defaultValue="FotoTravel" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="blogDescription">Blog Description</Label>
                <Textarea
                  id="blogDescription"
                  defaultValue="Exploring the world, one photo at a time."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc-5">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">(UTC-08:00) Pacific Time</SelectItem>
                    <SelectItem value="utc-5">(UTC-05:00) Eastern Time</SelectItem>
                    <SelectItem value="utc">(UTC+00:00) Coordinated Universal Time</SelectItem>
                    <SelectItem value="utc+1">(UTC+01:00) Central European Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button><Save className="mr-2 h-4 w-4"/> Save Changes</Button>
            </CardFooter>
          </Card>

          <Card id="profile">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your public profile information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <UserCircle className="h-16 w-16 text-muted-foreground" />
                  <Button variant="outline">Upload Photo</Button>
                </div>
              <div className="space-y-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Alex Wanderer" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex.wanderer@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Passionate traveler and photographer, sharing stories from around the globe."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button><Save className="mr-2 h-4 w-4"/> Update Profile</Button>
            </CardFooter>
          </Card>

          <Card id="appearance">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of your blog.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                      <Label htmlFor="theme-toggle-option" className="font-semibold">Theme</Label>
                      <p className="text-sm text-muted-foreground">Toggle between light and dark mode.</p>
                  </div>
                  <ThemeToggle />
                </div>
                <div className="space-y-1">
                <Label htmlFor="accentColor">Accent Color</Label>
                  <Select defaultValue="teal">
                  <SelectTrigger id="accentColor">
                    <SelectValue placeholder="Select accent color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teal">Teal (Default)</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                  <Label htmlFor="logoUpload">Logo</Label>
                  <Input id="logoUpload" type="file" />
                  <p className="text-xs text-muted-foreground">Recommended size: 200x50px, PNG or SVG.</p>
              </div>
            </CardContent>
              <CardFooter className="border-t px-6 py-4">
              <Button><Palette className="mr-2 h-4 w-4"/> Apply Appearance Changes</Button>
            </CardFooter>
          </Card>

          <Card id="content-management">
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>Manage categories and tags for your posts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold flex items-center"><Folder className="mr-2 h-5 w-5 text-primary"/>Categories</Label>
                <div className="mt-2 space-y-2">
                  {categories.map(cat => (
                    <div key={cat} className="flex items-center justify-between p-2 border rounded-md">
                      {editingCategory === cat ? (
                        <Input value={editCategoryValue} onChange={(e) => setEditCategoryValue(e.target.value)} className="flex-grow mr-2"/>
                      ) : (
                        <span>{cat}</span>
                      )}
                      <div className="space-x-1">
                         {editingCategory === cat ? (
                           <Button size="sm" variant="ghost" onClick={handleSaveEditCategory}><Save className="h-4 w-4"/></Button>
                         ) : (
                           <Button size="sm" variant="ghost" onClick={() => handleEditCategory(cat)}><Edit2 className="h-4 w-4"/></Button>
                         )}
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteCategory(cat)} className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4"/></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="New category name" />
                  <Button onClick={handleAddCategory}><PlusCircle className="mr-2 h-4 w-4"/>Add</Button>
                </div>
              </div>
              
              <div>
                <Label className="text-lg font-semibold flex items-center"><Tag className="mr-2 h-5 w-5 text-primary"/>Tags</Label>
                 <div className="mt-2 space-y-2">
                  {tags.map(tag => (
                    <div key={tag} className="flex items-center justify-between p-2 border rounded-md">
                       {editingTag === tag ? (
                        <Input value={editTagValue} onChange={(e) => setEditTagValue(e.target.value)} className="flex-grow mr-2"/>
                      ) : (
                        <span>{tag}</span>
                      )}
                      <div className="space-x-1">
                        {editingTag === tag ? (
                           <Button size="sm" variant="ghost" onClick={handleSaveEditTag}><Save className="h-4 w-4"/></Button>
                         ) : (
                           <Button size="sm" variant="ghost" onClick={() => handleEditTag(tag)}><Edit2 className="h-4 w-4"/></Button>
                         )}
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteTag(tag)} className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4"/></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="New tag name" />
                  <Button onClick={handleAddTag}><PlusCircle className="mr-2 h-4 w-4"/>Add</Button>
                </div>
              </div>
            </CardContent>
             <CardFooter className="border-t px-6 py-4">
              <Button><Save className="mr-2 h-4 w-4"/> Save Content Settings</Button>
            </CardFooter>
          </Card>

          <Card id="notifications">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Manage your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3">
                  <Label htmlFor="emailNewComment">Email on new comment</Label>
                  <Input type="checkbox" id="emailNewComment" className="h-5 w-5" defaultChecked />
              </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <Label htmlFor="emailNewSubscriber">Email on new subscriber</Label>
                  <Input type="checkbox" id="emailNewSubscriber" className="h-5 w-5" />
              </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <Label htmlFor="emailWeeklySummary">Weekly summary email</Label>
                  <Input type="checkbox" id="emailWeeklySummary" className="h-5 w-5" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button><Bell className="mr-2 h-4 w-4"/> Save Notification Preferences</Button>
            </CardFooter>
          </Card>

            <Card id="security">
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account security settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Enable Two-Factor Authentication</Button>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button><KeyRound className="mr-2 h-4 w-4"/> Update Security Settings</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
