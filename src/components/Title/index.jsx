import React from "react";

const Title = ({ variant = "text-base", className = "", children, ...props }) => {
  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl ||
        variant.lg ||
        variant.md ||
        variant.sm ||
        variant.xs ||
        "text-base";

  const _variantStyles =
    typeof variant !== "object"
      ? variant
      : {
          xs: variant.xs,
          sm: variant.sm || variant.xs,
          md: variant.md || variant.sm || variant.xs,
          lg: variant.lg || variant.md || variant.sm || variant.xs,
          xl:
            variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
        };

  // Define Tailwind CSS classes based on the variant
  let tailwindClasses = "";
  if (typeof _variantStyles === "object") {
    tailwindClasses = Object.entries(_variantStyles)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(" ");
  }

  return (
    <p
      className={`${_component} ${tailwindClasses} font-semibold ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Title;
