import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Enquiry submitted successfully");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      } else {
        alert("❌ Failed to submit enquiry");
      }
    } catch (err) {
      alert("❌ Backend not reachable");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Enquiry Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />

        <button type="submit">Send Enquiry</button>
      </form>
    </div>
  );
}
