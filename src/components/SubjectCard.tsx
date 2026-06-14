import { Book, FileText, FolderOpen, HardDrive } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SubjectCardProps {
  code: string;
  title: string;
  credits: number;
  category: string;
  syllabus?: string[];
}

const SubjectCard = ({ code, title, credits, category, syllabus }: SubjectCardProps) => {
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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="gap-2">
              <Book className="h-4 w-4" />
              Syllabus
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                {code} • {credits} credits • {category}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-semibold mb-3 text-foreground">Course Syllabus</h4>
              {syllabus && syllabus.length > 0 ? (
                <ul className="space-y-2">
                  {syllabus.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Syllabus details coming soon...</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
        <Button size="sm" variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          PDFs
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <FolderOpen className="h-4 w-4" />
          Resources
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <HardDrive className="h-4 w-4" />
          Drive
        </Button>
      </div>
    </Card>
  );
};

export default SubjectCard;
