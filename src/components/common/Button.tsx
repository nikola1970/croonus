import { ComponentProps, ElementType, ReactNode } from "react";
import Link from "next/link";

type ButtonBaseProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  href?: string;
};

type ButtonProps<T extends ElementType> = ButtonBaseProps<T> &
  Omit<ComponentProps<T>, keyof ButtonBaseProps<T>>;

export function Button<T extends ElementType = "button">({
  as,
  children,
  className = "",
  href,
  ...rest
}: ButtonProps<T>) {
  const buttonStyles = `bg-anker px-10 py-2 text-white text-sm inline-flex items-center justify-center cursor-pointer hover:brightness-[110%] transition-all ${className}`;

  if (href && !as) {
    return (
      <Link href={href} className={buttonStyles} {...rest}>
        {children}
      </Link>
    );
  }

  // Use the specified element type or default to button
  const Component = as || "button";

  return (
    <Component className={buttonStyles} {...rest}>
      {children}
    </Component>
  );
}
