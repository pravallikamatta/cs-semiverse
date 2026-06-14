import YearCard from "@/components/YearCard";
import { syllabusData } from "@/data/syllabus";

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Simplifying your journey.
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
