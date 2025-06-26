import * as React from "react"
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the shape of a single media item
export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
}

// Define the props for the ScreenshotCarousel component
interface ScreenshotCarouselProps {
  items: MediaItem[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ items }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log('ScreenshotCarousel loaded');
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index);
  };

  if (!items || items.length === 0) {
    return (
        <Card className="w-full">
            <CardContent className="p-4 text-center text-muted-foreground">
                No screenshots or videos available.
            </CardContent>
        </Card>
    )
  }

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-0">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="object-contain w-full h-full bg-black rounded-md"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="object-contain w-full h-full bg-black rounded-md"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </AspectRatio>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      <div className="py-2 mt-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
            {items.map((item, index) => (
                <button
                    key={`thumb-${index}`}
                    onClick={() => handleThumbnailClick(index)}
                    className={cn(
                        "relative flex-shrink-0 w-28 h-16 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all",
                        index === current ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"
                    )}
                >
                    <img
                        src={item.thumbnail}
                        alt={`Thumbnail for ${item.alt}`}
                        className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                    )}
                </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ScreenshotCarousel;