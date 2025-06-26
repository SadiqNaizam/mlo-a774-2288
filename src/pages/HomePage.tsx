import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Components
import AppGrid from '@/components/AppGrid';
import AppCard from '@/components/AppCard';

// Shadcn UI Components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// Placeholder data for the page
const featuredApps = [
  { id: 'app-001', slug: 'fluent-notes', title: 'Fluent Notes', category: 'Productivity', imageUrl: 'https://placehold.co/600x400/0078D4/FFFFFF/png?text=Fluent+Notes', rating: 4.8 },
  { id: 'app-002', slug: 'pixel-forge', title: 'Pixel Forge', category: 'Photo & Video', imageUrl: 'https://placehold.co/600x400/E81123/FFFFFF/png?text=Pixel+Forge', rating: 4.6 },
  { id: 'app-003', slug: 'sound-wave', title: 'SoundWave', category: 'Music', imageUrl: 'https://placehold.co/600x400/7FBA00/FFFFFF/png?text=SoundWave', rating: 4.9 },
  { id: 'app-004', slug: 'code-editor-x', title: 'Code Editor X', category: 'Developer Tools', imageUrl: 'https://placehold.co/600x400/4B4B4B/FFFFFF/png?text=Code+Editor', rating: 4.7 },
  { id: 'app-005', slug: 'weather-now', title: 'Weather Now', category: 'Utilities', imageUrl: 'https://placehold.co/600x400/00BCF2/FFFFFF/png?text=Weather', rating: 4.4 },
];

const topGames = [
    { id: 'game-001', slug: 'galaxy-runner', title: 'Galaxy Runner', category: 'Action', imageUrl: 'https://placehold.co/300x300/6f42c1/ffffff/png?text=Galaxy', rating: 4.5 },
    { id: 'game-002', slug: 'mystic-quest', title: 'Mystic Quest', category: 'RPG', imageUrl: 'https://placehold.co/300x300/d63384/ffffff/png?text=Mystic', rating: 4.8 },
    { id: 'game-003', slug: 'speed-demons-3', title: 'Speed Demons 3', category: 'Racing', imageUrl: 'https://placehold.co/300x300/fd7e14/ffffff/png?text=Racing', rating: 4.2 },
    { id: 'game-004', slug: 'puzzle-mania', title: 'Puzzle Mania', category: 'Puzzle', imageUrl: 'https://placehold.co/300x300/20c997/ffffff/png?text=Puzzle', rating: 4.6 },
    { id: 'game-005', slug: 'cyber-arena', title: 'Cyber Arena', category: 'Shooter', imageUrl: 'https://placehold.co/300x300/198754/ffffff/png?text=Cyber', rating: 4.7 },
    { id: 'game-006', slug: 'kingdom-builders', title: 'Kingdom Builders', category: 'Strategy', imageUrl: 'https://placehold.co/300x300/ffc107/ffffff/png?text=Kingdom', rating: 4.4 },
];

const essentialApps = [
    { id: 'app-006', slug: 'secure-messenger', title: 'Secure Messenger', category: 'Social', imageUrl: 'https://placehold.co/300x300/0dcaf0/ffffff/png?text=Chat', rating: 4.9 },
    { id: 'app-007', slug: 'finance-tracker', title: 'Finance Tracker', category: 'Finance', imageUrl: 'https://placehold.co/300x300/0d6efd/ffffff/png?text=Finance', rating: 4.7 },
    { id: 'app-008', slug: 'daily-planner', title: 'Daily Planner', category: 'Productivity', imageUrl: 'https://placehold.co/300x300/6c757d/ffffff/png?text=Planner', rating: 4.5 },
    { id: 'app-009', slug: 'cloud-storage', title: 'Cloud Storage', category: 'Utilities', imageUrl: 'https://placehold.co/300x300/adb5bd/ffffff/png?text=Cloud', rating: 4.8 },
    { id: 'app-010', slug: 'video-stream', title: 'Video Stream', category: 'Entertainment', imageUrl: 'https://placehold.co/300x300/dc3545/ffffff/png?text=Video', rating: 4.3 },
    { id: 'app-011', slug: 'health-monitor', title: 'Health Monitor', category: 'Health & Fitness', imageUrl: 'https://placehold.co/300x300/198754/ffffff/png?text=Health', rating: 4.6 },
];


const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
            
            {/* Featured Apps Carousel */}
            <section aria-labelledby="featured-apps-heading">
                <h2 id="featured-apps-heading" className="text-2xl font-bold tracking-tight mb-4">Featured Apps</h2>
                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full"
                >
                  <CarouselContent>
                    {featuredApps.map((app) => (
                      <CarouselItem key={app.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          {/* We use AppCard directly here, ensuring props match its interface */}
                           <AppCard
                              appId={app.id}
                              imageUrl={app.imageUrl}
                              title={app.title}
                              category={app.category}
                              rating={app.rating}
                           />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </section>
            
            {/* Top Games Grid */}
            <section aria-labelledby="top-games-heading">
                <div className="flex items-center justify-between mb-4">
                    <h2 id="top-games-heading" className="text-2xl font-bold tracking-tight">Top Games</h2>
                    <Button asChild variant="link" className="text-primary">
                        <Link to="/app-category?category=games">
                            See all <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                {/* The AppGrid component handles the rendering of AppCards internally */}
                <AppGrid apps={topGames} />
            </section>

            {/* Essential Apps Grid */}
            <section aria-labelledby="essential-apps-heading">
                <div className="flex items-center justify-between mb-4">
                    <h2 id="essential-apps-heading" className="text-2xl font-bold tracking-tight">Essential Apps</h2>
                    <Button asChild variant="link" className="text-primary">
                        <Link to="/app-category">
                            See all <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <AppGrid apps={essentialApps} />
            </section>

          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;