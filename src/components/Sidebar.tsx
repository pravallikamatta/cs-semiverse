import { Home, BookOpen, Star, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { syllabusData } from "@/data/syllabus";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      <aside className={`fixed left-0 top-0 h-screen w-72 bg-card border-r z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-display font-semibold text-lg">Quick Navigation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-65px)]">
          <div className="p-4 space-y-6">
            <div>
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={onClose}
              >
                <Home className="h-5 w-5 text-primary" />
                <span className="font-medium">Home</span>
              </Link>
            </div>

            <div>
              <h3 className="px-3 mb-2 text-sm font-semibold text-muted-foreground">
                Years & Semesters
              </h3>
              <div className="space-y-2">
                {syllabusData.map((year) => (
                  <div key={year.id}>
                    <Link
                      to={`/year/${year.id}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                      onClick={onClose}
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm font-medium">{year.name}</span>
                    </Link>
                    <div className="ml-7 mt-1 space-y-1">
                      {year.semesters.map((sem) => (
                        <Link
                          key={sem.id}
                          to={`/year/${year.id}/semester/${sem.id}`}
                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={onClose}
                        >
                          {sem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="px-3 mb-2 text-sm font-semibold text-muted-foreground">
                Quick Links
              </h3>
              <div className="space-y-1">
                <Link
                  to="/saved"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={onClose}
                >
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Saved Resources</span>
                </Link>
                <button
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors w-full"
                  onClick={onClose}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">AI Assistant</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

export default Sidebar;
