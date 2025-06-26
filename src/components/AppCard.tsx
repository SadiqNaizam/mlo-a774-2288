import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star } from 'lucide-react';

interface AppCardProps {
  /** A unique identifier for the app, for keying and future dynamic routing */
  appId: string;
  /** URL for the app's icon or cover image */
  imageUrl: string;
  /** The name of the application */
  title: string;
  /** The category the application belongs to (e.g., "Productivity") */
  category: string;
  /** The average user rating, from 0 to 5 */
  rating: number;
}

const AppCard: React.FC<AppCardProps> = ({ appId, imageUrl, title, category, rating }) => {
  console.log('AppCard loaded for:', title);

  return (
    <Link to="/app-detail" state={{ appId }} className="block group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
      <Card className="w-full h-full overflow-hidden transition-all duration-200 ease-in-out bg-secondary/30 hover:bg-secondary/60 hover:shadow-xl hover:-translate-y-1 flex flex-col">
        <CardContent className="p-0">
          <AspectRatio ratio={1}>
            <img
              src={imageUrl || 'https://via.placeholder.com/300'}
              alt={`Cover for ${title}`}
              className="object-cover w-full h-full rounded-t-lg"
            />
          </AspectRatio>
        </CardContent>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-base truncate text-card-foreground group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground flex-grow">
            {category}
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-sm">
            <span className="font-medium">{rating.toFixed(1)}</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AppCard;