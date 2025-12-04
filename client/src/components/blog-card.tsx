import { Link } from "wouter";
import { Blog } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-muted/30 hover:bg-muted/50 group">
        <div className="aspect-[3/2] overflow-hidden rounded-t-lg">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" /> {blog.author}
            </span>
          </div>
          <h3 className="text-lg font-serif font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {blog.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
