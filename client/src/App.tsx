
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy } from 'react';
import { queryClient } from "./lib/queryClient";

// Lazy load components
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Team = lazy(() => import("@/pages/Team"));
const Blog = lazy(() => import("@/pages/Blog"));
const Reviews = lazy(() => import("@/pages/Reviews"));
const Courses = lazy(() => import("@/pages/Courses"));
const Course = lazy(() => import("@/pages/Course"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-background" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/courses" component={Courses} />
        <Route path="/courses/:id" component={Course} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
