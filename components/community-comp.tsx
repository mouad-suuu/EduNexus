import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function Community() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Create a Community for Your University
          </h1>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Establish a strong online presence for your institution and connect
            with students, faculty, and alumni.
          </p>
        </div>
        <Card>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="logo">University Logo</Label>
                <Input id="logo" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">University Name</Label>
                <Input id="name" placeholder="Enter university name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">University Description</Label>
              <Textarea
                id="description"
                rows={3}
                placeholder="Describe your university"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">University Location</Label>
                <Input id="location" placeholder="Enter university location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-format">Academic Email Format</Label>
                <Input
                  id="email-format"
                  placeholder="Enter email format (e.g. @university.edu)"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information</Label>
                <Input id="contact" placeholder="Enter contact information" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">University Website</Label>
                <Input
                  id="website"
                  placeholder="Enter university website URL"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">University Phone Number</Label>
              <Input id="phone" placeholder="Enter university phone number" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Create Community
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default Community;
