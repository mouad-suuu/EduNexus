"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

function CreateUniversityForm() {
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    description: "",
    location: "",
    emailFormat: "",
    contact: "",
    website: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    const { id, value, files } = e.target;
    if (id === "logo" && files.length > 0) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("logo", formData.logo);
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("location", formData.location);
    formDataToSubmit.append("emailFormat", formData.emailFormat);
    formDataToSubmit.append("contact", formData.contact);
    formDataToSubmit.append("website", formData.website);
    formDataToSubmit.append("phone", formData.phone);

    try {
      const response = await axios.post("/api/universities", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("University created:", response.data);
    } catch (error) {
      console.error("Error creating university:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <form onSubmit={handleSubmit} className="space-y-6">
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
                <Input id="logo" type="file" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">University Name</Label>
                <Input
                  id="name"
                  placeholder="Enter university name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">University Description</Label>
              <Textarea
                id="description"
                rows={3}
                placeholder="Describe your university"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">University Location</Label>
                <Input
                  id="location"
                  placeholder="Enter university location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailFormat">Academic Email Format</Label>
                <Input
                  id="emailFormat"
                  placeholder="Enter email format (e.g. @university.edu)"
                  value={formData.emailFormat}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information</Label>
                <Input
                  id="contact"
                  placeholder="Enter contact information"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">University Website</Label>
                <Input
                  id="website"
                  placeholder="Enter university website URL"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">University Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter university phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Create Community
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default CreateUniversityForm;