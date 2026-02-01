import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { matricResults } from "@/data/schoolData";
import { TrendingUp, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function Performance() {
  const latestResult = matricResults[matricResults.length - 1];
  const previousResult = matricResults[matricResults.length - 2];
  const improvement = latestResult.passRate - previousResult.passRate;

  return (
    <Layout>
      <PageHeader
        title="Academic Performance"
        description="Track our school's academic achievements and matric results over the years."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-gold" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {latestResult.year} Pass Rate
                    </p>
                    <p className="text-4xl font-bold text-primary font-serif">
                      {latestResult.passRate}%
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center">
                    <Award className="h-7 w-7 text-gold-dark" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-2 gradient-navy" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Bachelor Passes
                    </p>
                    <p className="text-4xl font-bold text-primary font-serif">
                      {latestResult.bachelors}%
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-primary-foreground/80 mb-1">
                      Year-on-Year Improvement
                    </p>
                    <p className="text-4xl font-bold font-serif">
                      +{improvement}%
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <Card className="border-0 shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="font-serif">Matric Pass Rate Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={matricResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      domain={[0, 100]} 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Pass Rate"]}
                    />
                    <Bar dataKey="passRate" radius={[4, 4, 0, 0]}>
                      {matricResults.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === matricResults.length - 1 ? "hsl(var(--gold))" : "hsl(var(--primary))"} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Results Table */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif">Detailed Results by Year</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Pass Rate</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Bachelor</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Diploma</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Higher Cert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matricResults.map((result, index) => (
                      <tr 
                        key={result.year} 
                        className={`border-b border-border ${index === matricResults.length - 1 ? "bg-gold/10" : ""}`}
                      >
                        <td className="py-3 px-4 font-medium text-foreground">{result.year}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-semibold text-primary">{result.passRate}%</span>
                        </td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{result.bachelors}%</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{result.diploma}%</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{result.higherCert}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Summary Note */}
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-md inline-block">
              <CardContent className="pt-6 pb-6 px-8">
                <p className="text-muted-foreground">
                  <strong className="text-primary">Note:</strong> Our school has shown consistent 
                  improvement in matric results over the past five years, with a remarkable 
                  <strong className="text-gold"> 13% improvement</strong> from 2019 to 2024. 
                  We are committed to continuing this upward trend.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
