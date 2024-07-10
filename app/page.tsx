import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <BookIcon className="h-6 w-6" />
          <span className="sr-only">EduNexus</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Courses
          </Link>

          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Contact
          </Link>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-[url('/library.png?height=800&width=1600')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-14">
            <div className="space-y-2 text-center">
              <h1 className="text-black text-3xl font-bold tracking-tighter  sm:text-5xl xl:text-6xl">
                Welcome to EduNexus
              </h1>
              <p className="text-black max-w-[600px] font-bold  md:text-xl">
                Your Gateway to Comprehensive Learning
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row w-full">
              <Link
                href="/Univercities"
                className="text-white inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium  shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-1"
                prefetch={false}
              >
                Explore Communities
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-1"
                prefetch={false}
              >
                Sign Up for Free
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the comprehensive capabilities of EduNexus.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <FilePenIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">Course Creation</h3>
                      </div>
                      <p className="text-black ">
                        Easily create and manage engaging courses.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <UsersIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">
                          Collaborative Learning
                        </h3>
                      </div>
                      <p className="text-black ">
                        Foster interactive learning through discussions and
                        group projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <BookIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">
                          Comprehensive Resources
                        </h3>
                      </div>
                      <p className="text-black ">
                        Access a vast library of educational materials and
                        multimedia content.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <SettingsIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">
                          Personalized Learning
                        </h3>
                      </div>
                      <p className="text-black ">
                        Tailor your learning experience with personalized paths
                        and recommendations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/featuers.png"
                width="300"
                height="300"
                alt="Features"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-12 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About EduNexus
                </h2>
                <p className="text-black max-w-[900px] font-mono  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EduNexus is a revolutionary platform designed to centralize
                  educational resources and empower both learners and educators.
                  Our mission is to create a seamless learning experience by
                  providing access to diverse course materials, fostering
                  collaborative learning environments, and supporting
                  personalized learning paths.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Customer Testimonials
                </h2>
                <div className=" grid gap-12 px-4 h-12 md:grid-cols-2">
                  <div className="space-y-2">
                    <blockquote className="font-mono text-black text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl ">
                      EduNexus transformed how I teach and learn. Its intuitive,
                      engaging, and packed with resources!
                    </blockquote>
                    <div className="font-semibold ">Professor John Doe</div>
                  </div>
                  <div className="space-y-2">
                    <blockquote className="font-mono text-black  text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl ">
                      As a student, EduNexus helped me excel in my studies by
                      offering comprehensive learning tools in one place.
                    </blockquote>
                    <div className="font-semibold ">Jane Smith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=550&width=1100')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center ">
            <div className="space-y-2">
              <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Future Goals
              </h2>
              <p className="font-mono text-black  max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                At EduNexus, we are committed to evolving and expanding our
                platform to meet your educational needs. Our future goals
                include:
              </p>
              <ul className="text-black font-mono text-left space-y-2 ">
                <li>
                  Enhancing AI-driven features for personalized learning
                  assistance.
                </li>
                <li>
                  Expanding our course catalog to include diverse disciplines
                  and learning formats.
                </li>
                <li>
                  Strengthening partnerships with educational institutions for
                  collaborative learning initiatives.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=550&width=1100')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center ">
            <div className="space-y-2">
              <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Feedback Matters
              </h2>
              <p className="text-black max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                We value your input to improve EduNexus continuously. Share your
                thoughts and suggestions with us to enhance your learning
                experience.
              </p>
              <form className="w-full max-w-xl space-y-4">
                <Textarea
                  placeholder="Enter your feedback..."
                  className="p-4 min-h-[150px]"
                />
                <div className="flex items-center gap-2">
                  <Label htmlFor="rating" className="text-black ">
                    Rating:
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="suggestions"
                    className="text-primary-foreground"
                  >
                    Suggestions:
                  </Label>
                  <Textarea
                    id="suggestions"
                    placeholder="Enter your suggestions"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Feedback
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg?height=550&width=1100')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <div className="space-y-2">
              <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-5xl">
                Join EduNexus Today
              </h2>
              <p className="text-black max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-primary-foreground">
                Start your journey towards academic excellence. Join EduNexus
                for free and access a wealth of educational resources.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row w-full">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-1"
                  prefetch={false}
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 EduNexus. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
        <div className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          >
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 hidden sm:block"
            prefetch={false}
          />
        </div>
      </footer>
    </div>
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

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
