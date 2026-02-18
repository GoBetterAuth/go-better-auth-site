import {
  Code2,
  Settings2,
  Database,
  Radio,
  Code,
  CheckCircle2,
} from "lucide-react";

export default function ConfigurationSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950">
      <div className="custom-container relative border-x border-dashed border-sky-950">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Configuration
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're embedding as a library or running as a server,
            GoBetterAuth gives you full control over your authentication logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border-2 hover:border-blue-500/30 transition-colors">
            <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Library Configuration</h3>
            <p className="text-muted-foreground mb-6">
              Configure directly in Go using type-safe structs. Compile-time
              checks ensures your config is always valid and consistent.
            </p>
            <div className="flex gap-4 justify-center w-full">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                <Code className="h-3 w-3" /> Type-Safe
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                <CheckCircle2 className="h-3 w-3" /> Full Control
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-xl border-2 bg-card hover:border-blue-500/30 transition-colors">
            <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
              <Settings2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Standalone Configuration</h3>
            <p className="text-muted-foreground mb-6">
              Configure your server with a simple TOML file and change settings on the fly without recompiling. Perfect for dynamic environments.
            </p>
            <div className="flex gap-4 justify-center w-full">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                <Database className="h-3 w-3" /> TOML-Based
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                <Radio className="h-3 w-3" /> Hot Reloading
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
