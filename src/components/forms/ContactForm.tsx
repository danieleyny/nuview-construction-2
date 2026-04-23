"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { budgets, contactSchema, projectTypes, type ContactInput } from "@/lib/contact-schema";
import { Button } from "@/components/primitives/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[var(--radius-md)] border border-[var(--ember)]/30 bg-[var(--ember)]/5 p-10"
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-[var(--ember)] text-[var(--obsidian)]">
            <Check className="size-6" />
          </div>
          <h3 className="mt-8 font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-[var(--bone)]">
            Thanks — we'll be in touch.
          </h3>
          <p className="mt-4 max-w-md text-[1rem] leading-[1.6] text-[var(--linen)]">
            One of us will reply within two business days to schedule your free on-site consultation.
            For anything urgent, call us at (267) 203-4880.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} aria-hidden />

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} type="text" autoComplete="name" className={fieldCls} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" autoComplete="email" className={fieldCls} />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone")} type="tel" autoComplete="tel" className={fieldCls} />
            </Field>
            <Field label="Project ZIP" error={errors.zip?.message}>
              <input {...register("zip")} type="text" inputMode="numeric" className={fieldCls} />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Project type" error={errors.projectType?.message}>
              <select {...register("projectType")} className={fieldCls}>
                <option value="">Select…</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field label="Estimated budget" error={errors.budget?.message}>
              <select {...register("budget")} className={fieldCls}>
                <option value="">Select…</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Tell us about the project" error={errors.message?.message}>
            <textarea {...register("message")} rows={6} className={fieldCls} />
          </Field>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button type="submit" disabled={status === "loading"} variant="primary" size="lg">
              {status === "loading" ? "Sending..." : "Send it"}
            </Button>
            {status === "error" && (
              <span className="font-mono text-[0.78rem] text-[var(--danger)]">
                Something went wrong. Try again or email info@nuviewconstructions.com.
              </span>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

const fieldCls =
  "w-full rounded-[var(--radius-md)] border border-[var(--bone)]/15 bg-[var(--graphite)] px-4 py-3.5 text-[0.98rem] text-[var(--bone)] placeholder:text-[var(--ash)] transition-colors focus:border-[var(--ember)] focus:outline-none";

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ash)]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block font-mono text-[0.72rem] text-[var(--danger)]">{error}</span>}
    </label>
  );
}
