import { Layout } from "@/components/layout";
import { BlogCard } from "@/components/blog-card";
import { cities, blogs } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Utensils, Plane, Train, Bus, ArrowLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function CityDetail() {
  const [, params] = useRoute("/city/:id");
  const cityId = params?.id;
  const city = cities.find(c => c.id === cityId);

  if (!city) return <NotFound />;

  const cityBlogs = blogs.filter(b => b.cityId === city.id);

  return (
    <Layout>
      {/* Banner */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img 
          src={city.bannerImage} 
          alt={city.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link href="/cities">
              <Button variant="link" className="text-white/80 hover:text-white pl-0 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cities
              </Button>
            </Link>
            <Badge className="mb-4 bg-primary text-white border-none">{city.category}</Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{city.name}</h1>
            <div className="flex items-center text-white/90 text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              {city.state}, {city.country}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-transparent border-b rounded-none h-auto p-0 gap-6">
                <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-3 text-base bg-transparent shadow-none">About</TabsTrigger>
                <TabsTrigger value="places" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-3 text-base bg-transparent shadow-none">Places to Visit</TabsTrigger>
                <TabsTrigger value="food" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-3 text-base bg-transparent shadow-none">Food & Cuisine</TabsTrigger>
                <TabsTrigger value="reach" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-3 text-base bg-transparent shadow-none">How to Reach</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">About {city.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {city.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-muted/30 p-6 rounded-xl border">
                      <div className="flex items-center gap-3 mb-3 text-primary">
                        <Calendar className="h-6 w-6" />
                        <h3 className="font-bold">Best Time to Visit</h3>
                      </div>
                      <p className="text-muted-foreground">{city.bestTime}</p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl border">
                      <div className="flex items-center gap-3 mb-3 text-primary">
                        <Clock className="h-6 w-6" />
                        <h3 className="font-bold">Ideal Duration</h3>
                      </div>
                      <p className="text-muted-foreground">{city.duration}</p>
                    </div>
                  </div>
                </div>

                {cityBlogs.length > 0 && (
                  <div className="pt-8 border-t">
                    <h3 className="text-2xl font-serif font-bold mb-6">Travel Stories from {city.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cityBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="places" className="animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-serif font-bold mb-6">Famous Tourist Places</h2>
                <div className="grid grid-cols-1 gap-8">
                  {city.places.map((place, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 bg-card border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img 
                          src={place.image} 
                          alt={place.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif font-bold mb-3">{place.name}</h3>
                        <p className="text-muted-foreground mb-4">{place.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-bold block text-foreground">Visiting Time</span>
                            <span className="text-muted-foreground">{place.visitingTime}</span>
                          </div>
                          <div>
                            <span className="font-bold block text-foreground">Entry Fee</span>
                            <span className="text-muted-foreground">{place.entryFee}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="food" className="animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-serif font-bold mb-6">Local Cuisine</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.food.map((dish, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                        <Utensils className="h-6 w-6" />
                      </div>
                      <span className="text-lg font-medium">{dish}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reach" className="animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-serif font-bold mb-6">How to Reach</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-6 bg-card border rounded-xl">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                      <Plane className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">By Air</h3>
                      <p className="text-muted-foreground">{city.reach.air}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-6 bg-card border rounded-xl">
                    <div className="p-3 bg-orange-100 text-orange-700 rounded-lg">
                      <Train className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">By Train</h3>
                      <p className="text-muted-foreground">{city.reach.train}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 bg-card border rounded-xl">
                    <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                      <Bus className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">By Road</h3>
                      <p className="text-muted-foreground">{city.reach.road}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-muted/30 p-6 rounded-xl border sticky top-24">
              <h3 className="text-xl font-serif font-bold mb-4">Plan Your Trip</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Interested in visiting {city.name}? Let us help you plan the perfect itinerary.
              </p>
              <Button className="w-full mb-3" size="lg">Book Hotels</Button>
              <Button variant="outline" className="w-full">Download Guide</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
