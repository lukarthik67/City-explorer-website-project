import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    // Reset form logic would go here
  };

  return (
    <Layout>
      <div className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Urban Atlas</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            We are a passionate team of travelers dedicated to helping you discover the world's most amazing cities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Urban Atlas, we believe that travel is the best way to learn about the world and ourselves. Our mission is to provide comprehensive, accurate, and inspiring guides for travelers of all kinds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a history buff, a foodie, or an adventure seeker, we have something for you. We carefully curate our content to ensure you have the best possible experience.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">Have a question or suggestion? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center py-6">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">123 Travel Lane<br/>San Francisco, CA 94103</p>
              </CardContent>
            </Card>
            <Card className="text-center py-6">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@urbanatlas.com<br/>support@urbanatlas.com</p>
              </CardContent>
            </Card>
            <Card className="text-center py-6">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567<br/>Mon-Fri, 9am-6pm</p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 md:p-10 shadow-lg border-muted">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us more..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full md:w-auto px-8">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
