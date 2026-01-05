// components/SvgIcon.tsx
"use client";

interface SvgIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const SvgIcon = ({
  name,
  size = 32,
  className = "",
}: SvgIconProps) => {
  return (
    <img
      src={`/${name}.svg`}
      width={size}
      height={size}
      className={`text-current ${className}`}
      alt={name}
      draggable={false}
    />
  );
};
