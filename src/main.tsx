import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar, SocialRail, BackToTop } from "./components/navbar";
import {
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Research,
  Experience,
  Activity,
  Contact,
} from "./components/sections";
import "./styles.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/25 selection:text-accent">
        <Navbar />
        <SocialRail />
        <BackToTop />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Research />
          <Experience />
          <Activity />
          <Contact />
        </main>
        <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Divagar S. All rights reserved.
        </footer>
      </div>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
