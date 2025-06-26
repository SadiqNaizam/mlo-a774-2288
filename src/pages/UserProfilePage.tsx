import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Components
import AppGrid from '@/components/AppGrid';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Icons
import { User } from 'lucide-react';

// Placeholder data for the user's app library
const myApps = [
  {
    id: '1',
    slug: 'power-office',
    title: 'PowerOffice Suite',
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1582266255765-fa5bee119d25?w=500&q=80',
    rating: 4.5,
  },
  {
    id: '2',
    slug: 'pixel-painter',
    title: 'Pixel Painter',
    category: 'Creativity',
    imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&q=80',
    rating: 4.8,
  },
  {
    id: '3',
    slug: 'code-compiler-x',
    title: 'Code Compiler X',
    category: 'Developer Tools',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80',
    rating: 4.9,
  },
  {
    id: '4',
    slug: 'galaxy-raiders',
    title: 'Galaxy Raiders',
    category: 'Games',
    imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&q=80',
    rating: 4.2,
  },
];

const UserProfilePage = () => {
  console.log('UserProfilePage loaded');

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile save attempted. In a real app, this would submit the form.');
    // Here you would typically use a form library and handle submission state.
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 md:pl-64">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold tracking-tight mb-6">My Account</h1>
            
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="profile">Profile Settings</TabsTrigger>
                <TabsTrigger value="library">My Library</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your account details here. Click save when you're done.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileSave} className="space-y-8">
                        <div className="flex items-center gap-6">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                                <AvatarFallback><User className="h-10 w-10" /></AvatarFallback>
                            </Avatar>
                            <Button type="button" variant="outline">Change Avatar</Button>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="JohnDoe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <Button type="submit">Save Changes</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="library" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Acquired Apps</CardTitle>
                    <CardDescription>All the applications and games you have acquired are listed here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AppGrid apps={myApps} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;