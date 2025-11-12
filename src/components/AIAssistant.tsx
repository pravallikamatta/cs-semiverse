import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, BookOpen, FileText, HelpCircle, Folder, Bot, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your CS-semHUB Assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuickReply = (query: string) => {
    setInput(query);
    handleSend(query);
  };

  const handleSend = (customInput?: string) => {
    const messageText = customInput || input;
    if (!messageText.trim()) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Show typing indicator
    const typingMessage: Message = {
      role: "assistant",
      content: "...",
      isTyping: true
    };
    setMessages((prev) => [...prev, typingMessage]);

    // Simulate AI response with typing animation
    setTimeout(() => {
      setMessages((prev) => prev.filter(msg => !msg.isTyping));
      
      const aiMessage: Message = {
        role: "assistant",
        content: `I can help you with "${messageText}". Please let me know which semester or subject you'd like to explore, and I'll guide you to the right resources.`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <>
      {!isOpen && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg gradient-primary hover:scale-110 transition-transform z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-2xl">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">CS-semHUB Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-9 w-9 text-primary-foreground hover:bg-primary-foreground/20 rounded-lg"
                title="Close chat"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4" ref={scrollRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3 shadow-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : message.isTyping
                        ? "bg-muted text-muted-foreground animate-pulse"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => handleQuickReply("Access syllabus")}
                  >
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-xs font-medium">Access syllabus 📘</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => handleQuickReply("View notes")}
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-xs font-medium">View notes 📝</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => handleQuickReply("Important questions")}
                  >
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span className="text-xs font-medium">Important questions ❓</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                    onClick={() => handleQuickReply("Resources & PDFs")}
                  >
                    <Folder className="h-5 w-5 text-primary" />
                    <span className="text-xs font-medium">Resources & PDFs 📂</span>
                  </Button>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border bg-background/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-background"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
