import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  images: string[]
  category: string
  tags: string[]
  date: string
  author: {
    name: string
    avatar: string
  }
  featured?: boolean
  views: number
}

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([
    {
      id: '1',
      title: 'Exploring the Hidden Beaches of Thailand',
      excerpt: 'Discover the secluded paradises away from the tourist crowds',
      content: `
        <p>Thailand's coastline stretches for thousands of kilometers, hiding countless pristine beaches that remain untouched by mass tourism. My journey to find these hidden gems took me through dense jungles, tiny fishing villages, and across crystal-clear waters.</p>
        
        <p>The journey began in Krabi, where I hired a local fisherman to take me to some of the lesser-known islands. We set off early in the morning, with the sun just beginning to paint the sky in shades of orange and pink. The boat ride itself was an adventure, cutting through the emerald waters as we passed towering limestone karsts that jutted dramatically from the sea.</p>
        
        <p>Our first stop was a tiny cove accessible only by boat. As we approached, I could see the pristine white sand beach framed by lush vegetation. There wasn't another soul in sight. The water was so clear that I could see fish swimming around even before I put on my snorkeling gear.</p>
        
        <p>What makes these hidden beaches so special isn't just their beauty, but the feeling of discovery. In a world where every destination seems to have been photographed and shared countless times, finding a place that feels truly untouched is increasingly rare.</p>
        
        <p>One of my most memorable experiences was camping overnight on a small island (with permission from local authorities). Falling asleep to the sound of gentle waves and waking up to a sunrise over the Andaman Sea was simply magical. I spent the day exploring the island's interior, finding small freshwater pools and an incredible diversity of birds and plants.</p>
        
        <p>For those seeking to find their own hidden beaches, my advice is to connect with locals. They know their homeland intimately and can guide you to places you'd never find in a guidebook. Always travel respectfully, taking nothing but photographs and leaving no trace of your visit.</p>
        
        <p>These pristine places remain unspoiled precisely because they're difficult to reach and not widely known. Let's keep them that way by traveling mindfully and sharing the responsibility of preservation with those who call these paradises home.</p>
      `,
      coverImage: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      category: 'Beach',
      tags: ['Thailand', 'Islands', 'Hidden Gems', 'Snorkeling'],
      date: '2023-05-15',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      featured: true,
      views: 1250
    },
    {
      id: '2',
      title: 'A Week in the Heart of Tokyo',
      excerpt: 'Navigating the world\'s most exciting metropolis like a local',
      content: `
        <p>Tokyo is a city of contrasts, where ancient traditions seamlessly blend with cutting-edge technology. My week-long adventure in this incredible metropolis was a whirlwind of sensory experiences that I'll never forget.</p>
        
        <p>I arrived at Narita Airport on a crisp autumn morning. After navigating the efficient train system, I found myself in Shinjuku, one of Tokyo's many city centers. The sheer scale of the place is overwhelming – towering skyscrapers, neon lights, and crowds of people moving with purpose.</p>
        
        <p>My accommodation was a traditional ryokan in a quieter neighborhood. Sleeping on tatami mats and bathing in communal onsen (hot springs) was an authentic cultural experience that provided a peaceful contrast to the busy days exploring the city.</p>
        
        <p>Food was undoubtedly one of the highlights of my trip. From humble street food stalls serving takoyaki (octopus balls) to a memorable splurge at a Michelin-starred sushi restaurant, every meal was a revelation. I even took a cooking class to learn how to make proper ramen from scratch.</p>
        
        <p>Tokyo's neighborhoods each have their own distinct personality. In Harajuku, I witnessed the famous street fashion scene, with young people dressed in styles that range from kawaii (cute) to punk. Akihabara was a paradise of gaming, anime, and electronics stores. And in Yanaka, one of the city's oldest districts, I strolled through quiet streets lined with traditional houses and temples that survived WWII.</p>
        
        <p>A day trip to nearby Kamakura provided a welcome break from urban intensity. The Great Buddha statue and numerous temples nestled among forested hills offered spiritual tranquility and historical depth.</p>
        
        <p>What surprised me most about Tokyo was finding moments of silence amidst the chaos. Japanese gardens like Shinjuku Gyoen and Rikugien are masterpieces of landscape design where one can sit quietly and contemplate nature, despite being in the heart of one of the world's largest cities.</p>
        
        <p>As my week drew to a close, I realized that I'd barely scratched the surface of what Tokyo has to offer. This city doesn't reveal itself easily to visitors, but the rewards for those who make the effort are immeasurable.</p>
      `,
      coverImage: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-landmark-161401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      category: 'City',
      tags: ['Japan', 'Tokyo', 'Urban', 'Food'],
      date: '2023-04-02',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      views: 982
    },
    {
      id: '3',
      title: 'Hiking the Inca Trail to Machu Picchu',
      excerpt: 'A challenging trek through history to one of the world\'s most spectacular sites',
      content: `
        <p>The ancient Inca Trail to Machu Picchu is one of the world's most famous hikes, combining stunning mountain scenery, lush cloud forests, and remarkable Incan ruins. My four-day journey along this historic path was both physically challenging and spiritually rewarding.</p>
        
        <p>Preparation was key for this adventure. Permits for the classic Inca Trail sell out months in advance, and altitude sickness is a real concern. I spent three days in Cusco (11,152 feet/3,399 meters) to acclimatize before beginning the trek. Even with this preparation, I felt the effects of the thin air during the more strenuous sections of the trail.</p>
        
        <p>Our group of eight hikers, led by a knowledgeable local guide, set off from Kilometer 82, the traditional starting point. The first day was relatively gentle, winding through farmland and offering views of distant snow-capped peaks. We visited our first archaeological site, Llactapata, which gave us a taste of what was to come.</p>
        
        <p>Day two presented the greatest physical challenge: Dead Woman's Pass. At 13,828 feet (4,215 meters), this is the highest point of the trail. The ascent was grueling, with countless stone steps seemingly leading endlessly upward. But the sense of achievement at the summit was incredible, as was the panoramic view of the surrounding Andes.</p>
        
        <p>The third day was my favorite, featuring diverse ecosystems and several fascinating ruins. We passed through cloud forest teeming with orchids, colorful birds, and the occasional glimpse of chinchillas. The Incan sites of Runkurakay, Sayacmarca, and Phuyupatamarca revealed the architectural sophistication of this ancient civilization. Each was strategically positioned to make the most of the dramatic landscape.</p>
        
        <p>Our final day began with a pre-dawn wake-up call. We hiked to Intipunku (the Sun Gate) to witness the sunrise over Machu Picchu – a truly magical moment as golden light gradually illuminated the ancient stone city. The classic postcard view lived up to expectations, but exploring the site itself was even more rewarding. Our guide explained the functions of different buildings and the advanced engineering techniques that have allowed Machu Picchu to withstand centuries of earthquakes.</p>
        
        <p>While Machu Picchu was undoubtedly the highlight, the journey itself was equally meaningful. Walking the same path that the Incas traveled centuries ago, sleeping under star-filled skies, and disconnecting from modern technology created a profound connection to both nature and history.</p>
        
        <p>For those considering this trek, I recommend booking well in advance, training for several months (focus on cardio and stair climbing), and approaching the journey with an open mind and heart. The Inca Trail is more than just a hike to an archaeological site – it's a transformative experience that will stay with you long after you've returned home.</p>
      `,
      coverImage: 'https://images.pexels.com/photos/2539407/pexels-photo-2539407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        'https://images.pexels.com/photos/2562782/pexels-photo-2562782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2539407/pexels-photo-2539407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      category: 'Mountain',
      tags: ['Peru', 'Hiking', 'Ancient Ruins', 'Adventure'],
      date: '2023-06-20',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      featured: true,
      views: 1578
    },
    {
      id: '4',
      title: 'Safari Adventure in Tanzania',
      excerpt: 'Witnessing the great migration in the Serengeti',
      content: `
        <p>There's something profoundly moving about witnessing wildlife in their natural habitat, and nowhere is this experience more powerful than during Tanzania's great migration. My week-long safari through the Serengeti and Ngorongoro Crater offered unforgettable encounters with some of Africa's most magnificent creatures.</p>
        
        <p>After landing at Kilimanjaro Airport, I met our guide and the five other travelers who would share this adventure. We bonded quickly, united by our excitement for the journey ahead. Our first night was spent at a comfortable lodge with views of Mount Meru, where we were briefed on safari etiquette: respect wildlife, maintain distance, and follow guide instructions at all times.</p>
        
        <p>The adventure began in earnest the next morning as we entered Tarangire National Park. Famous for its large elephant population and baobab trees, Tarangire provided a gentle introduction to safari life. By mid-afternoon, we'd already spotted elephants, giraffes, zebras, and a variety of antelopes. Our first lion sighting – a lioness lounging in the shade of an acacia tree – brought gasps from everyone in the vehicle.</p>
        
        <p>From Tarangire, we continued to the Ngorongoro Conservation Area. The Ngorongoro Crater is essentially a natural zoo – a collapsed volcanic caldera spanning about 100 square miles and containing an estimated 25,000 large animals. Descending into the crater at dawn, we were treated to a misty landscape that gradually revealed itself as the sun rose. Within hours, we'd spotted four of the "Big Five": lions, elephants, buffalo, and even the elusive black rhino. Only the leopard remained hidden from our view.</p>
        
        <p>The highlight of the trip was the Serengeti, where we spent three nights in mobile tented camps that moved with the migration. These were not ordinary tents – they included proper beds, en-suite bathrooms, and chef-prepared meals under the stars. But the real luxury was location, positioned to maximize wildlife viewing opportunities.</p>
        
        <p>We were fortunate to witness the migration crossing the Mara River – a spectacular and somewhat harrowing event as thousands of wildebeest and zebras braved crocodile-infested waters. Nature's drama played out before our eyes as some animals fell prey to crocodiles while others safely reached the opposite bank. It was a stark reminder of the harsh realities of survival in the wild.</p>
        
        <p>Game drives at dawn and dusk provided the best wildlife viewing. We observed lion prides with cubs, cheetahs scanning the horizon from termite mounds, and a leopard dragging its kill into a tree. Elephants moved in family groups, giraffe browsed acacia treetops, and hippos crowded river pools. The diversity and abundance of wildlife was simply staggering.</p>
        
        <p>Beyond the animals themselves, the Serengeti's landscapes were breathtaking – endless golden plains stretching to the horizon, punctuated by kopjes (rocky outcroppings) and the occasional acacia tree. Sunrises and sunsets painted the sky in spectacular colors that seemed almost too vivid to be real.</p>
        
        <p>For those planning their own safari adventure, I recommend visiting during the migration (roughly June to October, though timing varies with rainfall patterns). Choose a reputable tour operator with experienced guides – their knowledge and expertise make all the difference. And while photography is undoubtedly important, also take time to simply observe and be present in these extraordinary moments.</p>
      `,
      coverImage: 'https://images.pexels.com/photos/259397/pexels-photo-259397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/13713766/pexels-photo-13713766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4577792/pexels-photo-4577792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      category: 'Wildlife',
      tags: ['Africa', 'Safari', 'Wildlife', 'Nature'],
      date: '2023-07-12',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      views: 865
    },
    {
      id: '5',
      title: 'Culinary Tour of Northern Italy',
      excerpt: 'A gastronomic journey through Piedmont, Lombardy, and Veneto',
      content: `
        <p>Italy's cuisine is famously regional, with each area proudly maintaining its own distinctive culinary traditions. My two-week food-focused journey through Northern Italy was a deep dive into the gastronomic treasures of Piedmont, Lombardy, and Veneto – regions often overshadowed by their more famous southern counterparts but equally rich in culinary heritage.</p>
        
        <p>I began in Turin, Piedmont's elegant capital and birthplace of the Slow Food movement. The city's historic cafés, with their marble-topped tables and gilded interiors, are institutions in themselves. Here I indulged in bicerin (a layered coffee, chocolate, and cream drink) and giandujotto chocolates, specialties of the region. At the city's sprawling Porta Palazzo market, I joined a cooking class where we prepared traditional agnolotti del plin – tiny pinched pasta parcels filled with roasted meat and served simply with butter and sage.</p>
        
        <p>Venturing into the countryside, I spent several days in the Langhe region, famous for its wines, white truffles, and hazelnuts. Each village seemed to host a different sagra (food festival) celebrating local produce. A highlight was joining a truffle hunter and his dog at dawn, watching in amazement as the trained canine sniffed out the precious fungi from among the tangled tree roots. That evening, we shaved our finds over tajarin pasta – the intense aroma and flavor of fresh white truffle is impossible to describe but unforgettable once experienced.</p>
        
        <p>Wine was, of course, a crucial component of this journey. The rolling hills of Barolo and Barbaresco produce some of Italy's most prestigious wines from the Nebbiolo grape. I visited several family-run wineries, where generations of winemakers shared their philosophy while we tasted vintages in centuries-old cellars. Many of these experiences were followed by long, leisurely meals at the winemakers' tables – the perfect context for appreciating how the wines complement the local cuisine.</p>
        
        <p>Moving east to Lombardy, I explored Milan's distinctive food culture, which reflects the city's status as Italy's financial and fashion capital. More cosmopolitan than other Italian cities, Milan nevertheless maintains its culinary traditions. I savored golden saffron-infused risotto alla Milanese, crispy cotoletta (veal cutlet), and panettone at its source. A day trip to Lake Como combined breathtaking scenery with lakeside dining on freshwater fish prepared with northern Italian simplicity.</p>
        
        <p>My journey concluded in Veneto, beginning in Venice, where I learned to navigate the city's cicchetti bars like a local. These small wine bars serve Venetian tapas – tiny open-faced sandwiches, fried seafood, and meatballs – perfect with a glass of local Prosecco. I also took a boat to the island of Burano for its famous risotto with go (a lagoon fish), colored black with squid ink.</p>
        
        <p>From Venice, I traveled to Verona and then into Valpolicella wine country, where I developed an appreciation for Amarone – a rich, powerful wine made from partially dried grapes. The region's cuisine features robust flavors to stand up to these intense wines: horsemeat, hearty pasta with duck ragù, and Monte Veronese cheese.</p>
        
        <p>Throughout this journey, I was struck by how deeply food in Northern Italy is connected to place, season, and tradition. Every dish tells a story of the landscape, climate, and history of its origin. But equally important is how food brings people together – some of my most memorable experiences weren't just about what I ate, but about sharing meals with locals who were passionate about their regional specialties.</p>
        
        <p>For travelers planning their own culinary tour, I recommend moving slowly, focusing on depth rather than breadth. Spend time in markets, take cooking classes, and seek out family-run restaurants rather than tourist spots. And always save room for gelato – even in the north, it's an essential daily ritual.</p>
      `,
      coverImage: 'https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        'https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2378756/pexels-photo-2378756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      category: 'Food',
      tags: ['Italy', 'Cuisine', 'Wine', 'Culture'],
      date: '2023-09-05',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      featured: true,
      views: 1342
    }
  ])

  const messages = ref([
    {
      id: '1',
      name: 'Sarah Thompson',
      email: 'sarah@example.com',
      message: 'Hi there! I loved your article about the hidden beaches in Thailand. Could you recommend the best time of year to visit?',
      date: '2023-10-05',
      read: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      message: 'I\'m planning a trip to Peru next summer and would love some advice on preparing for the Inca Trail. Did you use any specific training program?',
      date: '2023-10-12',
      read: false
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      email: 'emma@example.com',
      message: 'Your photography is amazing! What camera equipment do you use for your travel photos?',
      date: '2023-10-18',
      read: false
    }
  ])

  // Getters
  const getFeaturedPosts = computed(() => {
    return posts.value.filter(post => post.featured)
  })

  const getCategories = computed(() => {
    const categories = new Set(posts.value.map(post => post.category))
    return Array.from(categories)
  })

  const getAllTags = computed(() => {
    const tagsSet = new Set()
    posts.value.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet) as string[]
  })

  const getPostsByCategory = (category: string) => {
    return posts.value.filter(post => post.category === category)
  }

  const getPostsByTag = (tag: string) => {
    return posts.value.filter(post => post.tags.includes(tag))
  }

  const getPost = (id: string) => {
    return posts.value.find(post => post.id === id)
  }

  // Actions
  function addPost(post: Omit<Post, 'id' | 'views'>) {
    const newPost = {
      ...post,
      id: (posts.value.length + 1).toString(),
      views: 0
    }
    posts.value.push(newPost)
    return newPost
  }

  function updatePost(id: string, updates: Partial<Post>) {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.value[index] = { ...posts.value[index], ...updates }
      return posts.value[index]
    }
    return null
  }

  function deletePost(id: string) {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.value.splice(index, 1)
      return true
    }
    return false
  }

  function incrementViews(id: string) {
    const post = posts.value.find(post => post.id === id)
    if (post) {
      post.views++
    }
  }

  function addMessage(message: Omit<typeof messages.value[0], 'id' | 'date' | 'read'>) {
    const newMessage = {
      ...message,
      id: (messages.value.length + 1).toString(),
      date: new Date().toISOString().split('T')[0],
      read: false
    }
    messages.value.push(newMessage)
    return newMessage
  }

  function markMessageAsRead(id: string) {
    const message = messages.value.find(msg => msg.id === id)
    if (message) {
      message.read = true
    }
  }

  return {
    posts,
    messages,
    getFeaturedPosts,
    getCategories,
    getAllTags,
    getPostsByCategory,
    getPostsByTag,
    getPost,
    addPost,
    updatePost,
    deletePost,
    incrementViews,
    addMessage,
    markMessageAsRead
  }
})