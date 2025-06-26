import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingInputProps {
  /**
   * The total number of stars.
   * @default 5
   */
  count?: number;
  /**
   * The initial rating value.
   * @default 0
   */
  initialRating?: number;
  /**
   * Callback function that is fired when the rating changes.
   * @param rating The new rating.
   */
  onRatingChange?: (rating: number) => void;
  /**
   * The size of the star icons.
   * @default 24 (h-6 w-6)
   */
  size?: number;
  /**
   * Optional additional class names.
   */
  className?: string;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  count = 5,
  initialRating = 0,
  onRatingChange,
  size = 24,
  className,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  console.log('StarRatingInput loaded');

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    const newRating = index;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const stars = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className={cn("flex items-center space-x-1", className)}
      onMouseLeave={handleMouseLeave}
      aria-label={`Rate this item. Current rating: ${rating} out of ${count} stars.`}
    >
      {stars.map((starIndex) => {
        const isFilled = (hoverRating || rating) >= starIndex;
        return (
          <button
            key={starIndex}
            type="button"
            className="focus:outline-none"
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onClick={() => handleClick(starIndex)}
            aria-label={`Set rating to ${starIndex} star${starIndex > 1 ? 's' : ''}`}
          >
            <Star
              size={size}
              className={cn(
                'cursor-pointer transition-colors duration-200',
                isFilled ? 'text-yellow-400' : 'text-gray-300'
              )}
              fill={isFilled ? 'currentColor' : 'none'}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRatingInput;