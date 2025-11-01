import { CircleCheck } from "lucide-react";

import { ShineBorder } from "../ui/shine-border";

const solutionItems = [
  "Email/Password authentication",
  "OAuth 2.0 support",
  "Session management",
  "Password hashing & validation",
  "Middleware support",
  "CSRF protection",
  "Rate limiting",
  "Custom hooks into auth flows",
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative p-20 px-10 border-t border-solid border-sky-950/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent font-semibold">
            Solution
          </p>
          <h2 className="text-4xl font-bold mt-2">Complete Auth</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            All the things you need, built-in and ready to use
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center gap-3 border border-blue-500/10 border-solid"
            >
              <ShineBorder shineColor={["#2b7fff", "#00a6f4"]} />
              <CircleCheck className="w-6 h-6 text-blue-500" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
