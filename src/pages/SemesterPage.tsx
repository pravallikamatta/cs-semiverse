import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubjectCard from "@/components/SubjectCard";
import { syllabusData } from "@/data/syllabus";

const SemesterPage = () => {
  const { year, semId } = useParams();
  const yearData = syllabusData.find((y) => y.id === Number(year));
  const semesterData = yearData?.semesters.find((s) => s.id === semId);

  if (!yearData || !semesterData) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Semester not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Link to={`/year/${year}`}>
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to {yearData.name}
          </Button>
        </Link>

        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-display font-bold mb-3">
            {yearData.name} - {semesterData.name}
          </h1>
          <p className="text-muted-foreground">
            {semesterData.subjects.length} subjects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {semesterData.subjects.map((subject, index) => (
            <div
              key={subject.code}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <SubjectCard
                code={subject.code}
                title={subject.title}
                credits={subject.credits}
                category={subject.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SemesterPage;
