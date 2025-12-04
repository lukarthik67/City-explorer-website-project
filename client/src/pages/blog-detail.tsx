import { Layout } from "@/components/layout";
import { blogs, cities } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:id");
  const blogId = params?.id;
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) return <NotFound />;

  const city = cities.find(c => c.id === blog.cityId);

  return (
    <Layout>
      <article className="min-h-screen pb-20">
        {/* Header Image */}
        <div className="h-[50vh] w-full relative">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-8 left-8">
             <Link href={city ? `/city/${city.id}` : "/cities"}>
              <Button variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/40 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {city ? city.name : "Cities"}
              </Button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-xl p-8 md:p-12 border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" /> {blog.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-foreground">
              {blog.title}
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead text-xl text-foreground font-medium mb-6">
                {blog.excerpt}
              </p>
              {blog.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">Why I fell in love with this place</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>

            {city && (
              <div className="mt-12 p-6 bg-muted/30 rounded-xl border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-1">Inspired to visit {city.name}?</h4>
                  <p className="text-sm text-muted-foreground">Check out our complete guide.</p>
                </div>
                <Link href={`/city/${city.id}`}>
                  <Button>View City Guide</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}
