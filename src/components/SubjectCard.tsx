import { Book, FileText, HelpCircle, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SubjectCardProps {
  code: string;
  title: string;
  credits: number;
  category: string;
}

const SubjectCard = ({ code, title, credits, category }: SubjectCardProps) => {
  const categoryColors: Record<string, string> = {
    BS: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    PC: "bg-primary/10 text-primary",
    PE: "bg-secondary/10 text-secondary",
    ES: "bg-accent/10 text-accent",
    HSS: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    OE: "bg-green-500/10 text-green-700 dark:text-green-400",
  };

  return (
    <Card className="p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className={categoryColors[category] || ""}>
              {category}
            </Badge>
            <span className="text-sm text-muted-foreground">{code}</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{credits} credits</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" className="gap-2">
          <Book className="h-4 w-4" />
          Syllabus
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Notes
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          Important Qs
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          Resources
        </Button>
      </div>
    </Card>
  );
};

export default SubjectCard;
