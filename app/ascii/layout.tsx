import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASCII icons — LiveIcons",
  description: "Frame-based monospace ASCII icons with hover and play animations.",
};

export default function AsciiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
