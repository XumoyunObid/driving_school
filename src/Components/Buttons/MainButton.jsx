import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "text-md font-bold rounded-full",
        {
          "bg-[var(--main-color)] text-white py-[16px] px-[24px]":
            variant === "primary",
          "border-[var(--main-color)] bg-transparent text-[var(--main-color)] py-[16px] px-[24px]":
            variant === "secondary",
          "border-[var(--main-color)] font-medium py-[4px] px-[16px] border-2 border-dotted bg-white text-[var(--main-color)]":
            variant === "dotted",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
