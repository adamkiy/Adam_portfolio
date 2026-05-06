'use client'
import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
      }),
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input name="name" required className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="Name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" type="email" required className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="email@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea name="message" rows={5} className="w-full rounded-xl border bg-transparent px-3 py-2" placeholder="Write your message here..." />
      </div>
      <button
        disabled={status === 'sending'}
        data-btn
        className="btn-primary inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
          <CheckCircle className="w-4 h-4 shrink-0" /> Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="w-4 h-4 shrink-0" /> Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
