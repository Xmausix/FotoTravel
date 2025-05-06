import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { ContactForm } from '@/components/shared/contact-form';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { PopularTagsClient } from '@/components/shared/popular-tags-client';

const author = 'Alex Wanderer'; // Single author for all posts

// Placeholder data for posts - replace with actual data fetching
const posts = [
  {
    id: '1',
    title: 'Majestic Mountains of Patagonia',
    date: '2024-07-15',
    author,
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
    author,
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
    author,
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
    author,
    tags: ['city', 'japan', 'urban'],
    category: 'City Break',
    imageUrl: 'https://picsum.photos/seed/tokyo/600/400',
    imageHint: 'city skyline',
    slug: '/travel/urban-jungle-tokyo-adventures',
  },
];

const popularTags = ['mountains', 'city', 'beach', 'adventure', 'culture', 'history', 'food', 'nature'];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            FotoTravel
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/travel" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Travel
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
             <Link href="/privacy-policy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center text-background shadow-lg">
          <Image
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Inspirational travel background"
            fill
            style={{objectFit:"cover"}}
            className="absolute inset-0 z-0"
            data-ai-hint="travel landscape"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 p-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Journey through captivating stories and stunning photography.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/travel">
                Explore Trips <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Latest Travels Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Latest Travels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Link href={post.slug} className="block">
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
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {post.date} by {post.author}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
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
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Popular Tags
            </h2>
            <PopularTagsClient tags={popularTags} />
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Zainspiruj się podróżą!
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Dive into a world of exploration. Find your next destination, plan your trip, and create unforgettable memories.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link href="/travel">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-12 bg-foreground text-background">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">FotoTravel</h3>
            <p className="text-sm text-muted-foreground">
              Exploring the world, one photo at a time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/travel" className="text-sm hover:text-primary transition-colors">Travel</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
        <div className="container text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FotoTravel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
