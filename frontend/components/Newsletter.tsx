import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="bg-white border-y border-ink/10 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
          Get the weekly AI tool digest
        </h2>
        <p className="text-ink/70 mb-8 text-lg">
          Every Friday — new tools, honest reviews, no spam.
        </p>

        {submitted ? (
          <div className="bg-free/10 border border-free/20 text-free p-6 rounded-sm inline-block">
            <p className="font-medium text-lg">Thanks! Check your inbox to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 bg-paper border border-ink/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent rounded-sm text-ink placeholder:text-ink/40"
            />
            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors rounded-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-ink/50 font-medium">
          Join 4,200+ designers already subscribed
        </p>
      </div>
    </section>
  );
};