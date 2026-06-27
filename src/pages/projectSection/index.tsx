"use client";

import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { Button } from "@/components/ui/button";


import {
  Code,
  ExternalLink,
  Github,
  ShoppingCart,
  Heart,
  BookOpen,
  Hotel,
  Laptop,
} from "lucide-react";
import { toast } from "sonner";
const projects = [
  {
    id: 1,
    title: "Parking Booking Service",
    description:
    "A full-stack smart parking reservation platform that enables users to search, reserve, and manage parking spaces in real time through a modern web application.",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    technologies: [
       "React",
    "Spring Boot",
    "Java",
    "MySQL",
    "REST APIs",
    "JWT",
    "Axios",
    "Bootstrap",
    "Git"
    ],
    features: [
       "Secure user authentication and authorization",
    "Real-time parking slot availability",
    "Online parking reservation management",
    "Booking history and cancellation",
    "Responsive dashboard for users and administrators",
    "RESTful API integration",
    "Database-driven parking management"
    ],
    stack: "Full-stack",
    githubLink: "https://github.com/ashanrupasingha/Booking_parking-service.git",
  },
 {
  id: 2,
  title: "Donation Management System",
  description:
    "A full-stack charity and donation management platform that enables users to register, browse donation campaigns, donate products, and manage charitable activities through a secure and responsive web application.",

  icon: Heart,

  color: "from-red-500 to-pink-500",

  technologies: [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "JWT",
    "REST APIs",
    "JavaScript",
    "Axios",
    "Bootstrap",
    "Hibernate",
    "Git"
  ],

  features: [
    "User Registration & Login",
    "JWT Authentication",
    "Email Verification",
    "Product Management",
    "Donation Management",
    "Admin Dashboard",
    "Image Upload",
    "Contact Management",
    "REST API Integration",
    "Responsive User Interface"
  ],

  stack: "Full Stack",

  githubLink:
    "https://github.com/ashanrupasingha/AAD_FINAL_COURSE_WORK.git",
},
  {
    id: 3,
    title: "FloraLink Application(Personal Project)",
    description:
    'Designed, developed, and maintained modern full-stack web applications through personal and academic projects while continuously improving software engineering skills.',
    icon: BookOpen,
    color: "from-purple-500 to-indigo-500",
    technologies:[
    'Java',
    'Spring Boot',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'REST APIs',
    'Axios',
    'Git',
    'Docker'
  ],
    features: [
     'Developed multiple full-stack web applications from scratch',
    'Built responsive and user-friendly interfaces using React and Next.js',
    'Designed RESTful APIs with Spring Boot and Node.js',
    'Integrated relational and NoSQL databases',
    'Applied clean architecture and reusable component design',
    'Continuously learned and implemented modern development technologies'
    ],
    stack: "Full Stack",
    githubLink: "https://youtu.be/RIbCmN8lJC4?si=75OGGPPGWClK0DVD",
  },
  
];

function Projects() {
  function handleDemo(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    toast.info("Function not allowed.");
  }

  return (
    <div id="projects" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* <div className="absolute top-1/4 left-1/4 w-lg h-128 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} /> */}
        </div>

        {/* Floating accents */}
        <div className="absolute top-32 right-20 pointer-events-none opacity-30">
          <Laptop className="w-10 h-10 text-primary animate-float" />
        </div>
        <div className="absolute bottom-40 left-16 pointer-events-none opacity-20">
          <Code
            className="w-8 h-8 text-primary animate-float"
            style={{ animationDelay: "1.2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up border border-purple-300">
            <Code className="w-4 h-4" />
            Portfolio Projects
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            My Projects
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A collection of full-stack applications built with modern
            technologies and best practices
          </p>
        </div>
        <GravityStarsBackground className="absolute z-10 top-0 left-0 w-full h-full" />
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Header with icon */}
                <div className="relative p-8">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${project.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border border-purple-300">
                      {project.stack}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with action buttons */}
                <div className="px-8 pb-8 pt-4 border-t border-border bg-muted/20">
                  <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="group">
                        <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                        <a target="_blank" className="cursor-pointer" href={project.githubLink}>View Code</a>
                      </Button>
                    <Button onClick={(event)=>handleDemo(event)} variant="outline" size="sm" className="group">
                      <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <GravityStarsBackground className="absolute top-0 left-0 w-full h-full" /> */}
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Projects;
