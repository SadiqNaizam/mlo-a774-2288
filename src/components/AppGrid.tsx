import React from 'react';
import AppCard from '@/components/AppCard';

// Define the shape of data for a single app, which AppCard will consume.
interface AppData {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  rating: number; // A number from 0 to 5
}

interface AppGridProps {
  apps: AppData[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  console.log('AppGrid loaded');

  if (!apps || apps.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No applications to display.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4">
      {apps.map((app) => (
        <AppCard
          key={app.id}
          id={app.id}
          slug={app.slug}
          title={app.title}
          category={app.category}
          imageUrl={app.imageUrl}
          rating={app.rating}
        />
      ))}
    </div>
  );
};

export default AppGrid;