import { Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function Portfolio() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "NestJS", level: 75 },
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "WebSocket", level: 75 },
    { name: "CSS/Tailwind", level: 92 },
    { name: "SQL", level: 78 },
  ]

  const projects = [
    {
      title: "Stock Market Web Platform",
      description:
        "Real-time trading dashboard with live data using ReactJS, WebSocket, and GraphQL. Used code-splitting and build optimizations with Webpack for fast performance.",
      stack: ["ReactJS", "GraphQL", "WebSocket", "TailwindCSS", "Redux", "REST", "Next.js"],
      link: "#",
    },
    {
      title: "Backend Microservices Architecture",
      description:
        "Built microservices using Java Spring Boot with RabbitMQ message queues and PostgreSQL for scalable backend systems.",
      stack: ["Java", "Spring Boot", "RabbitMQ", "JPA", "SQL"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.",
      stack: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization platform for business intelligence with interactive charts and real-time data processing.",
      stack: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker"],
      link: "#",
    },
  ]

  const experience = [
    {
      title: "Software Engineer",
      company: "Prezly",
      period: "2022 - Present",
      description:
        "Built frontend apps with ReactJS and backend APIs with NestJS and Java. Led development of scalable web applications handling high-traffic loads.",
    },
    {
      title: "Senior Engineer",
      company: "Anyway Labs",
      period: "2017 - 2021",
      description:
        "Developed scalable microservices with Spring Boot and integrated with frontend apps using GraphQL & WebSocket. Mentored junior developers and established coding standards.",
    },
    {
      title: "Freelance Developer",
      company: "Agente Studio",
      period: "2016 - 2020",
      description:
        "Delivered custom web solutions for various clients, specializing in React-based applications and Java backend systems.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-4">
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">
                Portfolio
              </a>
              <a href="#career" className="text-gray-600 hover:text-blue-600 transition-colors">
                Career
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <Github className="w-5 h-5 text-gray-600" />
                <Linkedin className="w-5 h-5 text-gray-600" />
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Labhesh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6">web developer</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Full Stack Web Developer | Meta Certified Frontend Developer| Final Year Undergrad.
                <br />6 Star Problem Solver @ HackerRank
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact me
              </Button>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Labhesh - Web Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              01. <span className="text-blue-600">{"<a little about me>"}</span>
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Hi, I'm Labhesh — a Full Stack Web Developer with 7+ years of experience and a strong background in
              ReactJS and Java-based backend systems.
            </p>
            <p className="mb-6">
              Over the years, I've built complex web applications for high-traffic industries such as the stock market,
              handling real-time data for thousands of concurrent users. My expertise spans across frontend and backend
              development, working with modern technologies like ReactJS, TailwindCSS, WebSockets, GraphQL, NestJS,
              Spring Boot, and microservices architecture.
            </p>
            <p className="mb-8">
              I enjoy tackling complex problems and transforming them into elegant, performant, and scalable solutions.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Get 🧠 done. Fast.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              02. <span className="text-blue-600">{"<my skills>"}</span>
            </h2>
          </div>
          <Card className="p-8">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-gray-700">{skill.name}:</div>
                  <div className="flex-1">
                    <Progress value={skill.level} className="h-3" />
                  </div>
                  <div className="w-12 text-sm text-gray-500">{skill.level}%</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              03. <span className="text-blue-600">{"<my portfolio>"}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A small gallery of recent projects chosen by me. I've done them all together with amazing people from
              companies around the globe. It's only a drop in the ocean compared to the entire list.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        📦 {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{project.description}</CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              04. <span className="text-blue-600">{"<my working career>"}</span>
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title} <span className="text-blue-600">@ {job.company}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            05. <span className="text-blue-600">{"<get in touch>"}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question, a project, or just want to say hi, I'll try my best to
            get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>tanpn2402@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/tan-pham-nhat-384819156</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Github className="w-5 h-5" />
              <span>github.com/tanpn2402</span>
            </div>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Say Hello!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Labhesh. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
