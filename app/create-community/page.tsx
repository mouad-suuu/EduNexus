"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function CreateUniversityForm() {
  const [formData, setFormData] = useState({
    logoFile: "",
    name: "",
    description: "",
    location: "",
    emailFormat: "",
    contact: "",
    website: "",
    phone: "",
  });
  const router = useRouter();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logoFile: file });
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Prepare form data for logo upload
      const formDataLogo = new FormData();
      formDataLogo.append("file", formData.logoFile);

      // Upload logo to Google Drive
      const responseUpload = await axios.post("/api/upload", formDataLogo);

      if (responseUpload.data.success) {
        // If logo upload to Google Drive succeeds, add logo link to university data
        const universityData = {
          name: formData.name,
          description: formData.description,
          location: formData.location,
          emailFormat: formData.emailFormat,
          contact: formData.contact,
          website: formData.website,
          phone: formData.phone,
          logo: `https://drive.google.com/uc?id=${responseUpload.data.fileId}`, // Assuming logo field in backend expects the Google Drive link
        };

        // Create university
        const responseCreate = await axios.post(
          "/api/universities",
          universityData
        );

        if (responseCreate.status === 201) {
          router.push("/Univercities"); // Navigate to universities page on success
        } else {
          console.error("Failed to create university");
        }
      } else {
        console.error("Failed to upload logo to Google Drive");
      }
    } catch (error) {
      console.error("An error occurred", error);
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
                <Label htmlFor="logoFile">University Logo</Label>
                <Input id="logoFile" type="file" onChange={handleFileChange} />
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
