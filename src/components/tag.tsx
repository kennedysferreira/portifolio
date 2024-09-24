import { tv, type VariantProps } from "tailwind-variants";

const spanVariants = tv({
  variants: {
    variant: {
      primary: "bg-green-600/20 text-green-500",
      secondary: "bg-purple-700/20 text-purple-500",
    },
  },
  defaultVariants: {
    variant: "primary", 
  },
});

interface TagProps extends VariantProps<typeof spanVariants> {
  children: string;
}

export function Tag({ children, variant }: TagProps) {
  return (
    <span className={spanVariants({ variant }) + " rounded-full  px-4 py-1 text-xs font-medium leading-5"}>
      {children}
    </span>
  );
}
