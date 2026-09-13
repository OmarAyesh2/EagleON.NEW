"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { lang, isRtl } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100dvh] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 text-start">

        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6 leading-none"
          >
            {lang === "ar" ? "لنبدأ محادثة استراتيجية" : "LET'S START A STRATEGIC CONVERSATION"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray2 text-base md:text-lg leading-relaxed mb-12"
          >
            {lang === "ar"
              ? "سواء كنت تبحث عن شريك استراتيجي لمشروع كامل، أو تحتاج لاستشارة حول تحدٍ رقمي محدد — نحن هنا للاستماع ومساعدتك."
              : "Whether you're looking for a strategic partner for a complete project or need consultation on a specific digital challenge—we're here to listen and help."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Contact Info Rows */}
            <div className="flex items-start gap-4 py-6 border-b border-white/10 last:border-0">
              <Mail className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
              <div>
                <div className="text-sm text-brand-gray2 uppercase tracking-widest mb-1">{lang === "ar" ? "راسلنا" : "Email Us"}</div>
                <a href="mailto:info@eagleon.digital" className="text-white text-base md:text-lg font-medium hover:text-brand-primary transition-colors">
                  info@eagleon.digital
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 py-6 border-b border-white/10 last:border-0">
              <Phone className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
              <div>
                <div className="text-sm text-brand-gray2 uppercase tracking-widest mb-1">{lang === "ar" ? "اتصل بنا" : "Call Us"}</div>
                <a href="tel:+962793188188" dir="ltr" className="text-white text-base md:text-lg font-medium hover:text-brand-primary transition-colors inline-block">
                  +962 7 9318 8188
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 py-6 border-b border-white/10 last:border-0">
              <MapPin className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
              <div>
                <div className="text-sm text-brand-gray2 uppercase tracking-widest mb-1">{lang === "ar" ? "زورنا" : "Visit Us"}</div>
                <a href="https://maps.app.goo.gl/rGj9HyRHYZc4SFYr6" target="_blank" rel="noreferrer" className="text-white text-base md:text-lg font-medium hover:text-brand-primary transition-colors">
                  {lang === "ar"
                    ? "٢٤٦، الطابق الخامس، مركز رام الله، شارع خالد بن الوليد، جبل الحسين، عمان"
                    : "246, 5th floor, Ramalla center, Khalid Bin Al Waleed St, Jabal Al Hussain, Amman"}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-brand-gray2 text-sm leading-relaxed mt-8"
          >
            {lang === "ar"
              ? "بعد ما تبعثلنا طلبك، فريقنا بعمّان بيراجع تفاصيل مشروعك خلال 48 ساعة ويرجعلك بخطوات واضحة: مكالمة قصيرة لفهم أهدافك، ثم عرض سعر ثابت ومفصّل بدون رسوم مفاجئة."
              : "Once you reach out, our team in Amman reviews your project details within 48 hours and comes back with clear next steps: a short call to understand your goals, followed by a fixed, itemized quote with no surprise fees."}
          </motion.p>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white text-center mb-3">
                  {lang === "ar" ? "تم إرسال رسالتك!" : "Message Sent!"}
                </h3>
                <p className="text-brand-gray2 text-center mb-6">
                  {lang === "ar" ? "سنرد عليك خلال 48 ساعة." : "We'll get back to you within 48 hours."}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rtl:pt-2.5 rtl:pb-1.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                  {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-brand-gray2 mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "الاسم الكامل" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === "ar" ? "اسمك الكامل" : "Your full name"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-brand-gray2/50 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-brand-gray2 mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === "ar" ? "you@company.com" : "you@company.com"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-brand-gray2/50 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-brand-gray2 mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+962 7XX XXX XXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-brand-gray2/50 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-brand-gray2 mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "الخدمة المطلوبة" : "Service Interested In"}
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none [&>option]:bg-[#01080F] [&>option]:text-white"
                  >
                    <option value="">{lang === "ar" ? "اختر خدمة..." : "Select a service..."}</option>
                    <option value={lang === "ar" ? "تطوير مواقع" : "Web Development"}>{lang === "ar" ? "تطوير مواقع" : "Web Development"}</option>
                    <option value={lang === "ar" ? "هوية بصرية" : "Brand Identity"}>{lang === "ar" ? "هوية بصرية" : "Brand Identity"}</option>
                    <option value={lang === "ar" ? "تصميم ثلاثي الأبعاد" : "CGI & VFX"}>{lang === "ar" ? "تصميم ثلاثي الأبعاد" : "CGI & VFX"}</option>
                    <option value={lang === "ar" ? "سوشيال ميديا" : "Social Media"}>{lang === "ar" ? "سوشيال ميديا" : "Social Media"}</option>
                    <option value={lang === "ar" ? "إنتاج إبداعي" : "Media Production"}>{lang === "ar" ? "إنتاج إبداعي" : "Media Production"}</option>
                    <option value={lang === "ar" ? "أخرى" : "Other"}>{lang === "ar" ? "أخرى" : "Other"}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-brand-gray2 mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "تفاصيل المشروع" : "Project Details"}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === "ar" ? "أخبرنا عن مشروعك، الجدول الزمني، وأهدافك..." : "Tell us about your project, timeline, and goals..."}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-brand-gray2/50 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm text-center mb-4">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 flex items-center justify-center gap-2 rtl:pt-3.5 rtl:pb-2.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-300",
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed bg-brand-primary text-black"
                      : "bg-brand-primary text-black hover:shadow-[0_0_30px_rgba(123,193,255,0.3)]"
                  )}
                >
                  {isSubmitting ? (
                    lang === "ar" ? "جارٍ الإرسال..." : "Sending..."
                  ) : (
                    <>
                      <span>{lang === "ar" ? "إرسال" : "Send"}</span>
                      <Send className={cn("w-4 h-4", isRtl ? "mr-2 scale-x-[-1]" : "ml-2")} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
