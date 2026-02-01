import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { staffMembers } from "@/data/schoolData";
import { User } from "lucide-react";

interface StaffCardProps {
  name: string;
  role: string;
}

function StaffCard({ name, role }: StaffCardProps) {
  return (
    <Card className="card-hover border-0 shadow-md">
      <CardContent className="pt-6 text-center">
        <div className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <User className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="font-serif font-bold text-lg text-foreground mb-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}

export default function Staff() {
  return (
    <Layout>
      <PageHeader
        title="Our Staff"
        description="Meet the dedicated educators and support staff who make Clairwood Secondary School a place of learning excellence."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* School Management */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="section-heading">School Management</h2>
              <p className="section-subheading">
                Our leadership team is committed to guiding the school towards continued success.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {staffMembers.management.map((member, index) => (
                <StaffCard key={index} name={member.name} role={member.role} />
              ))}
            </div>
          </div>

          {/* Teaching Staff */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="section-heading">Teaching Staff</h2>
              <p className="section-subheading">
                Our qualified and experienced teachers are dedicated to learner success.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {staffMembers.teaching.map((member, index) => (
                <StaffCard key={index} name={member.name} role={member.role} />
              ))}
            </div>
          </div>

          {/* Support Staff */}
          <div>
            <div className="mb-8">
              <h2 className="section-heading">Support Staff</h2>
              <p className="section-subheading">
                Our support team ensures the smooth operation of the school.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {staffMembers.support.map((member, index) => (
                <StaffCard key={index} name={member.name} role={member.role} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
