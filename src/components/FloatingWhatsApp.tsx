import styles from "@/css/FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/33651437980"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contact SUPRATEL by WhatsApp"
      title="WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.whatsappIcon}
      >
        <path
          fill="currentColor"
          d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.3.9.9-3.2-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-1.4-.7-2.5-1.5-3.4-3-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.7-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.1 2.2.9 3.1 1 4.2.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.6-.3Z"
        />
      </svg>
    </a>
  );
}
