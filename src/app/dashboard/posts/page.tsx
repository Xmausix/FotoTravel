import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, PlusCircle, Search, MoreHorizontal, Edit, Trash2, FileUp, ListFilter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"; // Assuming useToast is client-side only

const author = 'Alex Wanderer'; // Single author for all posts

// Placeholder data for posts
const posts = [
  { id: '1', title: 'Majestic Mountains of Patagonia', status: 'Published', author, category: 'Nature', views: 1204, createdDate: '2024-07-10', publishedDate: '2024-07-15' },
  { id: '2', title: 'Exploring the Ancient Ruins of Rome', status: 'Published', author, category: 'Culture', views: 987, createdDate: '2024-07-05', publishedDate: '2024-07-10' },
  { id: '3', title: 'Serene Beaches of Thailand', status: 'Draft', author, category: 'Travel', views: 0, createdDate: '2024-07-01', publishedDate: null },
  { id: '4', title: 'Urban Jungle: Tokyo Adventures', status: 'Published', author, category: 'City Break', views: 765, createdDate: '2024-06-20', publishedDate: '2024-06-28' },
  { id: '5', title: 'Culinary Journey Through Vietnam', status: 'Scheduled', author, category: 'Food', views: 0, createdDate: '2024-06-15', publishedDate: '2024-08-01' },
  { id: '6', title: 'Safari in Serengeti', status: 'Published', author, category: 'Adventure', views: 540, createdDate: '2024-06-01', publishedDate: '2024-06-12' },
];

// Client component for handling export toast
function ExportButton() {
  const { toast } = useToast();

  const handleExport = () => {
    // Simulate export functionality
    console.log("Exporting posts...");
    toast({
      title: "Export Initiated",
      description: "Your posts are being exported. This is a placeholder.",
    });
  };

  return (
    <Button size="sm" variant="outline" className="h-8 gap-1" onClick={handleExport}>
      <FileUp className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Export
      </span>
    </Button>
  );
}


export default function DashboardPostsPage() {
  return (
    <main className="flex-1 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Category</DropdownMenuItem>
                <DropdownMenuItem>Date Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ExportButton />
            <Button asChild size="sm" className="h-8 gap-1">
              <Link href="/dashboard/posts/new">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Post
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>
                Manage all your blog posts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead className="hidden md:table-cell">Views</TableHead>
                    <TableHead className="hidden md:table-cell">Created At</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.status === 'Published' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' :
                          post.status === 'Draft' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100' :
                          post.status === 'Scheduled' ? 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100'
                        }`}>
                          {post.status}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{post.category}</TableCell>
                      <TableCell className="hidden md:table-cell text-right">{post.views}</TableCell>
                      <TableCell className="hidden md:table-cell">{post.createdDate}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
