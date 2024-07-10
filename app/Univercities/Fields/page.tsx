import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">EduNexus</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="/"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href=""
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Profile
            </Link>
          </nav>
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search fields..."
              className="w-full rounded-lg bg-muted pl-10 pr-4 focus:border-primary focus:outline-none"
            />
          </div>
          <Button>Sign In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Harvard University
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                A prestigious research university with a rich history and global
                reputation.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Cambridge, UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">info@cam.ac.uk</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">www.cam.ac.uk</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-6">
              <Image
                src="/harvard.png"
                width={400}
                height={300}
                alt="University of Harvard"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Available Fields
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AtomIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Physics</h3>
                </div>
                <Link
                  href="/Univercities/Fields/Courses"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the fundamental laws of the universe and cutting-edge
                research in physics.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Computer Science</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Dive into the world of algorithms, programming, and cutting-edge
                technology.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Literature</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the rich world of literature, from classic novels to
                contemporary works.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FlaskRoundIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Chemistry</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the fundamental properties of matter and the latest
                advancements in chemistry.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Geography</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the physical and human aspects of the world around us.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Business</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Gain the skills and knowledge to succeed in the dynamic world of
                business.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BrushIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Fine Arts</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the creative world of fine arts, from painting and
                sculpture to music and theater.
              </p>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MicroscopeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Biology</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Dive into the fascinating world of living organisms and their
                interactions.
              </p>
            </Card>
          </div>
          <div className="mt-8 flex justify-end">
            <Button>
              <PlusIcon className="h-5 w-5" />
              Add New Field
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              &copy; 2024 EduNexus. All rights reserved.
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function AtomIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function BrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FlaskRoundIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <path d="M5.52 16h12.96" />
    </svg>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MicroscopeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
