import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface SemesterCardProps {
  year: number;
  semId: string;
  name: string;
  subjectCount: number;
}

const SemesterCard = ({ year, semId, name, subjectCount }: SemesterCardProps) => {
  return (
    <Link to={`/year/${year}/semester/${semId}`}>
      <Card className="p-6 card-hover cursor-pointer bg-card border-2 hover:border-primary/50">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-display font-semibold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {subjectCount} subjects
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SemesterCard;
