import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { subjects } from "@/data/schoolData";
import { BookOpen, CheckCircle, GraduationCap } from "lucide-react";

export default function Academics() {
  return (
    <Layout>
      <PageHeader
        title="Academics"
        description="Discover our comprehensive curriculum aligned with the Department of Basic Education standards."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Grades Offered */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="section-heading">Grades Offered</h2>
              <p className="section-subheading mx-auto">
                We provide secondary education from Grade 8 through to Grade 12 (Matric).
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[8, 9, 10, 11, 12].map((grade) => (
                <Card key={grade} className="w-32 text-center border-0 shadow-md card-hover">
                  <CardContent className="pt-6 pb-6">
                    <div className="mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full gradient-navy">
                      <GraduationCap className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="font-serif font-bold text-lg text-primary">
                      Grade {grade}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum Overview */}
          <div className="mb-16 bg-muted rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">
                  National Curriculum Statement (CAPS)
                </h2>
                <p className="text-muted-foreground">
                  Our curriculum is fully aligned with the Curriculum and Assessment Policy Statement 
                  (CAPS) as prescribed by the Department of Basic Education. This ensures our learners 
                  are well-prepared for the National Senior Certificate examinations.
                </p>
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Compulsory Subjects */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-navy" />
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Badge className="bg-primary">Required</Badge>
                  Compulsory Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  All learners must complete these subjects as part of their curriculum.
                </p>
                <ul className="space-y-3">
                  {subjects.compulsory.map((subject, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground">{subject}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Elective Subjects */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-gold" />
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Badge variant="secondary">Choice</Badge>
                  Elective Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Learners choose additional subjects based on their interests and career goals.
                </p>
                <ul className="space-y-3">
                  {subjects.electives.map((subject, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{subject}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For more information about subject choices and career guidance, 
              please contact the school administration or speak with your class teacher.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
