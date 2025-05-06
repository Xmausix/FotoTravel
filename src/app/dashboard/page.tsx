import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, PlusCircle, Edit, Trash2, ArrowRight } from 'lucide-react';
import { OverviewChart } from '@/components/dashboard/overview-chart';

export const metadata: Metadata = {
  title: 'FotoTravel Dashboard - Overview',
  description: 'Overview of your travel blog content and statistics.',
};

const author = 'Alex Wanderer'; // Single author for all posts

const recentPosts = [
  { id: '1', title: 'Majestic Mountains of Patagonia', views: 1204, publishedDate: '2024-07-15', author },
  { id: '2', title: 'Exploring the Ancient Ruins of Rome', views: 987, publishedDate: '2024-07-10', author },
  { id: '3', title: 'Serene Beaches of Thailand', views: 853, publishedDate: '2024-07-05', author },
  { id: '4', title: 'Urban Jungle: Tokyo Adventures', views: 765, publishedDate: '2024-06-28', author },
];

export default function DashboardPage() {
  return (
    <div className="grid flex-1 items-start gap-4 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Posts</CardDescription>
              <CardTitle className="text-4xl">125</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+5 since last month</div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Views</CardDescription>
              <CardTitle className="text-4xl">78.6K</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+12% from last month</div>
            </CardContent>
              <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>New Subscribers</CardDescription>
              <CardTitle className="text-4xl">235</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+30 from last week</div>
            </CardContent>
              <CardFooter>
              <Progress value={30} aria-label="30% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Comments</CardDescription>
              <CardTitle className="text-4xl">573</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+10 pending approval</div>
            </CardContent>
              <CardFooter>
              <Progress value={60} aria-label="60% increase" />
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="overview">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/dashboard/posts/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Link>
              </Button>
            </div>
          </div>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Site Traffic Overview</CardTitle>
                <CardDescription>Monthly visitor statistics.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </Card>
          </TabsContent>
            <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>In-depth traffic and engagement metrics.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed analytics will be displayed here. (Placeholder)</p>
                  <Image src="https://picsum.photos/seed/analytics/800/400" alt="Analytics placeholder" width={800} height={400} className="mt-4 rounded-md shadow-sm" data-ai-hint="graph charts" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>
              Manage your latest articles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="font-medium">{post.title}</div>
                      <div className="text-xs text-muted-foreground">Published: {post.publishedDate}</div>
                    </TableCell>
                    <TableCell className="text-right">{post.views}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-center border-t p-4">
            <Button asChild size="sm" variant="ghost" className="gap-1">
              <Link href="/dashboard/posts">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
          <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild variant="outline">
              <Link href="/dashboard/posts/new">Create New Post</Link>
            </Button>
            <Button variant="outline">Moderate Comments</Button>
            <Button variant="outline">View Site Analytics</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
