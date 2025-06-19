import { contactInfo, socialLinks } from "@/data/contact-info";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
        <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Contact Information
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Here are the best ways to reach me
        </p>
        <div className="space-y-6 ">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center">
                <item.icon className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
        <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Follow Me
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Connect with me on social media
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className={`w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-sm ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
