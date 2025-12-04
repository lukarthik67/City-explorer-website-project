import { Layout } from "@/components/layout";
import { CityCard } from "@/components/city-card";
import { cities, categories } from "@/lib/data";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Cities() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  
  // Update state when URL params change (for back navigation support)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) setSelectedCategory(cat);
    const search = params.get("search");
    if (search) setSearchQuery(search);
  }, [location]);

  const filteredCities = cities.filter(city => {
    const matchesCategory = selectedCategory === "All" || city.category === selectedCategory;
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          city.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          city.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-4">Explore Destinations</h1>
          <p className="text-muted-foreground max-w-2xl">
            Find your next adventure among our curated list of world-class cities and hidden gems.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-6">
            <div>
              <h3 className="font-medium mb-3">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="City, State..." 
                  className="pl-9" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "ghost"}
                    className={`justify-start ${selectedCategory === cat ? "" : "text-muted-foreground"}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCities.length} cities
              </p>
            </div>

            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCities.map((city) => (
                  <CityCard key={city.id} city={city} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-medium mb-2">No cities found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter.</p>
                <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
