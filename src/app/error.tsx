"use client";

import PageError from "@/components/feedback/PageError";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <PageError error={error} reset={reset} />;
}
