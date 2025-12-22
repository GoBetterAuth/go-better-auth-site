import Link from "next/link";

import { Puzzle, Zap, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import BorderIndicators from "@/components/shared/BorderIndicators";

export default function PluginSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950 overflow-hidden bg-blue-500/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />

      <div className="custom-container relative border-x border-dashed border-sky-950">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Abstract Visual Representation of Plugins */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-xl border-2 bg-card shadow-lg border-blue-500/20">
                    <Zap className="h-8 w-8 text-yellow-500 mb-3" />
                    <h4 className="font-semibold">Event Bus</h4>
                    <p className="text-sm text-muted-foreground">
                      Pub/Sub architecture for async workflows
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border-2 bg-card shadow-lg border-blue-500/20">
                    <Radio className="h-8 w-8 text-green-500 mb-3" />
                    <h4 className="font-semibold">Custom Routes</h4>
                    <p className="text-sm text-muted-foreground">
                      Add new endpoints to the auth server
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border-2 bg-card shadow-lg border-blue-500/20">
                    <Puzzle className="h-8 w-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold">Core Logic</h4>
                    <p className="text-sm text-muted-foreground">
                      Extend the core authentication engine
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border-2 bg-card shadow-lg border-blue-500/20">
                    <div className="h-8 w-8 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center mb-3">
                      <span className="text-xl">+</span>
                    </div>
                    <h4 className="font-semibold">Your Plugin</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement the Plugin interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Extensible Plugin System & <br />
              <span className="text-blue-500">Event-Driven Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              GoBetterAuth isn't just a black box. It's a platform designed to
              be extended. Use the built-in Event Bus to trigger external
              systems, or write full plugins to add custom business logic and
              routes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Puzzle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Plugin Interface</h3>
                  <p className="text-muted-foreground">
                    Implement a simple Go interface to inject custom services,
                    repositories, and HTTP handlers into the main application.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Event Bus</h3>
                  <p className="text-muted-foreground">
                    Subscribe to system events like{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">
                      user.signed_up
                    </code>{" "}
                    or{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">
                      user.logged_in
                    </code>{" "}
                    and more to trigger emails, analytics, or webhooks.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                className="border-blue-500/20 hover:bg-blue-500/5"
              >
                <Link href="/docs/integrations/plugins">
                  Explore Plugin Docs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
