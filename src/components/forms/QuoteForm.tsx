"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/contact-schema";
import { Button } from "@/components/primitives/Button";

type Props = {
  serviceName: string;
  endpoint?: string;
};

export function QuoteForm({ serviceName, endpoint = "/api/quote" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: serviceName },
  });

  async function onSubmit(data: QuoteInput) {
    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset({ service: serviceName });
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
          className="rounded-[var(--radius-md)] border border-[var(--ember)]/30 bg-[var(--ember)]/5 p-8"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-[var(--ember)] text-[var(--obsidian)]">
            <Check className="size-6" />
          </div>
          <h3 className="mt-6 font-display text-[1.8rem] leading-tight text-[var(--bone)]">
            Got it — thanks.
          </h3>
          <p className="mt-3 text-[0.98rem] leading-[1.6] text-[var(--linen)]">
            We'll reach out to schedule a consultation within two business days.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} aria-hidden />

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} type="text" autoComplete="name" className={fieldCls} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" autoComplete="email" className={fieldCls} />
            </Field>
          </div>

          <Field label="Phone (optional)" error={errors.phone?.message}>
            <input {...register("phone")} type="tel" autoComplete="tel" className={fieldCls} />
          </Field>

          <input {...register("service")} type="hidden" />

          <Field label={`Tell us about your ${serviceName.toLowerCase()} project`} error={errors.message?.message}>
            <textarea {...register("message")} rows={4} className={fieldCls} />
          </Field>

          <div className="flex items-center gap-4 pt-2">
            <Button type="submit" disabled={status === "loading"} variant="primary" size="md">
              {status === "loading" ? "Sending..." : "Request consultation"}
            </Button>
            {status === "error" && (
              <span className="font-mono text-[0.78rem] text-[var(--danger)]">
                Something went wrong. Try again or email us.
              </span>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

const fieldCls =
  "w-full rounded-[var(--radius-md)] border border-[var(--bone)]/15 bg-[var(--graphite)] px-4 py-3 text-[0.95rem] text-[var(--bone)] placeholder:text-[var(--ash)] transition-colors focus:border-[var(--ember)] focus:outline-none";

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ash)]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block font-mono text-[0.72rem] text-[var(--danger)]">{error}</span>}
    </label>
  );
}
