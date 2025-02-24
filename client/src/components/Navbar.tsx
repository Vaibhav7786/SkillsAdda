import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const courses = [
  "Data Analytics",
  "Full Stack Development",
  "Advanced Excel with AI",
  "Digital Marketing",
  "Python",
  "Data Science"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();



  const handleCourseClick = (course: string) => {
    const courseSlug = course.toLowerCase().replace(/\s+/g, '-');
    setLocation(`/courses/${courseSlug}`);
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <span className="text-xl font-bold">Skills<span className="text-cyan-400">Adda</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground/80 hover:text-foreground transition inline-flex items-center">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {courses.map((course) => (
                  <DropdownMenuItem
                    key={course}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                    onClick={() => handleCourseClick(course)}
                  >
                    {course}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition">
              About
            </Link>
            <Link href="/blog" className="text-foreground/80 hover:text-foreground transition">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-cyan-400 font-mono">
            </span>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground/80 hover:text-foreground transition">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground/80 hover:text-foreground transition inline-flex items-center">
                  Courses <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {courses.map((course) => (
                    <DropdownMenuItem
                      key={course}
                      className="hover:text-cyan-400 transition-colors cursor-pointer"
                      onClick={() => handleCourseClick(course)}
                    >
                      {course}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about" className="text-foreground/80 hover:text-foreground transition">
                About
              </Link>
              <Link href="/reviews" className="text-foreground/80 hover:text-foreground transition">
                Reviews
              </Link>
              <Link href="/team" className="text-foreground/80 hover:text-foreground transition">
                Team
              </Link>
              <Link href="/blog" className="text-foreground/80 hover:text-foreground transition">
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}