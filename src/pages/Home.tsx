import YearCard from "@/components/YearCard";
import { syllabusData } from "@/data/syllabus";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Welcome to CS-semHUB
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your Complete CSE Resource Hub — Access syllabus, notes, important questions, and resources for all semesters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {syllabusData.map((year) => (
            <div
              key={year.id}
              className="animate-fade-in"
              style={{ animationDelay: `${year.id * 0.1}s` }}
            >
              <YearCard year={year.id} title={year.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
