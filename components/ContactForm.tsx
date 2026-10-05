'use client'

import { useEffect, useState } from 'react'

const subjects = [
  { value: '',            label: 'Select enquiry type…' },
  { value: 'partnership', label: 'Partnership / venture' },
  { value: 'agencyops',   label: 'AgencyOps' },
  { value: 'celestial',   label: 'Celestial app' },
  { value: 'general',     label: 'General enquiry' },
]

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get('subject')
    if (preset && subjects.some((s) => s.value === preset)) {
      setFields((prev) => ({ ...prev, subject: preset }))
    }
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subjectLabel = subjects.find(s => s.value === fields.subject)?.label || fields.subject
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    )
    const subjectLine = encodeURIComponent(`[Connectum Labs] ${subjectLabel}`)
    window.location.href = `mailto:hello@connectumlabs.com?subject=${subjectLine}&body=${body}`
  }

  const inputClass =
    'w-full bg-white border border-rule rounded px-3.5 py-2.5 text-sm text-ink placeholder:text-mid/50 outline-none focus:border-accent transition-colors duration-150 font-light'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-[0.62rem] tracking-[0.12em] uppercase text-mid mb-1.5" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            value={fields.name}
            onChange={set('name')}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-mono text-[0.62rem] tracking-[0.12em] uppercase text-mid mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            value={fields.email}
            onChange={set('email')}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[0.62rem] tracking-[0.12em] uppercase text-mid mb-1.5" htmlFor="subject">
          Enquiry type
        </label>
        <select
          id="subject"
          value={fields.subject}
          onChange={set('subject')}
          className={inputClass}
        >
          {subjects.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-mono text-[0.62rem] tracking-[0.12em] uppercase text-mid mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us what you're working on…"
          value={fields.message}
          onChange={set('message')}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        Send message →
      </button>
      <p className="text-[0.7rem] text-mid font-light text-center">
        Opens your mail client · Alternatively email us directly at{' '}
        <a href="mailto:hello@connectumlabs.com" className="text-accent hover:underline">
          hello@connectumlabs.com
        </a>
      </p>
    </form>
  )
}
