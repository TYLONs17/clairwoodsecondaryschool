import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("gradient-navy py-16 md:py-20", className)}>
      <div className="container">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
