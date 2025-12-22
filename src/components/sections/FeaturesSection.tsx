import {
  Shield,
  Globe,
  Database,
  Key,
  Server,
  Box,
  Webhook,
} from "lucide-react";

import BorderIndicators from "@/components/shared/BorderIndicators";

const features = [
  {
    title: "Email & Password",
    description:
      "Secure authentication with Argon2 hashing, email verification, password reset, and change email flows.",
    icon: Key,
    className: "md:col-span-1",
  },
  {
    title: "Social OAuth",
    description:
      "Connect with Google, GitHub, Discord, and more. Extensible provider system.",
    icon: Globe,
    className: "md:col-span-1",
  },
  {
    title: "Multiple Databases",
    description:
      "First-class support for PostgreSQL, MySQL, SQLite, and custom adapters with migration scripts.",
    icon: Database,
    className: "md:col-span-1",
  },
  {
    title: "Secondary Storage",
    description:
      "Redis/Key-Value support for high-performance sessions and rate limiting.",
    icon: Server,
    className: "md:col-span-1",
  },
  {
    title: "Enhanced Security",
    description:
      "Built-in CSRF protection, secure session management, and configurable rate limiting.",
    icon: Shield,
    className: "md:col-span-1",
  },
  {
    title: "Minimal Dependencies",
    description:
      "Standard library first design. Production-ready and framework-agnostic.",
    icon: Box,
    className: "md:col-span-1",
  },
  {
    title: "Webhooks",
    description:
      "Trigger external workflows on user signup, login, and other key events with configurable webhooks.",
    icon: Webhook,
    className: "md:col-span-3",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-b border-dashed border-sky-950 bg-blue-500/5"
    >
      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need for Auth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Production-ready features that would take months to build yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border-2 bg-card p-6 hover:shadow-md transition-all hover:border-blue-500/30 ${feature.className}`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
