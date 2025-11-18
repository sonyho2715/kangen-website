'use client';

export default function CalendlyButton() {
  const openCalendly = () => {
    window.open('https://calendly.com/blessingsandfreedom/60min', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={openCalendly}
        className="fixed bottom-6 right-6 z-40 bg-kangen-blue hover:bg-kangen-darkblue text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold transition-all hover:scale-105 hover:shadow-xl group"
        aria-label="Book a Session"
      >
        <span className="text-2xl">📅</span>
        <span className="hidden sm:inline">Book Free Session</span>
        <span className="sm:hidden">Book Now</span>
      </button>

      {/* Tooltip on hover (desktop only) */}
      <style jsx>{`
        @media (min-width: 640px) {
          button:hover::before {
            content: 'Schedule your free 60-minute consultation with Lee Meadows';
            position: absolute;
            bottom: 100%;
            right: 0;
            background: #1e3a8a;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            white-space: nowrap;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </>
  );
}
