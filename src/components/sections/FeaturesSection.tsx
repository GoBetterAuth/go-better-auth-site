import { Shield, Lock, Zap, Code } from "lucide-react";

const featuresItems = [
  {
    title: "Framework Independent",
    description:
      "Works seamlessly with any Go framework or as a standalone library",
    icon: Shield,
  },
  {
    title: "Secure by Default",
    description: "Built with security best practices and industry standards",
    icon: Lock,
  },
  {
    title: "High Performance",
    description:
      "Optimized for speed with minimal overhead and maximum efficiency",
    icon: Zap,
  },
  {
    title: "Developer Friendly",
    description:
      "Clean API design with comprehensive documentation and examples",
    icon: Code,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-t border-dashed border-sky-950"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -z-10" />

      <div className="relative max-w-7xl mx-auto border-x border-dashed border-sky-950 p-20 px-10">
        {/* Border Indicators */}
        <div className="absolute z-10 -top-1 -left-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
        <div className="absolute z-10 -top-1 -right-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
        <div className="absolute z-10 -bottom-1 -left-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />
        <div className="absolute z-10 -bottom-1 -right-1 w-2 h-2 rounded-full bg-sky-500 border border-solid border-sky-500" />

        <div className="text-center mb-16">
          <p className="bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent font-semibold">
            Everything you need
          </p>
          <h2 className="text-4xl font-bold mt-2">Powerful Features</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Everything you need for modern authentication and authorization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {featuresItems.map((feature, index: number) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-linear-to-r from-blue-500/10 to-sky-500/30 border border-blue-400/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
