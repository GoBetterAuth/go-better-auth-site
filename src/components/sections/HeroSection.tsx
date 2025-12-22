import Link from "next/link";

import { ArrowRight, Terminal as TerminalIcon, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { CONSTANTS } from "@/constants/constants";
import GitHubIcon from "../shared/icons/GitHubIcon";

const libraryCode = `
// Library Mode
import (
  gobetterauth "github.com/GoBetterAuth/go-better-auth"
  gobetterauthconfig "github.com/GoBetterAuth/go-better-auth/config"
)

func main() {
  config := gobetterauthconfig.NewConfig(/*...*/) 
  auth := gobetterauth.New(config)
  
  // Native http.ServeMux support
  http.Handle("/auth/", auth.Handler())
  
  http.ListenAndServe(":8080", nil)
}
`.trim();

const serverCode = `
# Standalone Mode
app_name = "GoBetterAuth"
base_url = "http://localhost:8080"
base_path = "/auth"

[logger]
level = "info"

[database]
provider = "postgres"

[email_password]
enabled = true

[webhooks]
enabled = true
url = "https://api.myapp.com/webhooks/auth"

// and more to configure and customise...
`.trim();

export default function HeroSection() {
  return (
    <section className="relative border-b border-dashed border-sky-950">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="custom-container relative border-x border-dashed border-sky-950 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto relative z-10">
          <Badge
            variant="outline"
            className="relative animate-fade-in px-3 py-1 text-sm backdrop-blur-sm border-primary/20"
          >
            <span className="mr-1 text-primary">★</span>
            <span>Open Source</span>
            <BorderBeam
              size={30}
              duration={10}
              delay={2}
              colorFrom="#3b82f6"
              colorTo="#0ea5e9"
              className="pointer-events-none"
            />
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The Auth Platform <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Native to Go. Built for Any Stack.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An open-source authentication solution that scales with you. Embed
            it as a <strong>library</strong> in your Go app, or run it as a{" "}
            <strong>standalone auth server</strong> for any language or
            framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-base bg-linear-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 border-0 text-white"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href={CONSTANTS.githubRepoUrl} target="_blank">
                <GitHubIcon className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500/30 to-sky-500/30 rounded-xl blur-2xl opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Library Mode Preview */}
            <div className="relative group rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    main.go
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Library Mode
                </Badge>
              </div>
              <div className="p-4 overflow-x-auto scrollbar-hide">
                <pre className="text-sm font-mono text-muted-foreground">
                  <code className="language-go">{libraryCode}</code>
                </pre>
              </div>
              <BorderBeam
                size={250}
                duration={12}
                delay={9}
                colorFrom="#3b82f6"
                colorTo="#0ea5e9"
                reverse
              />
            </div>

            {/* Standalone Mode Preview */}
            <div className="relative group rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    config.toml
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Standalone Mode
                </Badge>
              </div>
              <div className="p-4 overflow-x-auto scrollbar-hide">
                <pre className="text-sm font-mono text-muted-foreground">
                  <code className="language-toml">{serverCode}</code>
                </pre>
              </div>
              <BorderBeam
                size={250}
                duration={12}
                delay={9}
                colorFrom="#3b82f6"
                colorTo="#0ea5e9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
