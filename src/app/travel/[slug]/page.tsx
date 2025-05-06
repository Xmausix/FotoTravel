
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Share2, MapPin, CalendarDays, User, Layers, Tag } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LightboxImage } from '@/components/shared/lightbox-image';

const authorName = 'Alex Wanderer'; // Single author for all posts

// Placeholder data - replace with actual data fetching based on slug
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
      content: `
![Patagonia Landscape](https://picsum.photos/seed/patagonia-main/1200/600)
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
      content: `
![Roman Forum](https://picsum.photos/seed/rome-main/1200/600)
*A glimpse into the heart of ancient Rome.*

## Stepping Back in Time: The Eternal City

Rome, the city of seven hills, is a living museum. Every corner tells a story, every stone whispers tales of emperors, gladiators, and artists. My journey through its ancient ruins was an unforgettable immersion into history.

### The Colosseum and Roman Forum

No trip to Rome is complete without visiting the Colosseum. Standing within its ancient walls, it's easy to imagine the roar of the crowds and the clash of gladiatorial combat. Adjacent to it, the Roman Forum, once the center of Roman public life, offers a sprawling landscape of temples, basilicas, and triumphal arches.

*   **Tip:** Buy tickets online in advance to avoid long queues.
*   **Must-see:** Palatine Hill for panoramic views of the Forum.

### Pantheon's Architectural Marvel

The Pantheon, with its magnificent dome and oculus, remains an architectural marvel even after two millennia. The sheer scale and engineering prowess are awe-inspiring. It's a testament to Roman ingenuity.

> "Rome is the city of echoes, the city of illusions, and the city of yearning." - Giotto di Bondone

### Catacombs and Appian Way

For a different perspective, I explored the Catacombs of Callixtus, an underground burial complex offering a glimpse into early Christian history. A walk or bike ride along the ancient Appian Way, lined with Roman tombs and pine trees, provides a serene escape from the bustling city.

## Savoring Roman Life

*   **Food:** Indulge in authentic pasta, pizza, and gelato. Trastevere is a great neighborhood for traditional Roman cuisine.
*   **Culture:** Toss a coin into the Trevi Fountain, wander through Piazza Navona, and soak in the vibrant atmosphere.
*   **Getting around:** Rome is very walkable, but public transport (metro, buses) is also efficient.
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
      content: `
![Thai Beach](https://picsum.photos/seed/thailand-main/1200/600)
*Crystal clear waters and limestone karsts in Krabi.*

## Finding Paradise: Thailand's Coastal Gems

Thailand, the "Land of Smiles," is renowned for its stunning beaches, vibrant culture, and delicious food. My recent island-hopping adventure was a perfect blend of relaxation and exploration.

### Krabi's Dramatic Landscapes

Railay Beach in Krabi, accessible only by boat, is famous for its towering limestone cliffs, pristine sands, and turquoise waters. It's a haven for rock climbers and sun-seekers alike. Nearby, the Phi Phi Islands offer breathtaking snorkeling and diving opportunities.

*   **Activity:** Kayaking through mangrove forests and hidden lagoons.
*   **Excursion:** Take a "Four Islands" tour to explore Tup Island, Chicken Island, Poda Island, and Phra Nang Cave Beach.

### Koh Lanta's Tranquility

For a more laid-back vibe, Koh Lanta offers long stretches of uncrowded beaches, chilled-out bars, and a slower pace of life. It's an ideal destination for families and those seeking a peaceful escape.

> "The best kind of therapy is beach therapy." - Unknown

### Island Hopping Adventures

Thailand's Andaman Sea and Gulf Coast are dotted with countless islands, each with its unique charm. From the party scene of Koh Phangan to the diving paradise of Koh Tao and the luxurious resorts of Phuket, there's an island for every type of traveler.

## Essential Tips for Thai Beaches

*   **Best time to visit:** November to April for the Andaman coast (Krabi, Phuket, Phi Phi) and January to April for the Gulf coast (Koh Samui, Koh Phangan, Koh Tao).
*   **Respect local culture:** Dress modestly when visiting temples and be mindful of local customs.
*   **Stay hydrated:** Drink plenty of water, especially in the tropical heat.
*   **Sun protection:** Use sunscreen, wear a hat, and seek shade during peak sun hours.
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
      content: `
![Tokyo Skyline](https://picsum.photos/seed/tokyo-main/1200/600)
*Shibuya Crossing, an iconic symbol of Tokyo's energy.*

## Navigating the Neon Metropolis: Tokyo

Tokyo, a city where ancient traditions meet futuristic technology, is an exhilarating sensory overload. From serene temples to bustling markets and towering skyscrapers, Japan's capital offers an endless array of experiences.

### Iconic Landmarks and Neighborhoods

*   **Shibuya Crossing:** Experience the world's busiest pedestrian scramble.
*   **Shinjuku Gyoen National Garden:** Find tranquility amidst the urban sprawl in this stunning park.
*   **Tsukiji Outer Market:** Indulge in fresh seafood and local delicacies.
*   **Asakusa:** Explore Senso-ji Temple, Tokyo's oldest temple, and the traditional Nakamise-dori market street.
*   **Akihabara:** Dive into the heart of anime, manga, and electronics culture.

### Culinary Delights

Tokyo is a food lover's paradise. From Michelin-starred restaurants to humble ramen stalls and vibrant izakayas, the city's culinary scene is diverse and exceptional. Don't miss trying sushi, ramen, tempura, and takoyaki.

> "Tokyo is a symphony of sights and sounds, a city that never sleeps but always dreams." - A travel writer

### Cultural Immersion

*   **Sumo Wrestling:** Witness the power and tradition of Japan's national sport.
*   **Tea Ceremony:** Participate in a traditional Japanese tea ceremony for a moment of calm and reflection.
*   **Ghibli Museum:** For fans of Studio Ghibli, this whimsical museum in Mitaka is a must-visit (book tickets far in advance!).
*   **Harajuku:** Witness unique street style and visit quirky themed cafes.

## Tips for First-Time Visitors

*   **Japan Rail Pass:** Consider a JR Pass if you plan to travel extensively outside Tokyo.
*   **Pocket Wi-Fi or SIM Card:** Stay connected easily.
*   **Suica or Pasmo Card:** Essential for navigating public transport.
*   **Learn basic Japanese phrases:** While many people in tourist areas speak some English, knowing a few phrases is appreciated.
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
  if (!post) return null; // Or throw an error for a 404 page

  // Simulate markdown to HTML conversion
  // In a real app, use a library like 'marked' or 'react-markdown'
  const htmlContent = post.content
    .replace(/^(#{1,6})\s*(.*)/gm, (match, hashes, text) => `<h${hashes.length} class="font-bold ${hashes.length === 2 ? 'text-2xl mt-6 mb-3' : hashes.length === 3 ? 'text-xl mt-4 mb-2' : 'text-lg mt-3 mb-1'}">${text}</h${hashes.length}>`)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => `<div class="my-6 rounded-lg overflow-hidden shadow-lg"><Image src="${src}" alt="${alt}" width="1200" height="600" class="w-full h-auto object-cover" data-ai-hint="travel landscape" /></div>`)
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    .replace(/^\s*-\s*(.*)/gm, '<li class="ml-6 list-disc">$1</li>')
    .replace(/(<li>.*<\/li>)+/gs, (match) => `<ul class="my-4">${match}</ul>`)
    .replace(/^>\s*(.*)/gm, '<blockquote class="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">$1</blockquote>')
    .replace(/\n/g, '<br />')
    .replace(/<br \/>(\s*<br \/>)+/g, '<br /><br />') // Consolidate multiple line breaks
    .replace(/<br \/>(<h[1-6]>|<ul|<blockquote|<div)/g, '$1') // Remove br before block elements
    .replace(/(<\/h[1-6]>|<\/ul|<\/blockquote|<\/div>)<br \/>/g, '$1'); // Remove br after block elements


  return { ...post, htmlContent };
};


export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-destructive">Post Not Found</h1>
        <p className="text-muted-foreground mt-4">Sorry, the post you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/travel">Back to Travel</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            FotoTravel
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/travel" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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

      <main className="container py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center"><CalendarDays size={16} className="mr-2 text-primary" /> {post.date}</div>
              <div className="flex items-center"><User size={16} className="mr-2 text-primary" /> By {post.author}</div>
              <div className="flex items-center"><Layers size={16} className="mr-2 text-primary" /> {post.category}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs flex items-center">
                  <Tag size={12} className="mr-1 text-primary" />{tag}
                </Badge>
              ))}
            </div>
          </header>

          <Separator className="my-8" />
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed selection:bg-primary selection:text-primary-foreground"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          <Separator className="my-12" />

          {/* Image Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Photo Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {post.images.map((image, index) => (
                 <LightboxImage key={image.id} src={image.src} alt={image.alt} images={post.images} currentIndex={index} data-ai-hint={image.hint} />
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Map Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <MapPin size={28} className="mr-3 text-primary" /> Location: {post.location.name}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden">
                   <Image src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=600&center=lonlat:${post.location.lng},${post.location.lat}&zoom=10&marker=lonlat:${post.location.lng},${post.location.lat};color:%23ff0000;size:medium&apiKey=YOUR_GEOAPIFY_KEY`} 
                    alt={`Map of ${post.location.name}`}
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover"
                    data-ai-hint="map location"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Share Section */}
          <section className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Share this post</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" aria-label="Share on Facebook">
                <Facebook size={20} className="text-primary" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share on Twitter">
                <Twitter size={20} className="text-primary" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                <Linkedin size={20} className="text-primary" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Copy link">
                <Share2 size={20} className="text-primary" />
              </Button>
            </div>
          </section>
        </article>
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

// This function is needed for Next.js to know which slugs are valid
export async function generateStaticParams() {
  // In a real app, fetch all post slugs from your data source
  const posts = [
    { slug: 'majestic-mountains-of-patagonia' },
    { slug: 'exploring-the-ancient-ruins-of-rome' },
    { slug: 'serene-beaches-of-thailand' },
    { slug: 'urban-jungle-tokyo-adventures' },
    // Add other slugs here
  ];
 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
