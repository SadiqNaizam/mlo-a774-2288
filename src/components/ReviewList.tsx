import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

// Define the type for a single review
interface Review {
  id: number;
  userName: string;
  avatarUrl?: string;
  rating: number; // Rating out of 5
  reviewText: string;
  reviewDate: string;
}

// Mock data for demonstration purposes
const mockReviews: Review[] = [
  {
    id: 1,
    userName: "Alice Johnson",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    reviewText: "Absolutely fantastic app! It has streamlined my workflow and saved me hours of work. The UI is intuitive and clean. Highly recommended!",
    reviewDate: "July 15, 2024",
  },
  {
    id: 2,
    userName: "Bob Williams",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    rating: 4,
    reviewText: "A very solid application. Does everything it promises. I'm knocking off one star because the startup time can be a bit slow, but otherwise, it's great.",
    reviewDate: "July 12, 2024",
  },
  {
    id: 3,
    userName: "Charlie Brown",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    rating: 2,
    reviewText: "It's an okay app, but it's missing some key features that its competitors have. The user experience feels a bit dated. Hope to see improvements in future updates.",
    reviewDate: "July 5, 2024",
  },
];

// A small helper component to render the star rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewList: React.FC = () => {
  console.log("ReviewList loaded");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ratings & Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockReviews.map((review, index) => (
            <React.Fragment key={review.id}>
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatarUrl} alt={`@${review.userName}`} />
                  <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{review.userName}</p>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.reviewDate}
                  </p>
                  <p className="text-sm pt-2">
                    {review.reviewText}
                  </p>
                </div>
              </div>
              {index < mockReviews.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewList;