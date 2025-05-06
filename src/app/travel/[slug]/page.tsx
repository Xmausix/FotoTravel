// src/app/travel/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Share2, MapPin, CalendarDays, User, Layers, Tag, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LightboxImage } from '@/components/shared/lightbox-image';
import MapDisplayWrapper from '@/components/shared/MapDisplayWrapper';

const authorName = 'Alex Wanderer';

const getPostData = async (slug: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const posts = [
        {
            id: '1',
            slug: 'majestic-mountains-of-patagonia',
            title: 'Majestic Mountains of Patagonia',
            date: '2024-07-15',
            author: authorName,
            tags: ['mountains', 'adventure', 'patagonia', 'hiking', 'south america'],
            category: 'Nature',
            featuredImage: 'https://picsum.photos/seed/patagonia-featured/1200/675',
            featuredImageAlt: 'Stunning Patagonian landscape with mountains and a lake',
            excerpt: 'A journey into the wild heart of South America, exploring towering granite peaks, vast glaciers, and turquoise lakes in the sparsely populated region of Patagonia.',
            content: `
!Patagonia Landscape
*The breathtaking Fitz Roy massif at sunrise.*

## A Journey into the Wild Heart of South America

Patagonia, a sparsely populated region at the southern end of South America, shared by Argentina and Chile, is a land of dramatic landscapes, where towering granite peaks meet vast glaciers and turquoise lakes. My recent expedition to this remote corner of the world was nothing short of spectacular.

### The Trek to Fitz Roy

One of the highlights was the challenging yet rewarding trek to the base of Mount Fitz Roy. The trail winds through ancient lenga forests, crosses pristine rivers, and offers ever-changing vistas of the iconic massif. Reaching Laguna de los Tres at sunrise, as the first rays of light paint the granite spires in hues of orange and pink, is an experience that will forever be etched in my memory.

*   **Difficulty:** Challenging
*   **Duration:** 8-10 hours round trip
*   **Best time:** November to April

### Glaciers and Ice Fields

Patagonia is home to the Southern Patagonian Ice Field, the world's second-largest contiguous extrapolar ice field. Witnessing the colossal Perito Moreno Glacier calve massive icebergs into Lago Argentino is a raw display of nature's power. Boat trips and ice trekking excursions offer close-up encounters with these icy giants.

> "The silence of the Patagonian wilderness is broken only by the wind and the thunderous crash of calving glaciers. It's a humbling experience." - A fellow traveler

### Wildlife Encounters

Beyond the stunning landscapes, Patagonia boasts unique wildlife. Guanacos roam the steppes, condors soar overhead, and elusive pumas stalk their prey. Birdwatchers will be delighted by the variety of species, from Magellanic penguins to Austral parakeets.

## Planning Your Trip

*   **Getting there:** Fly into El Calafate (Argentina) or Punta Arenas (Chile).
*   **Accommodation:** Ranges from campsites and hostels to luxury lodges. Book well in advance, especially during peak season.
*   **Gear:** Be prepared for all types of weather. Layers, waterproof clothing, and sturdy hiking boots are essential.
      `,
            images: Array.from({ length: 12 }, (_, i) => ({
                id: `img-${i + 1}`,
                src: `https://picsum.photos/seed/patagonia-gallery${i+1}/800/600`,
                alt: `Patagonia gallery image ${i + 1}`,
                hint: `patagonia landscape ${i % 2 === 0 ? 'mountains' : 'lake'}`
            })),
            location: { name: 'El Chaltén, Argentina', lat: -49.3313, lng: -72.8895 },
        },
        {
            id: '2',
            slug: 'exploring-the-ancient-ruins-of-rome',
            title: 'Exploring the Ancient Ruins of Rome',
            date: '2024-07-10',
            author: authorName,
            tags: ['history', 'city', 'rome', 'italy', 'europe'],
            category: 'Culture',
            featuredImage: 'https://picsum.photos/seed/rome-featured/1200/675',
            featuredImageAlt: 'The Roman Colosseum under a blue sky',
            excerpt: 'Step back in time and explore the eternal city. Discover the Colosseum, Roman Forum, Pantheon, and immerse yourself in ancient history.',
            content: `
!Roman Forum
*A glimpse into the heart of ancient Rome.*

## Stepping Back in Time: The Eternal City

Rome, the city of seven hills, is a living museum. Every corner tells a story, every stone whispers tales of emperors, gladiators, and artists. My journey through its ancient ruins was an unforgettable immersion into history.
// ... (reszta treści jak wcześniej)
      `,
            images: Array.from({ length: 9 }, (_, i) => ({
                id: `img-rome-${i + 1}`,
                src: `https://picsum.photos/seed/rome-gallery${i+1}/800/600`,
                alt: `Rome gallery image ${i + 1}`,
                hint: `rome architecture ${i % 2 === 0 ? 'ruins' : 'landmark'}`
            })),
            location: { name: 'Rome, Italy', lat: 41.9028, lng: 12.4964 },
        },
        {
            id: '3',
            slug: 'serene-beaches-of-thailand',
            title: 'Serene Beaches of Thailand',
            date: '2024-07-05',
            author: authorName,
            tags: ['beach', 'relaxation', 'thailand', 'southeast asia', 'island hopping'],
            category: 'Travel',
            featuredImage: 'https://picsum.photos/seed/thailand-featured/1200/675',
            featuredImageAlt: 'Beautiful Thai beach with clear water and longtail boat',
            excerpt: 'Find paradise on Thailand\'s stunning beaches. Island hopping adventures, dramatic landscapes, and tranquil escapes await.',
            content: `
!Thai Beach
*Crystal clear waters and limestone karsts in Krabi.*

## Finding Paradise: Thailand's Coastal Gems
// ... (reszta treści jak wcześniej)
            `,
            images: Array.from({ length: 10 }, (_, i) => ({
                id: `img-thai-${i + 1}`,
                src: `https://picsum.photos/seed/thailand-gallery${i+1}/800/600`,
                alt: `Thailand beach gallery image ${i + 1}`,
                hint: `thailand beach ${i % 2 === 0 ? 'ocean' : 'sand'}`
            })),
            location: { name: 'Krabi, Thailand', lat: 8.0863, lng: 98.9063 },
        },
        {
            id: '4',
            slug: 'urban-jungle-tokyo-adventures',
            title: 'Urban Jungle: Tokyo Adventures',
            date: '2024-06-28',
            author: authorName,
            tags: ['city', 'japan', 'urban', 'culture', 'food'],
            category: 'City Break',
            featuredImage: 'https://picsum.photos/seed/tokyo-featured/1200/675',
            featuredImageAlt: 'Shibuya crossing in Tokyo at night',
            excerpt: 'Navigate the neon metropolis of Tokyo. Explore iconic landmarks, indulge in culinary delights, and immerse yourself in Japanese culture.',
            content: `
!Tokyo Skyline
*Shibuya Crossing, an iconic symbol of Tokyo's energy.*

## Navigating the Neon Metropolis: Tokyo
// ... (reszta treści jak wcześniej)
            `,
            images: Array.from({ length: 11 }, (_, i) => ({
                id: `img-tokyo-${i + 1}`,
                src: `https://picsum.photos/seed/tokyo-gallery${i+1}/800/600`,
                alt: `Tokyo gallery image ${i + 1}`,
                hint: `tokyo city ${i % 2 === 0 ? 'street' : 'skyline'}`
            })),
            location: { name: 'Tokyo, Japan', lat: 35.6895, lng: 139.6917 },
        },
    ];

    const post = posts.find(p => p.slug === slug);
    if (!post) return null;

    // Regex for image replacement - simplified for brevity, ensure your original logic is preserved
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    const placeholderImageLogic = (alt: string, src: string) => {
        const imgData = post.images.find(img => img.src.includes(src.split('/').pop()?.split('?')[0] || '')) || { hint: 'travel landscape' };
        return `<div class="my-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"><Image src="${src}" alt="${alt}" width="1200" height="600" class="w-full h-auto object-cover" data-ai-hint="${imgData.hint}" /></div>`;
    };


    const htmlContent = post.content
        .replace(/^(#{1,6})\s*(.*)/gm, (match, hashes, text) => `<h${hashes.length} class="font-bold ${hashes.length === 2 ? 'text-2xl mt-8 mb-4' : hashes.length === 3 ? 'text-xl mt-6 mb-3' : 'text-lg mt-4 mb-2'}">${text}</h${hashes.length}>`)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(imageRegex, (match, alt, src) => placeholderImageLogic(alt, src)) // Using the refined logic
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
        .replace(/^\s*-\s*(.*)/gm, '<li class="ml-6 list-disc mb-1">$1</li>')
        .replace(/(<li>.*<\/li>)+/gs, (match) => `<ul class="my-4 space-y-1">${match}</ul>`)
        .replace(/^>\s*(.*)/gm, '<blockquote class="border-l-4 border-primary pl-6 py-2 italic my-6 text-muted-foreground bg-muted/50 rounded-r-md">$1</blockquote>')
        .replace(/\n/g, '<br />')
        .replace(/<br \/>(\s*<br \/>)+/g, '<br /><br />')
        .replace(/<br \/>(<h[1-6]>|<ul|<blockquote|<div)/g, '$1')
        .replace(/(<\/h[1-6]>|<\/ul|<\/blockquote|<\/div>)<br \/>/g, '$1');

    return { ...post, htmlContent };
};


export default async function SinglePostPage({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center p-4 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-destructive">Post Not Found</h1>
                <p className="text-muted-foreground mt-4">Sorry, the post you are looking for does not exist.</p>
                <Button asChild className="mt-8">
                    <Link href="/travel" className="flex items-center">
                        <ArrowLeft size={18} className="mr-2" /> Back to Travel
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold text-primary md:ml-[100px]" // <<< ZMIANA TUTAJ
                    >
                        FotoTravel
                    </Link>
                    <nav className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                        <Link href="/travel" className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Travel
                        </Link>
                        <Link href="/#contact" className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Link href="/privacy-policy" className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main className="container py-8 sm:py-12 md:py-16">
                {/* Wrapped back button and main content in a div that is max-w-4xl and centered */}
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8"> {/* This div keeps the button from stretching full width if it were display:block */}
                        <Button asChild variant="outline" size="sm">
                            <Link href="/travel" className="flex items-center text-muted-foreground hover:text-foreground">
                                <ArrowLeft size={16} className="mr-2" />
                                Back to All Travel Posts
                            </Link>
                        </Button>
                    </div>

                    <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl"> {/* Removed mx-auto as parent is now handling centering */}
                        <header className="mb-8 border-b pb-8 border-border">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">{post.title}</h1>
                            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 text-sm text-muted-foreground">
                                <div className="flex items-center"><CalendarDays size={16} className="mr-2 text-primary" /> {post.date}</div>
                                <div className="flex items-center"><User size={16} className="mr-2 text-primary" /> By {post.author}</div>
                                <div className="flex items-center"><Layers size={16} className="mr-2 text-primary" /> {post.category}</div>
                            </div>
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs font-medium">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </header>

                        {post.featuredImage && (
                            <div className="mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.featuredImageAlt || post.title}
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <div
                            className="prose prose-base sm:prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed selection:bg-primary selection:text-primary-foreground"
                            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                        />
                    </article>

                    {(post.images && post.images.length > 0) && (
                        <Card className="mt-12 shadow-lg"> {/* Removed mx-auto */}
                            <CardHeader>
                                <CardTitle className="text-2xl sm:text-3xl flex items-center">
                                    <Layers size={24} className="sm:hidden mr-3 text-primary" />
                                    <Layers size={28} className="hidden sm:inline-block mr-3 text-primary" />
                                    Photo Gallery
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                                    {post.images.map((image, index) => (
                                        <LightboxImage
                                            key={image.id}
                                            src={image.src}
                                            alt={image.alt}
                                            images={post.images}
                                            currentIndex={index}
                                            data-ai-hint={image.hint}
                                            className="relative aspect-square w-full h-auto cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group border border-border"
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {post.location && (
                        <Card className="mt-12 shadow-lg"> {/* Removed mx-auto */}
                            <CardHeader>
                                <CardTitle className="text-2xl sm:text-3xl flex items-center">
                                    <MapPin size={24} className="sm:hidden mr-3 text-primary" />
                                    <MapPin size={28} className="hidden sm:inline-block mr-3 text-primary" />
                                    Location: {post.location.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 md:p-1">
                                <div className="aspect-video bg-muted rounded-lg md:rounded-md overflow-hidden">
                                    <MapDisplayWrapper
                                        lat={post.location.lat}
                                        lng={post.location.lng}
                                        zoom={12}
                                        markerText={post.location.name}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Separator className="my-12 sm:my-16" /> {/* Removed mx-auto, will span width of parent max-w-4xl div */}

                    <section className="text-center py-6 bg-muted/50 rounded-lg"> {/* Removed mx-auto */}
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Share this post</h3>
                        <div className="flex justify-center space-x-3 sm:space-x-4">
                            <Button variant="outline" size="icon" aria-label="Share on Facebook" className="rounded-full hover:bg-primary/10">
                                <Facebook size={20} className="text-primary" />
                            </Button>
                            <Button variant="outline" size="icon" aria-label="Share on Twitter" className="rounded-full hover:bg-primary/10">
                                <Twitter size={20} className="text-primary" />
                            </Button>
                            <Button variant="outline" size="icon" aria-label="Share on LinkedIn" className="rounded-full hover:bg-primary/10">
                                <Linkedin size={20} className="text-primary" />
                            </Button>
                            <Button variant="outline" size="icon" aria-label="Copy link" className="rounded-full hover:bg-primary/10">
                                <Share2 size={20} className="text-primary" />
                            </Button>
                        </div>
                    </section>
                </div> {/* End of max-w-4xl mx-auto wrapper */}
            </main>

            <footer className="py-8 sm:py-12 bg-foreground text-background">
                <div className="container text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} FotoTravel. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = [
        { slug: 'majestic-mountains-of-patagonia' },
        { slug: 'exploring-the-ancient-ruins-of-rome' },
        { slug: 'serene-beaches-of-thailand' },
        { slug: 'urban-jungle-tokyo-adventures' },
    ];
    return posts.map((post) => ({
        slug: post.slug,
    }));
}