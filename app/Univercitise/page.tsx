"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import axios from "axios";

interface university {
  _id: string;
  name: string;
  description: string;
  location: string;
  website: string;
  academicEmailFormat: string;
  logo: string;
  fields: any[];
  __v: number;
}
export default function Component() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch universities data from the API
    async function fetchUniversities() {
      try {
        const response = await axios.get("/api/universities");
        setUniversities(response.data);
      } catch (error) {
        console.error("Error fetching universities data:", error);
      }
    }

    fetchUniversities();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">EduNexus</span>
          </Link>
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search universities..."
              className="w-full rounded-lg bg-muted pl-10 pr-4 focus:border-primary focus:outline-none"
            />
          </div>
          <Button>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container flex flex-col items-center gap-4 py-12 text-center sm:py-16 md:py-20 lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to EduNexus
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Connecting Students and Teachers for a Brighter Future
          </p>
          <p className="max-w-2xl text-muted-foreground">
            EduNexus is an educational platform that empowers universities to
            create vibrant online communities, fostering collaboration and
            knowledge-sharing among students, faculty, and alumni.
          </p>
          <Button className="mt-6 flex items-center gap-2 text-2xl font-bold">
            <Link href="/create-community">
              Create a Community for Your University
            </Link>
            <PlusIcon className="h-6 w-6" />
          </Button>
        </section>
        <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Explore Our University Community
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {universities.map((university) => (
              <Card key={university._id} className="group">
                <Image
                  src={university.logo}
                  width={300}
                  height={200}
                  alt={`${university.name} Logo`}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{university.name}</h3>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {university.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">mouad</div>
                      <div className="text-xs text-muted-foreground">
                        University Admin
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/universities/${university._id}/fields`}
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                    prefetch={false}
                  >
                    Join Community
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              &copy; 2024 EduNexus.
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              Created by Mouad
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
