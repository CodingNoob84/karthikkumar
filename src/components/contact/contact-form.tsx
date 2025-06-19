import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export const ContactForm = ({
  setShowSuccess,
}: {
  setShowSuccess: (value: boolean) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success message
    setShowSuccess(true);

    // Reset form fields after success message shows
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 500);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 h-full flex flex-col p-8"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
          Subject *
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          className="border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500"
        />
      </div>
      <div className="space-y-2 flex-1">
        <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello..."
          required
          className="min-h-[200px] border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 resize-none flex-1"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-slate-900 dark:bg-slate-700 hover:dark:bg-slate-600 hover:bg-slate-800 text-white cursor-pointer"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
};
