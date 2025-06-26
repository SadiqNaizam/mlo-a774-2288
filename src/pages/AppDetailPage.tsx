import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import ScreenshotCarousel, { MediaItem } from '@/components/ScreenshotCarousel';
import ReviewList from '@/components/ReviewList';
import StarRatingInput from '@/components/StarRatingInput';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Lucide Icons
import { Star, Laptop, Cpu, MemoryStick, HardDrive } from 'lucide-react';

// Placeholder data for the page
const appData = {
  name: 'PixelForge Pro',
  developer: 'Creative Minds Inc.',
  icon: 'https://placehold.co/100x100/1e293b/ffffff?text=PFP',
  description: "PixelForge Pro is a powerful and intuitive digital art studio for creatives of all levels. Whether you're a professional illustrator, a hobbyist painter, or a graphic designer, PixelForge Pro provides a comprehensive suite of tools to bring your ideas to life. With a highly customizable interface, advanced layer management, and a vast library of brushes, you can create stunning artwork with ease. The app supports pressure-sensitive styluses, cloud synchronization, and exporting to all major file formats.",
  rating: 4.5,
  reviewCount: 1258,
  category: 'Creativity',
};

const mediaItems: MediaItem[] = [
  { type: 'image', src: 'https://placehold.co/1280x720/2d3748/ffffff?text=App+Screenshot+1', thumbnail: 'https://placehold.co/224x126/2d3748/ffffff?text=Thumb+1', alt: 'Main dashboard view' },
  { type: 'image', src: 'https://placehold.co/1280x720/4a5568/ffffff?text=App+Screenshot+2', thumbnail: 'https://placehold.co/224x126/4a5568/ffffff?text=Thumb+2', alt: 'Editing tools showcase' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://placehold.co/224x126/718096/ffffff?text=Video+Thumb', alt: 'Promotional video' },
  { type: 'image', src: 'https://placehold.co/1280x720/a0aec0/ffffff?text=App+Screenshot+3', thumbnail: 'https://placehold.co/224x126/a0aec0/ffffff?text=Thumb+3', alt: 'Layer management interface' },
];

const AppDetailPage = () => {
  console.log('AppDetailPage loaded');
  const { toast } = useToast();

  const handleGetApp = () => {
    toast({
      title: "Success!",
      description: `${appData.name} has been added to your library.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* --- App Header Section --- */}
            <section className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border">
                <AvatarImage src={appData.icon} alt={`${appData.name} icon`} />
                <AvatarFallback>{appData.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{appData.name}</h1>
                <Link to="/developer/creative-minds" className="text-lg text-primary hover:underline">{appData.developer}</Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{appData.category}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{appData.rating} ({appData.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge>Productivity</Badge>
                  <Badge variant="secondary">Art & Design</Badge>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleGetApp}>
                    Get
                  </Button>
                </div>
              </div>
            </section>

            {/* --- Screenshot Carousel Section --- */}
            <section className="mb-8">
              <ScreenshotCarousel items={mediaItems} />
            </section>

            {/* --- Description & Tabs Section --- */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground mb-8">{appData.description}</p>
              
              <Tabs defaultValue="reviews" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="requirements">System Requirements</TabsTrigger>
                  <TabsTrigger value="reviews">Ratings & Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="requirements" className="py-6">
                   <Card>
                    <CardHeader><CardTitle>System Requirements</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-4">
                          <h3 className="font-semibold text-base">Minimum</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2"><Laptop className="w-4 h-4"/><span>OS: Windows 10 (64-bit)</span></li>
                            <li className="flex items-center gap-2"><Cpu className="w-4 h-4"/><span>Processor: Intel Core i3 / AMD Ryzen 3</span></li>
                            <li className="flex items-center gap-2"><MemoryStick className="w-4 h-4"/><span>Memory: 8 GB RAM</span></li>
                            <li className="flex items-center gap-2"><HardDrive className="w-4 h-4"/><span>Storage: 5 GB available space</span></li>
                          </ul>
                      </div>
                       <div className="space-y-4">
                          <h3 className="font-semibold text-base">Recommended</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2"><Laptop className="w-4 h-4"/><span>OS: Windows 11 (64-bit)</span></li>
                            <li className="flex items-center gap-2"><Cpu className="w-4 h-4"/><span>Processor: Intel Core i7 / AMD Ryzen 7</span></li>
                            <li className="flex items-center gap-2"><MemoryStick className="w-4 h-4"/><span>Memory: 16 GB RAM</span></li>
                            <li className="flex items-center gap-2"><HardDrive className="w-4 h-4"/><span>Storage: 10 GB SSD space</span></li>
                          </ul>
                      </div>
                    </CardContent>
                   </Card>
                </TabsContent>
                <TabsContent value="reviews" className="py-6 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Write a Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="mb-2 font-medium">Your Rating</p>
                        <StarRatingInput onRatingChange={(rating) => console.log('New rating:', rating)} />
                      </div>
                      <div>
                        <Textarea placeholder="Tell others what you think about this app..." rows={4} />
                      </div>
                      <Button>Submit Review</Button>
                    </CardContent>
                  </Card>
                  <ReviewList />
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppDetailPage;