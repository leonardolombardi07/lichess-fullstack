"use client";

import PageError from "@/components/feedback/PageError";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <PageError error={error} reset={reset} />
      </body>
    </html>
  );
}
