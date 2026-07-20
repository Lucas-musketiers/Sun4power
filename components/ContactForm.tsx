"use client";

import { useState } from "react";

// Formsubmit.co mailt de inzending naar dit adres. Gratis, geen account nodig.
// Bij de ALLEREERSTE inzending stuurt Formsubmit een eenmalige bevestigingsmail
// naar dit adres — Paul klikt die link één keer, daarna komen alle aanvragen
// automatisch binnen. Wil je de mail verbergen in de broncode? Vervang dit door
// de gehashte endpoint die je na activatie van Formsubmit krijgt.
const ENDPOINT = "https://formsubmit.co/ajax/paul@sun4power.be";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const data = new FormData(form);
    data.append("_subject", "Nieuwe adviesaanvraag via de website");
    data.append("_template", "table");
    data.append("_captcha", "false");
    // Zet reply-to op het ingevulde e-mailadres, zodat Paul direct kan antwoorden.
    const email = String(data.get("E-mailadres") || "");
    if (email) data.append("_replyto", email);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json: { success?: string | boolean; message?: string } =
        await res.json();
      const ok =
        res.ok && (json.success === true || json.success === "true");
      if (!ok) throw new Error(json.message || "Er ging iets mis.");

      window.umami?.track("Lead - formulier verzonden");
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Er ging iets mis. Probeer het opnieuw of bel ons."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 rounded-xl border border-sunset/50 bg-sunset/10 p-6 text-center">
        <p className="text-lg font-bold text-ink">Bedankt! 🎉</p>
        <p className="mt-1 text-sm text-muted">
          Je aanvraag is verstuurd. Paul neemt zo snel mogelijk vrijblijvend
          contact met je op.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-ink placeholder-muted outline-none transition-colors focus:border-sunset focus:ring-2 focus:ring-sunset/40";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {/* Honeypot tegen spam */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="voornaam" className="sr-only">
          Voornaam
        </label>
        <input
          id="voornaam"
          name="Voornaam"
          type="text"
          required
          autoComplete="given-name"
          placeholder="Voornaam"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          E-mailadres
        </label>
        <input
          id="email"
          name="E-mailadres"
          type="email"
          required
          autoComplete="email"
          placeholder="E-mailadres"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="telefoon" className="sr-only">
          Telefoonnummer
        </label>
        <input
          id="telefoon"
          name="Telefoonnummer"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Telefoonnummer"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="vraag" className="sr-only">
          Heb je specifieke vragen?
        </label>
        <textarea
          id="vraag"
          name="Vraag"
          rows={3}
          placeholder="Heb je specifieke vragen? (optioneel)"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        data-umami-event="Contactformulier - verzenden"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-sunset px-7 py-4 text-lg font-semibold text-navy-900 shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-sunset-deep hover:shadow-cta-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Bezig met versturen…" : "Versturen →"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">{error}</p>
      )}
    </form>
  );
}
