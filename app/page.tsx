
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
  Headphones,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const blue = "text-[#1a73e8]";

export default function Home() {
  return (
    <main className="bg-white text-[#050b24]">
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CatFramework />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  const links = [
    ["Home", "#home"],
    ["Stats", "#stats"],
    ["Clients", "#clients"],
    ["Accredian Edge", "#edge"],
    ["CAT", "#cat"],
    ["How It Works", "#works"],
    ["FAQs", "#faqs"],
    ["Testimonials", "#testimonials"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 md:px-6">
        <img src="/assets/logo.png" alt="Accredian" className="h-10 md:h-12" />

        <div className="hidden gap-8 text-lg font-medium lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-[#1a73e8]">
              {label}
            </a>
          ))}
        </div>

        <button className="block text-4xl font-bold lg:hidden">☰</button>
      </nav>
    </header>
  );
}

function SectionTitle({
  title,
  blueText,
  subtitle,
}: {
  title: string;
  blueText: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-extrabold md:text-5xl">
        {title} <span className={blue}>{blueText}</span>
      </h2>
      {subtitle && <p className="mt-5 text-xl">{subtitle}</p>}
    </div>
  );
}

function Stats() {
  const stats = [
    ["10K+", "Professionals Trained For Exceptional Career Success"],
    ["200+", "Sessions Delivered With Unmatched Learning Excellence"],
    ["5K+", "Active Learners Engaged In Dynamic Courses"],
  ];

  return (
    <section id="stats" className="px-6 py-20">
      <SectionTitle title="Our" blueText="Track Record" subtitle="The Numbers Behind Our Success" />

      <div className="mx-auto max-w-5xl md:grid md:grid-cols-3 md:gap-8">
        {stats.map(([number, text]) => (
          <div
            key={number}
            className="flex items-center gap-6 border-b py-8 md:block md:border-b-0 md:border-r md:text-center md:last:border-r-0"
          >
            <span className="rounded-full bg-blue-100 px-7 py-4 text-2xl font-bold text-[#1a73e8]">
              {number}
            </span>
            <p className="text-xl font-semibold md:mx-auto md:mt-8 md:max-w-xs md:text-lg">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  const clients = [
    "/assets/reliance.png",
    "/assets/hcl.png",
    "/assets/ibm.png",
    "/assets/crif.png",
    "/assets/adp.png",
    "/assets/bayer.png",
  ];

  return (
    <section id="clients" className="overflow-hidden px-6 py-20">
      <SectionTitle
        title="Our Proven"
        blueText="Partnerships"
        subtitle="Successful Collaborations With the Industry’s Best"
      />

      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-28">
          {[...clients, ...clients].map((src, index) => (
            <img key={index} src={src} alt="client logo" className="h-20 w-36 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccredianEdge() {
  return (
    <section id="edge" className="px-6 py-20 text-center">
      <h2 className="text-4xl font-extrabold">
        The <span className="text-blue-600">Accredian Edge</span>
      </h2>
      <p className="mt-3 text-xl">Key Aspects of Our Strategic Training</p>

      <div className="mt-10 hidden md:block">
        <img src="/assets/edge-desktop.png" alt="Accredian Edge" className="mx-auto max-w-6xl" />
      </div>

      <div className="mt-10 block md:hidden">
        <img src="/assets/edge-mobile.png" alt="Accredian Edge" className="mx-auto w-full max-w-sm" />
      </div>
    </section>
  );
}

function DomainExpertise() {
  const domains: any[] = [
    [Lightbulb, "Product & Innovation Hub"],
    [Brain, "Gen-AI Mastery"],
    [Users, "Leadership Elevation"],
    [BarChart3, "Tech & Data Insights"],
    [Settings, "Operations Excellence"],
    [Globe, "Digital Enterprise"],
    [CreditCard, "Fintech Innovation Lab"],
  ];

  return (
    <section className="px-6 py-20">
      <SectionTitle
        title="Our"
        blueText="Domain Expertise"
        subtitle="Specialized Programs Designed to Fuel Innovation"
      />

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {domains.map(([Icon, title]) => (
          <div key={title} className="rounded-xl border p-8 text-center shadow-lg">
            <Icon className="mx-auto mb-5 text-[#1a73e8]" size={56} />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function CourseSegmentation() {
  const courses = [
    ["/assets/course1.png", "Program Specific", "Certificate, Executive, Post Graduate Certificate"],
    ["/assets/course2.png", "Industry Specific", "IT, Healthcare, Retail, Finance, Education, Manufacturing"],
    ["/assets/course3.png", "Topic Specific", "Machine Learning, Design, Analytics, Cybersecurity, Cloud"],
    ["/assets/course4.png", "Level Specific", "Senior Leadership, Mid-Career Professionals, Freshers"],
  ];

  return (
    <section className="px-6 py-20">
      <SectionTitle
        title="Tailored"
        blueText="Course Segmentation"
        subtitle="Explore Custom-fit Courses Designed to Address Every Professional Focus"
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        {courses.map(([img, title, desc]) => (
          <div
            key={title}
            className="overflow-hidden rounded-xl border shadow-md transition hover:shadow-lg"
          >
            <img
              src={img}
              className="h-40 w-full object-cover"
              alt={title}
            />

            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-[#1a73e8]">
                {title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoShouldJoin() {
  const users: any[] = [
    [MonitorCheck, "Tech Professionals", "Enhance expertise, embrace tech, drive innovation."],
    [MonitorX, "Non-Tech Professionals", "Adapt digitally, collaborate in tech environments."],
    [GraduationCap, "Emerging Professionals", "Develop powerful skills for rapid career growth."],
    [Briefcase, "Senior Professionals", "Strengthen leadership, enhance strategic decisions."],
  ];

  return (
    <section className="bg-[#1f6ed4] px-5 py-16 text-white md:bg-white md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl rounded-none md:grid md:rounded-2xl md:bg-[#1f6ed4] md:p-10 md:grid-cols-2">
        <div>
          <p className="text-2xl">Who Should Join?</p>
          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            Strategic Skill Enhancement
          </h2>

          <img
            src="/assets/Strategic Skill Enhancement.png"
            alt="professionals"
            className="hidden md:mt-8 md:block md:w-[320px]"
          />
        </div>

        <div className="mt-12 grid gap-12 md:mt-0 md:grid-cols-2">
          {users.map(([Icon, title, desc]) => (
            <div key={title} className="flex gap-5 md:block">
              <Icon size={48} />
              <div>
                <h3 className="text-2xl font-bold md:mt-4">{title}</h3>
                <p className="mt-2 text-lg text-blue-100">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatFramework() {
  return (
    <section id="cat" className="bg-[#f2f8ff] px-6 py-20 text-center">
      <SectionTitle
        title="The"
        blueText="CAT Framework"
        subtitle="Our Proven Approach to Learning Excellence"
      />

      <img src="/assets/CAT.png" alt="CAT Framework" className="mx-auto mt-10 w-full max-w-5xl object-contain" />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: BarChart3,
      number: "1",
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: MonitorCheck,
      number: "2",
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: MonitorCheck,
      number: "3",
    },
  ];

  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold">
        How We <span className="text-blue-600">Deliver Results</span> That Matter?
      </h2>

      <p className="mt-3 text-gray-600">
        A Structured Three-Step Approach to Skill Development
      </p>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-2xl border border-blue-200 bg-[#eef4ff] p-8 text-center shadow-sm"
            >
              {/* LEFT BLUE BAR */}
              <div className="absolute left-0 top-6 h-16 w-1 rounded-r-full bg-blue-600"></div>

              {/* STEP NUMBER */}
              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-sm font-semibold">
                {step.number}
              </div>

              {/* ICON CIRCLE */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                <Icon size={28} />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
/*function FAQ() {
  return (
    <section id="faqs" className="px-6 py-20">
      <h2 className="mx-auto max-w-6xl text-4xl font-extrabold md:text-5xl">
        Frequently Asked <span className={blue}>Questions</span>
      </h2>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          {["About the Course", "About the Delivery", "Miscellaneous"].map((item, i) => (
            <button key={item} className={`w-full rounded-lg border p-6 text-xl font-bold shadow ${i === 0 ? "text-[#1a73e8]" : "text-gray-600"}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-10 text-xl font-bold">
          {[
            "What types of corporate training programs does Accredian offer?",
            "What domain specializations are available?",
          ].map((q) => (
            <div key={q} className="flex items-center justify-between">
              <span>{q}</span>
              <ChevronDown />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="rounded-lg bg-[#1a73e8] px-8 py-4 text-xl font-bold text-white">
          Enquire Now
        </button>
      </div>
    </section>
  );
}*/

function CTA() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-xl bg-[#1a73e8] p-10 text-white md:flex-row">
        <div className="flex items-center gap-8">
          <Headphones size={70} />
          <div>
            <h2 className="text-3xl font-extrabold">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="mt-3 text-xl">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        <button className="mt-8 flex items-center gap-2 rounded-lg bg-white px-10 py-4 text-xl font-bold text-[#1a73e8] md:mt-0">
          Contact Us <ArrowRight />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] px-7 py-12 text-white md:bg-white md:px-6 md:py-20 md:text-[#050b24]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <img src="/assets/logo.png" alt="Accredian" className="h-14 w-auto md:hidden invert" />
            <img src="/assets/logo.png" alt="Accredian" className="hidden h-14 w-auto md:block" />

            <div className="mt-8 flex gap-6 text-2xl">
              <span>f</span><span>in</span><span>x</span><span>ig</span><span>yt</span>
            </div>

            <button className="mt-8 rounded-lg bg-[#1a73e8] px-6 py-3 text-lg font-bold text-white">
              Enquire Now
            </button>
            <p className="mt-3 font-semibold">Speak with our Advisor</p>
          </div>
        </div>

        <hr className="my-10 border-gray-600" />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Accredian</h3>
            <p className="mt-5 text-xl">About</p>
            <p className="mt-4 text-xl">Blog</p>
            <p className="mt-4 text-xl">Why Accredian</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="mt-5 text-xl">
              Email us: <span className="text-[#1a73e8]">enterprise@accredian.com</span>
            </p>
            <p className="mt-5 text-xl leading-relaxed">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr className="my-10 border-gray-600" />

        <p className="text-center text-lg font-semibold">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}