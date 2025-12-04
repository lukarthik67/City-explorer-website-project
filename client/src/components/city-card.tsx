import { Link } from "wouter";
import { City } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={city.cardImage} 
          alt={city.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white backdrop-blur-sm">
          {city.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">{city.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {city.state}, {city.country}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {city.shortDescription}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link href={`/city/${city.id}`}>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
            View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
