"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative border-t border-line bg-bg">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 md:py-40">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end mb-16 md:mb-20">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
            <span className="w-10 h-px bg-accent" />
            {"// "} Start a project
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9] text-balance">
            Let&apos;s build something
            <br />
            <em className="text-accent">worth standing in.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 md:gap-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <Field label="Your name" name="name" placeholder="Jane Appleseed" />
              <Field label="Email" name="email" type="email" placeholder="jane@domain.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="(267) 000-0000" />
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-3 font-mono">
                  Project Type
                </label>
                <select
                  name="type"
                  defaultValue=""
                  className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-base"
                >
                  <option value="" disabled className="bg-bg">Select one</option>
                  <option className="bg-bg">Residential renovation</option>
                  <option className="bg-bg">Kitchen</option>
                  <option className="bg-bg">Bathroom</option>
                  <option className="bg-bg">Commercial build-out</option>
                  <option className="bg-bg">Addition</option>
                  <option className="bg-bg">Outdoor / Deck</option>
                  <option className="bg-bg">Other</option>
                </select>
              </div>
            </div>

            <Field label="Address" name="address" placeholder="Project site address" />

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-3 font-mono">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Scope, timeline, references, anything we should know."
                className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-base resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-fg-dim font-mono">
                5% off your quote when you submit this form
              </div>
              <button
                type="submit"
                className="btn-primary"
                disabled={sent}
              >
                {sent ? "Message sent — we'll be in touch" : "Send message"}
                {!sent && <ArrowUpRight size={14} strokeWidth={1.5} />}
              </button>
            </div>
          </motion.form>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="gradient-border p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                // Direct line
              </div>
              <a
                href="tel:+12672034880"
                className="group font-display text-3xl md:text-5xl leading-none flex items-center gap-3"
              >
                <Phone size={22} className="text-accent" strokeWidth={1.2} />
                (267) 203-4880
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.2}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:info@nuviewconstructions.com"
                className="group mt-6 flex items-center gap-3 text-base text-fg-dim hover:text-fg transition-colors"
              >
                <Mail size={16} className="text-accent" strokeWidth={1.3} />
                info@nuviewconstructions.com
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <InfoBlock
                icon={<MapPin size={16} className="text-accent" strokeWidth={1.3} />}
                title="Center City"
                lines={["1401 Spruce St", "Philadelphia, PA 19102"]}
              />
              <InfoBlock
                icon={<MapPin size={16} className="text-accent" strokeWidth={1.3} />}
                title="Rittenhouse"
                lines={["2006 Chestnut St", "Philadelphia, PA 19103"]}
              />
            </div>

            <div className="border-t border-line pt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-4 flex items-center gap-2">
                <Clock size={12} /> Hours
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="text-fg-dim">Mon – Fri</span>
                <span>8:00 – 20:00</span>
                <span className="text-fg-dim">Saturday</span>
                <span>9:00 – 16:00</span>
                <span className="text-fg-dim">Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="border-t border-line pt-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-4">
                Service area
              </div>
              <div className="text-sm text-fg-dim">
                Philadelphia (all neighborhoods) · Main Line · South Jersey
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-3 font-mono">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-b border-line focus:border-accent outline-none py-3 text-base placeholder:text-fg-muted"
      />
    </div>
  );
}

function InfoBlock({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="border border-line p-6 rounded-xl hover:border-accent/50 transition-colors">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-fg-dim font-mono mb-4">
        {icon} {title}
      </div>
      {lines.map((l) => (
        <div key={l} className="text-sm">
          {l}
        </div>
      ))}
    </div>
  );
}
