import { ArrowRight, Database, Globe, Server, Webhook } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BorderIndicators from "@/components/shared/BorderIndicators";

const hookTypes = [
  {
    id: "database",
    title: "Database Hooks",
    icon: Database,
    description: "Intercept data before or after it hits the database.",
    examples: [
      "BeforeCreate",
      "AfterCreate",
      "BeforeUpdate",
      "AfterUpdate",
      "+ more",
    ],
  },
  {
    id: "event",
    title: "Event Hooks",
    icon: Globe,
    description: "Execute workflows after key authentication actions.",
    examples: [
      "user.signed_up",
      "user.logged_in",
      "user.email_verified",
      "+ more",
    ],
  },
  {
    id: "endpoint",
    title: "Endpoint Hooks",
    icon: Server,
    description: "Modify requests and responses in the lifecycle.",
    examples: ["Before", "Response", "After"],
  },
  {
    id: "webhooks",
    title: "Webhooks",
    icon: Webhook,
    description: "Notify external services when auth events occur.",
    examples: ["User Signup", "Email Verified", "Password Reset", "+ more"],
  },
];

export default function HooksSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950">
      <div className="custom-container relative border-x border-dashed border-sky-950">
        <BorderIndicators />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-blue-500/30 text-blue-500"
            >
              Powerful Customisation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hooks System
            </h2>
            <p className="text-lg text-muted-foreground">
              Deeply customise behavior without forking. Inject logic at any
              stage of the authentication pipeline.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hookTypes.map((hook) => (
            <div key={hook.id} className="flex flex-col h-full">
              <div className="p-6 rounded-xl border-2 bg-card relative overflow-hidden group h-full hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <hook.icon size={80} />
                </div>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                  <hook.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{hook.title}</h3>
                <p className="text-muted-foreground mb-4">{hook.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {hook.examples.map((ex) => (
                    <Badge
                      key={ex}
                      variant="secondary"
                      className="text-xs font-mono"
                    >
                      {ex}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
