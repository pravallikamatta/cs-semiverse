import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubjectCard from "@/components/SubjectCard";
import { syllabusData } from "@/data/syllabus";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Search through all subjects
  const results = syllabusData.flatMap((year) =>
    year.semesters.flatMap((semester) =>
      semester.subjects
        .filter((subject) =>
          subject.title.toLowerCase().includes(query.toLowerCase()) ||
          subject.code.toLowerCase().includes(query.toLowerCase())
        )
        .map((subject) => ({
          ...subject,
          year: year.id,
          yearName: year.name,
          semester: semester.name,
          semId: semester.id,
        }))
    )
  );

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
            Search Results
          </h1>
          <p className="text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {results.map((subject, index) => (
              <div
                key={`${subject.code}-${subject.year}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-2 text-sm text-muted-foreground">
                  {subject.yearName} - {subject.semester}
                </div>
                <SubjectCard
                  code={subject.code}
                  title={subject.title}
                  credits={subject.credits}
                  category={subject.category}
                  syllabus={subject.syllabus}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No results found. Try searching for a different subject.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
