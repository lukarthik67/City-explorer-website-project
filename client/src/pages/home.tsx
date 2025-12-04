import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CityCard } from "@/components/city-card";
import { cities, categories } from "@/lib/data";
import { Link, useLocation } from "wouter";
import { Search, ArrowRight, Globe, Map } from "lucide-react";
import heroImage from "@assets/generated_images/modern_city_skyline_at_twilight_for_travel_website_hero.png";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/cities?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredCities = cities.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-in fade-in zoom-in duration-1000">
          <Badge className="mb-6 bg-white/20 hover:bg-white/30 backdrop-blur-md border-none text-white px-4 py-1.5 text-sm font-medium rounded-full">
            Explore the Unseen
          </Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
            Discover cities, <br/> guides & stories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Explore the best places to visit, local food and travel tips curated for every traveler.
          </p>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-2 rounded-full border border-white/20 shadow-2xl">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
                <input 
                  type="text" 
                  placeholder="Where do you want to go?" 
                  className="w-full bg-transparent border-none text-white placeholder:text-white/70 pl-12 pr-4 py-3 focus:outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="rounded-full px-8 font-medium bg-primary hover:bg-primary/90 border-none">
                Search
              </Button>
            </form>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 opacity-90">
            <span className="text-sm font-medium text-white/80 mr-2 pt-1.5">Popular:</span>
            {categories.slice(1, 5).map((cat) => (
              <Link key={cat} href={`/cities?category=${cat}`} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm backdrop-blur-sm text-white">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Featured Cities</h2>
              <p className="text-muted-foreground">Handpicked destinations and travel guides for you.</p>
            </div>
            <Link href="/cities">
              <Button variant="ghost" className="group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(1).map((cat, idx) => (
              <Link key={cat} href={`/cities?category=${cat}`} className="group block p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all text-center border border-transparent hover:border-primary/20">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {idx % 2 === 0 ? <Globe className="h-6 w-6" /> : <Map className="h-6 w-6" />}
                </div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
