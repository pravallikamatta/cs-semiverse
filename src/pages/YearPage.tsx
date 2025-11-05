import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SemesterCard from "@/components/SemesterCard";
import { syllabusData } from "@/data/syllabus";

const YearPage = () => {
  const { year } = useParams();
  const yearData = syllabusData.find((y) => y.id === Number(year));

  if (!yearData) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Year not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-display font-bold mb-3">
            {yearData.name}
          </h1>
          <p className="text-muted-foreground">
            Select a semester to view subjects and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {yearData.semesters.map((semester, index) => (
            <div
              key={semester.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SemesterCard
                year={yearData.id}
                semId={semester.id}
                name={semester.name}
                subjectCount={semester.subjects.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearPage;
