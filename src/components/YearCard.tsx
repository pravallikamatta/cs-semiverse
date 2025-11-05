import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface YearCardProps {
  year: number;
  title: string;
}

const YearCard = ({ year, title }: YearCardProps) => {
  const yearColors = {
    1: "from-year-1/20 to-year-1/5 hover:shadow-year-1/20",
    2: "from-year-2/20 to-year-2/5 hover:shadow-year-2/20",
    3: "from-year-3/20 to-year-3/5 hover:shadow-year-3/20",
    4: "from-year-4/20 to-year-4/5 hover:shadow-year-4/20",
  };

  const iconColors = {
    1: "text-year-1",
    2: "text-year-2",
    3: "text-year-3",
    4: "text-year-4",
  };

  return (
    <Link to={`/year/${year}`}>
      <Card 
        className={`p-8 card-hover cursor-pointer bg-gradient-to-br ${yearColors[year as keyof typeof yearColors]} border-2`}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className={`p-4 rounded-full bg-card ${iconColors[year as keyof typeof iconColors]}`}>
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">
              Explore semester-wise resources
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default YearCard;
