export default function TechIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const common = { className, viewBox: "0 0 24 24", "aria-hidden": true as const };

  switch (name) {
    case "React":
      return (
        <svg {...common} fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.4" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path
            d="M8 7.5h1.7l5.1 7.3V7.5H16.5V16.5h-1.7L9.7 9.2V16.5H8V7.5Z"
            fill="var(--bg)"
          />
        </svg>
      );
    case "Angular":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path fill="#DD0031" d="M12 2.2 3.4 5.3l1.3 11.3L12 21.8l7.3-5.2 1.3-11.3L12 2.2Z" />
          <path fill="#C3002F" d="M12 2.2v19.6l7.3-5.2 1.3-11.3L12 2.2Z" />
          <path fill="#fff" d="M12 5.6 8.2 14.4h1.7l.7-1.8h3l.7 1.8h1.7L12 5.6Zm0 2.6 1.1 2.9h-2.2L12 8.2Z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            fill="#fff"
            d="M13.3 12.2H10.8V20H8.7v-7.8H6.2v-1.7h7.1v1.7Zm2.3-.1c.6 0 1.1.1 1.6.2.5.1.9.3 1.2.6.3.2.5.5.6.9.1.3.2.7.2 1.1v3.4c0 .2 0 .4.1.5.1.1.2.2.4.2h.3V20h-1.7c-.2-.1-.3-.2-.4-.4-.1-.2-.1-.4-.1-.6-.3.4-.6.6-1 .8-.4.2-.8.3-1.3.3-.5 0-.9-.1-1.2-.3-.4-.2-.6-.4-.8-.7-.2-.3-.3-.6-.3-1 0-.5.1-.8.4-1.1.3-.3.6-.5 1-.6.4-.2.9-.3 1.4-.3h1.7v-.6c0-.3-.1-.5-.3-.7-.2-.2-.5-.2-.9-.2-.5 0-.9.1-1.3.3l-.4-1.4c.3-.2.6-.3 1-.4.4-.1.8-.2 1.2-.2Zm.2 4.3h-1.4c-.3 0-.5.1-.7.2-.2.1-.2.3-.2.5 0 .2.1.4.3.5.2.1.4.2.7.2.3 0 .5 0 .8-.2.2-.1.4-.3.5-.5v-1Z"
          />
        </svg>
      );
    default:
      return null;
  }
}
