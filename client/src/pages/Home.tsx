import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router";

export default function NotesLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-50 via-amber-50/30 to-stone-100 relative overflow-hidden">
      {/* Animated background gradient that follows mouse */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 119, 6, 0.15), transparent 40%)`,
        }}
      />

      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />

      {/* Navigation */}
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-stone-50/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-900 to-stone-800 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-amber-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <span className="text-xl font-mono font-semibold text-stone-900 tracking-tight">
                Notely
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Pricing
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-stone-900 hover:bg-transparent"
              >
                Sign In
              </Button>
              <Button
                onClick={() => router("/sign-up")}
                className="bg-stone-900 text-amber-50 hover:bg-stone-800 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-900"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-20 z-40 bg-stone-50/95 backdrop-blur-xl md:hidden animate-fade-in">
            <div className="flex flex-col items-center justify-center p-8 space-y-8 h-[calc(100vh-5rem)]">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-stone-900 hover:text-amber-700 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-stone-900 hover:text-amber-700 transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-stone-900 hover:text-amber-700 transition-colors"
              >
                Pricing
              </a>
              <div className="flex flex-col w-full max-w-xs space-y-4 pt-8">
                <Button
                  variant="outline"
                  className="w-full text-lg h-12 border-stone-300"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router("/sign-up");
                  }}
                  className="w-full text-lg h-12 bg-stone-900 text-amber-50"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200/50 mb-8 animate-fade-in hover:bg-amber-100/70 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm text-amber-900 font-medium">
                Write with clarity and purpose
              </span>
            </Badge>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 mb-6 leading-tight tracking-tight animate-slide-up">
              <span className="italic">Your thoughts,</span>
              <br />
              <span className="bg-linear-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-transparent">
                beautifully organized
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              A timeless space for your ideas. Simple, elegant note-taking that
              helps you focus on what matters—your words.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
              <Button
                size="lg"
                className="group bg-stone-900 text-amber-50 hover:bg-stone-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto px-8"
              >
                <span className="flex items-center space-x-2">
                  <span>Start Writing</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50 w-full sm:w-auto px-8"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image/Preview */}
          <div className="mt-20 animate-slide-up animation-delay-600">
            <div className="relative max-w-5xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-stone-300/20 rounded-full blur-3xl" />

              {/* Main preview card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-stone-100 border-b border-stone-200 px-6 py-4 flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-stone-500 font-medium">
                      My Notes
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-stone-900">
                      Morning Reflections
                    </h3>
                    <span className="text-sm text-stone-400">
                      Today, 9:24 AM
                    </span>
                  </div>

                  <div className="space-y-4 text-stone-600 leading-relaxed">
                    <p>
                      There's something profound about the quiet of early
                      morning. The world hasn't yet imposed its demands, and
                      thoughts flow freely like water finding its course.
                    </p>
                    <p className="text-stone-500 italic">
                      The best ideas often come in these moments of stillness...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              Designed for deep work
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Every feature thoughtfully crafted to help you think clearly and
              write beautifully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
                title: "Distraction-Free",
                description:
                  "A minimal interface that disappears, leaving only you and your thoughts on the page.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
                title: "Rich Formatting",
                description:
                  "Express yourself with elegant typography, markdown support, and beautiful styling options.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                ),
                title: "Sync Everywhere",
                description:
                  "Your notes flow seamlessly across all your devices, always up to date, always accessible.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border-stone-200 hover:border-amber-200 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-stone-100 flex items-center justify-center mb-6 text-amber-800 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-stone-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 lg:px-8 border-t border-stone-200 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-900 to-stone-800 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-amber-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <span className="text-lg font-serif font-semibold text-stone-900">
                Notely
              </span>
            </div>

            <div className="text-sm text-stone-500">
              © 2026 Notely. Crafted with care for writers everywhere.
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
