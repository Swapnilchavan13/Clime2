import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";

const RegistrationPage: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your API or email submission logic
    alert(
      `Registration Submitted!\nName: ${name}\nEmail: ${email}\nOrganization: ${organization}\nPhone: ${phone}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-6">
      <Navbar />
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Subscription Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Organization Name"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600"
          />

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;