import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icon Collection",
  description:
    "Browse 40+ animated React icons. Hover to preview, click to copy the TSX code.",
};

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
