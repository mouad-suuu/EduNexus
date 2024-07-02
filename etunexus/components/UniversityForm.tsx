// components/UniversityForm.tsx
import { useState } from "react";

interface UniversityFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

const UniversityForm: React.FC<UniversityFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      logoUrl: "",
      description: "",
      location: "",
      academicEmailFormat: "",
      websiteUrl: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="logoUrl"
        value={formData.logoUrl}
        onChange={handleChange}
        placeholder="Logo URL"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <input
        name="academicEmailFormat"
        value={formData.academicEmailFormat}
        onChange={handleChange}
        placeholder="Academic Email Format"
        required
      />
      <input
        name="websiteUrl"
        value={formData.websiteUrl}
        onChange={handleChange}
        placeholder="Website URL"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UniversityForm;
