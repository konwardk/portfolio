import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    // ... existing info
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
    { icon: <Linkedin />, href: "#", color: "hover:text-blue-600" },
    { icon: <Twitter />, href: "#", color: "hover:text-sky-500" },
  ];

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
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-card border border-border rounded-3xl shadow-xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subject" className="text-sm font-semibold ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};