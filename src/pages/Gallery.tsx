import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { galleryCategories, galleryImages } from "@/data/schoolData";
import { Image, Info } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("events");

  const filteredImages = galleryImages.filter(
    (img) => img.category === activeCategory
  );

  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        description="Explore moments captured from our school events, sports activities, and cultural celebrations."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="card-hover border-0 shadow-md overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-muted relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <Image className="h-12 w-12 mb-2 opacity-50" />
                    <span className="text-xs opacity-50">Photo Placeholder</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-sm text-center px-4">
                      {image.title}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-medium text-foreground text-sm line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{image.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Image className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                No images available in this category yet.
              </p>
            </div>
          )}

          {/* Privacy Notice */}
          <Card className="border-0 shadow-md bg-muted">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Privacy Notice:</strong> Learner 
                  images are shared in accordance with school policies and permissions. 
                  If you would like an image removed, please contact the school 
                  administration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
