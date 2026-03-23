import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "dipankorkonwar15@gmail.com",
      href: "mailto:dipankorkonwar15@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9101839882",
      href: "tel:+919101839882"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Assam, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github />, href: "#", color: "hover:text-foreground" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/dipankor-konwar/", color: "hover:text-blue-600" },
    { icon: <Twitter />, href: "#", color: "hover:text-sky-500" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setFormStatus("success");
          setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      }, (error) => {
          console.log(error.text);
          setFormStatus("error");
      });
  };

  return (
    <section className="relative z-10 py-24 px-4 bg-background/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-lg text-foreground/60 text-center max-w-2xl">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className={`p-3 bg-card border border-border rounded-xl text-foreground/60 transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2"
          >
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 bg-card border border-primary/20 rounded-3xl text-center space-y-4"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-foreground/60">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-card border border-border rounded-3xl shadow-xl">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-semibold ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-semibold ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="subject" className="text-sm font-semibold ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-2">
                  <button
                    disabled={formStatus === "submitting"}
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                  {formStatus === "error" && (
                    <p className="mt-4 text-red-500 text-center text-sm">Something went wrong. Please check your EmailJS configuration.</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
