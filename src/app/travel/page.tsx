import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Filter, CalendarDays, Tag, Layers } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';

const authorName = 'Alex Wanderer'; // Single author for all posts

// Placeholder data - replace with actual data fetching and filtering logic
const allPosts = [
  {
    id: '1',
    title: 'Majestic Mountains of Patagonia',
    date: '2024-07-15',
    author: authorName,
    tags: ['mountains', 'adventure', 'patagonia'],
    category: 'Nature',
    imageUrl: 'https://picsum.photos/seed/patagonia/600/400',
    imageHint: 'mountains landscape',
    slug: '/travel/majestic-mountains-of-patagonia',
  },
  {
    id: '2',
    title: 'Exploring the Ancient Ruins of Rome',
    date: '2024-07-10',
    author: authorName,
    tags: ['history', 'city', 'rome'],
    category: 'Culture',
    imageUrl: 'https://picsum.photos/seed/rome/600/400',
    imageHint: 'ancient ruins',
    slug: '/travel/exploring-the-ancient-ruins-of-rome',
  },
  {
    id: '3',
    title: 'Serene Beaches of Thailand',
    date: '2024-07-05',
    author: authorName,
    tags: ['beach', 'relaxation', 'thailand'],
    category: 'Travel',
    imageUrl: 'https://picsum.photos/seed/thailand/600/400',
    imageHint: 'beach sunset',
    slug: '/travel/serene-beaches-of-thailand',
  },
  {
    id: '4',
    title: 'Urban Jungle: Tokyo Adventures',
    date: '2024-06-28',
    author: authorName,
    tags: ['city', 'japan', 'urban'],
    category: 'City Break',
    imageUrl: 'https://picsum.photos/seed/tokyo/600/400',
    imageHint: 'city skyline',
    slug: '/travel/urban-jungle-tokyo-adventures',
  },
  {
    id: '5',
    title: 'Culinary Journey Through Vietnam',
    date: '2024-06-20',
    author: authorName,
    tags: ['food', 'asia', 'vietnam'],
    category: 'Food',
    imageUrl: 'https://picsum.photos/seed/vietnam/600/400',
    imageHint: 'asian food',
    slug: '/travel/culinary-journey-through-vietnam',
  },
  {
    id: '6',
    title: 'Safari in Serengeti',
    date: '2024-06-12',
    author: authorName,
    tags: ['wildlife', 'africa', 'safari'],
    category: 'Adventure',
    imageUrl: 'https://picsum.photos/seed/serengeti/600/400',
    imageHint: 'safari animals',
    slug: '/travel/safari-in-serengeti',
  },
];

const categories = ['All', 'Nature', 'Culture', 'Travel', 'City Break', 'Food', 'Adventure'];
const tags = ['All', 'mountains', 'adventure', 'patagonia', 'history', 'city', 'rome', 'beach', 'relaxation', 'thailand', 'japan', 'urban', 'food', 'asia', 'vietnam', 'wildlife', 'africa', 'safari'];


export default function TravelPage() {
  // TODO: Implement actual filtering and pagination logic
  const currentPage = 1;
  const postsPerPage = 6;
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const displayedPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            FotoTravel
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/travel" className="text-sm font-medium text-primary">
              Travel
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
             <Link href="/privacy-policy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Explore Our Travels
        </h1>

        {/* Filtering Section */}
        <section className="mb-12 p-6 bg-card rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-muted-foreground mb-1">Search by Keyword</label>
              <Input id="search" type="text" placeholder="e.g., Paris, Mountains..." className="w-full" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-muted-foreground mb-1 flex items-center"><Layers size={16} className="mr-2"/>Category</label>
              <Select>
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="tag" className="block text-sm font-medium text-muted-foreground mb-1 flex items-center"><Tag size={16} className="mr-2"/>Tag</label>
              <Select>
                <SelectTrigger id="tag" className="w-full">
                  <SelectValue placeholder="All Tags" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map(tag => <SelectItem key={tag} value={tag.toLowerCase()}>{tag}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1 flex items-center"><CalendarDays size={16} className="mr-2"/>Date</label>
              <Input id="date" type="month" className="w-full" />
            </div>
            <Button className="md:col-span-2 lg:col-span-1 lg:mt-0 mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Filter size={18} className="mr-2" /> Apply Filters
            </Button>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Link href={post.slug} className="block flex-grow">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{objectFit:"cover"}}
                    data-ai-hint={post.imageHint}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary hover:underline">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.date} by {post.author}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                     <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                </CardContent>
              </Link>
              <CardFooter>
                 <Button asChild variant="link" className="text-primary p-0">
                    <Link href={post.slug}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        {/* Pagination */}
        <section className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" disabled={currentPage === 1}>
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                className={currentPage === page ? 'bg-primary text-primary-foreground' : ''}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-foreground text-background">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FotoTravel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
