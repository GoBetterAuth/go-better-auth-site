import Link from "next/link";
import {
  Shield,
  Lock,
  Zap,
  Code,
  MoveRight,
  CheckCircle,
  CircleCheck,
} from "lucide-react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import GolangIcon from "@/components/shared/icons/GolangIcon";
import { ShineBorder } from "@/components/ui/shine-border";

const codeSnippets = [
  `import (
  "os"

  gobetterauth "github.com/GoBetterAuth/go-better-auth"
  gobetterauthdomain "github.com/GoBetterAuth/go-better-auth/domain"
)
`,
  `
func main() {
  auth, _ := gobetterauth.New(&gobetterauthdomain.Config{
    BaseURL:  "http://localhost:8080",
    BasePath: "/api/auth",
    Database: gobetterauthdomain.DatabaseConfig{
      Provider:         "postgres",
      ConnectionString: os.Getenv("DATABASE_URL"),
    },
    EmailAndPassword: &gobetterauthdomain.EmailPasswordConfig{
      Enabled: true,
      // ...more options
    },
    EmailVerification: &gobetterauthdomain.EmailVerificationConfig{
      Enabled:                     true,
      SendOnSignUp:                true,
      AutoSignInAfterVerification: true,
      // ...more options
    },
    SocialProviders: &gobetterauthdomain.SocialProvidersConfig{
      Google: &gobetterauthdomain.GoogleProviderConfig{
        ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
        ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
        RedirectURI:  "http://localhost:8081/auth/oauth/google/callback",
      },
      // ...other providers
    },
  })
}
`,
];

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

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* INTRO SECTION */}
      <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-full skew-y-12"
          )}
        />

        <div className="relative z-10 p-10 flex flex-col justify-center items-center text-center">
          <Badge variant="outline" className="relative bg-gray-950 mb-5">
            ✨ Framework-independent Authentication
            <BorderBeam
              duration={8}
              size={35}
              colorFrom="#87CEEB"
              colorTo="#4682B4"
            />
          </Badge>

          <div className="mb-5">
            <h2 className="mb-2 text-4xl font-bold bg-linear-to-r from-green-500 to-sky-500 bg-clip-text text-transparent">
              Secure Auth
            </h2>
            <h2 className="text-4xl mb-4 font-bold">Made Simple for Go</h2>
            <p className="text-base w-full max-w-xl text-center">
              A comprehensive, framework-independent authentication and
              authorization library that brings enterprise-grade security to
              your Go applications.
            </p>
            <div className="mt-5 flex flex-row gap-2 justify-center items-center">
              <Button
                variant="outline"
                className="bg-linear-to-r from-green-700 to-sky-700"
                asChild
              >
                <Link href="/docs" className="flex flex-row items-center gap-1">
                  <span>Get Started</span>
                  <MoveRight />
                </Link>
              </Button>
              <Button variant="default">
                <GitHubIcon />
                <span>View on GitHub</span>
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-center">
            <Terminal className="w-max max-w-max! text-left max-h-max bg-transparent border border-solid border-sky-950">
              {codeSnippets.map((line: string, index: number) =>
                index === 0 ? (
                  <TypingAnimation key={index}>{line}</TypingAnimation>
                ) : (
                  <AnimatedSpan key={index}>{line}</AnimatedSpan>
                )
              )}
            </Terminal>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="relative p-20 px-10 border-t border-solid border-sky-950/50"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full -z-10"></div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="bg-linear-to-r from-green-500 to-sky-500 bg-clip-text text-transparent font-semibold">
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
                  <div className="w-14 h-14 bg-linear-to-r from-green-500/10 to-sky-500/30 border border-emerald-400/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-emerald-400" />
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

      {/* SOLUTION SECTION */}
      <section
        id="solution"
        className="relative p-20 px-10 border-t border-solid border-sky-950/50"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full -z-10"></div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="bg-linear-to-r from-green-500 to-sky-500 bg-clip-text text-transparent font-semibold">
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
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center gap-3 border border-teal-500/10 border-solid"
              >
                <ShineBorder shineColor={["#14b8a6", "#06b6d4"]} />
                <CircleCheck className="w-6 h-6 text-teal-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section
        id="community"
        className="relative p-20 px-10 border-t border-solid border-sky-950/50"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full -z-10"></div>

        <div className="relative max-w-5xl mx-auto bg-[#0A1A2A] rounded-2xl p-10 md:p-20 text-center overflow-hidden border border-sky-900/50">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>
          <ShineBorder shineColor={["#14b8a6", "#06b6d4"]} />

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-900/50 rounded-lg flex items-center justify-center border border-gray-700">
                <GolangIcon />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
              Open Source & Community Driven
            </h2>
            <p className="text-base text-gray-400 mt-4 max-w-2xl mx-auto">
              Go Better Auth is fully open source and maintained by the
              community. Contribute, report issues, or star us on GitHub.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                className="bg-linear-to-r from-green-700 to-sky-700"
                asChild
              >
                <Link
                  href="https://github.com/GoBetterAuth/go-better-auth"
                  target="_blank"
                >
                  <GitHubIcon className="mr-2" />
                  View on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Released under the Apache 2.0 License
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
