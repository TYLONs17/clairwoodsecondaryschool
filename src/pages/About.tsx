import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { coreValues } from "@/data/schoolData";
import { Eye, Target, BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        description="Learn more about Clairwood Secondary School's history, vision, and commitment to education."
      />

      {/* School Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading">Our School</h2>
            <p className="text-lg text-muted-foreground">
              Clairwood Secondary School is a public secondary school located in Clairwood, 
              Durban, KwaZulu-Natal, offering education from Grade 8 to Grade 12. We are 
              dedicated to providing quality education that prepares our learners for success 
              in higher education and the workforce.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-gold" />
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20">
                    <Eye className="h-6 w-6 text-gold-dark" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a centre of educational excellence that produces well-rounded, 
                  responsible citizens who contribute positively to society. We envision 
                  learners who are academically competent, morally upright, and equipped 
                  with the skills needed for the 21st century.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-navy" />
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education in a safe and nurturing environment that 
                  promotes academic excellence, personal growth, and social responsibility. 
                  We commit to developing each learner's potential through dedicated teaching, 
                  innovative learning methods, and community engagement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-gold" />
              </div>
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-subheading mx-auto">
                These values guide everything we do at Clairwood Secondary School.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((value, index) => (
                <Card key={index} className="card-hover text-center border-0 shadow-md">
                  <CardContent className="pt-8 pb-8">
                    <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full gradient-navy text-primary-foreground font-serif font-bold text-xl">
                      {value.title.charAt(0)}
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Note */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Serving the Clairwood Community
            </h2>
            <p className="text-muted-foreground">
              Clairwood Secondary School has been serving the educational needs of the 
              Clairwood community and surrounding areas for many years. Our school 
              continues to uphold the tradition of academic excellence while adapting 
              to the changing needs of modern education.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
