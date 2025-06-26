import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import AppGrid from '@/components/AppGrid';

import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from '@/components/ui/separator';

// Placeholder data for the AppGrid component
const mockApps = [
  { id: '1', slug: 'task-master', title: 'Task Master Pro', category: 'Productivity', imageUrl: 'https://placehold.co/300x300/7756e8/ffffff?text=TaskMaster', rating: 4.5 },
  { id: '2', slug: 'pixel-perfect', title: 'Pixel Perfect', category: 'Design', imageUrl: 'https://placehold.co/300x300/e85695/ffffff?text=PixelPerfect', rating: 4.8 },
  { id: '3', slug: 'code-fusion', title: 'Code Fusion', category: 'Developer Tools', imageUrl: 'https://placehold.co/300x300/56e87f/ffffff?text=CodeFusion', rating: 4.9 },
  { id: '4', slug: 'galaxy-raiders', title: 'Galaxy Raiders', category: 'Games', imageUrl: 'https://placehold.co/300x300/e8a056/ffffff?text=Galaxy', rating: 4.2 },
  { id: '5', slug: 'finance-flow', title: 'Finance Flow', category: 'Finance', imageUrl: 'https://placehold.co/300x300/56c5e8/ffffff?text=Finance', rating: 4.6 },
  { id: '6', slug: 'weather-wave', title: 'Weather Wave', category: 'Utilities', imageUrl: 'https://placehold.co/300x300/5668e8/ffffff?text=Weather', rating: 4.3 },
  { id: '7', slug: 'sound-sculpt', title: 'Sound Sculpt', category: 'Music', imageUrl: 'https://placehold.co/300x300/e85656/ffffff?text=Sound', rating: 4.7 },
  { id: '8', slug: 'health-hub', title: 'Health Hub', category: 'Health & Fitness', imageUrl: 'https://placehold.co/300x300/65e856/ffffff?text=Health', rating: 4.4 },
  { id: '9', slug: 'recipe-rover', title: 'Recipe Rover', category: 'Food & Drink', imageUrl: 'https://placehold.co/300x300/e8d156/ffffff?text=Recipe', rating: 4.1 },
  { id: '10', slug: 'star-chart', title: 'Star Chart 3D', category: 'Education', imageUrl: 'https://placehold.co/300x300/56a5e8/ffffff?text=StarChart', rating: 4.9 },
  { id: '11', slug: 'doc-droid', title: 'Doc Droid', category: 'Productivity', imageUrl: 'https://placehold.co/300x300/b156e8/ffffff?text=DocDroid', rating: 4.0 },
  { id: '12', slug: 'secure-shell', title: 'Secure Shell', category: 'Utilities', imageUrl: 'https://placehold.co/300x300/8e56e8/ffffff?text=Secure', rating: 4.8 },
];

const AppCategoryPage = () => {
  console.log('AppCategoryPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Apps</h1>
            <p className="text-muted-foreground mb-6">Discover thousands of apps and games for your Windows device.</p>
            
            <Card className="mb-6">
              <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <h3 className="text-md font-semibold mr-4">Filters:</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="filter-productivity" />
                    <Label htmlFor="filter-productivity" className="font-normal">Productivity</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="filter-games" />
                    <Label htmlFor="filter-games" className="font-normal">Games</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="filter-free" />
                    <Label htmlFor="filter-free" className="font-normal">Free</Label>
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                        <SelectItem value="rating">Sort by: Rating</SelectItem>
                        <SelectItem value="newest">Sort by: Newest</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
              </CardContent>
            </Card>

            <AppGrid apps={mockApps} />

            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppCategoryPage;