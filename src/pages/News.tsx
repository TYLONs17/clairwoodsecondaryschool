import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/schoolData";
import { Calendar } from "lucide-react";

const categories = ["All", "Announcements", "Events", "Examinations", "Achievements"];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = activeCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Achievements":
        return "bg-gold/20 text-gold-dark border-gold/30";
      case "Announcements":
        return "bg-primary/10 text-primary border-primary/20";
      case "Events":
        return "bg-green-100 text-green-800 border-green-200";
      case "Examinations":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <PageHeader
        title="News & Updates"
        description="Stay informed about the latest happenings at Clairwood Secondary School."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((news, index) => (
              <Card 
                key={news.id} 
                className="card-hover border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(news.category)}
                    >
                      {news.category}
                    </Badge>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(news.date).toLocaleDateString("en-ZA", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No news items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
