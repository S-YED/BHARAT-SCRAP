export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917204429018?text=Hi%20Bharat%20Scrap!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-24 right-6 md:bottom-8 md:right-8 glass-fab w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border border-white/50 active:scale-90 md:hover:scale-110 transition-transform animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <span
        className="material-symbols-outlined text-primary text-3xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
    </a>
  )
}
