import React, { memo } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardStyles = tv({
  variants: {
    variant: {
      primary:
        "group relative flex flex-col pb-1 transition-all lg:gap-3 gap-2 ",
      secondary:
        "group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
    },
  },
});

type CardVariants = VariantProps<typeof cardStyles>;

interface CardProps extends CardVariants {
  contentOne?: React.ReactNode;
  contentTwo?: React.ReactNode;
  title?: string | React.ReactNode;
  subTitleOne?: string;
  subTitleTwo?: string;
  description?: string;
  href?: string;
}

const CardHeader = ({ title }: { title?: string | React.ReactNode }) => (
  <header
    className="font-semibold text-xs leading-snug uppercase tracking-wide  sm:col-span-2"
    aria-label={typeof title === "string" ? title : undefined}
  >
    {title}
  </header>
);

const CardContent = ({
  subTitle,
  content,
}: {
  subTitle?: string;
  content?: React.ReactNode;
}) =>
  subTitle ? (
    <div className="z-10 ">
      <h3 className="leading-snug text-slate-300">{subTitle}</h3>
      <ul className="mt-2 mb-2 flex gap-2 flex-wrap" aria-label="Technologies used">
        {content}
      </ul>
    </div>
  ) : null;

const CardBody = ({
  variant,
  title,
  subTitleOne,
  subTitleTwo,
  contentOne,
  contentTwo,
  description,
}: Omit<CardProps, "href">) => {
  return variant === "primary" ? (
    <>
      <CardHeader title={title} />
      {description && <p className="text-sm leading-normal">{description}</p>}
      <CardContent subTitle={subTitleOne} content={contentOne} />
      <CardContent subTitle={subTitleTwo} content={contentTwo} />
    </>
  ) : (
    <>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="text-slate-200">{subTitleOne}</h3>
        {description && <p className="mt-2 text-sm leading-normal">{description}</p>}
        <ul className="mt-2 flex gap-2 flex-wrap" aria-label="Technologies used">
          {contentOne}
        </ul>
      </div>
      {typeof title === "string" && (
        <img
          src={title}
          className="rounded-md border w-32 h-20 border-slate-200/10 transition group-hover:border-slate-400/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          alt=""
        />
      )}
    </>
  );
};

// Componente Cards: mantém separação de preocupações
export const Cards = memo(
  ({
    contentOne,
    contentTwo,
    title,
    subTitleOne,
    subTitleTwo,
    description,
    variant,
    href,
  }: CardProps) => {
    const cardClass = cardStyles({ variant });

    // Aplicar hover condicional apenas para o variant secondary
    const cardHoverEffect =
      variant === "secondary" ? (
        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition duration-300 lg:-inset-x-6 lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_#94a3b829]" />
      ) : (
        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition duration-300 lg:-inset-x-6" />
      );

    const CardWrapper = (
      <div className={cardClass}>
        {cardHoverEffect}
        <CardBody
          variant={variant}
          title={title}
          subTitleOne={subTitleOne}
          subTitleTwo={subTitleTwo}
          contentOne={contentOne}
          contentTwo={contentTwo}
          description={description}
        />
      </div>
    );

    return href ? (
      <a href={href} className="block" target="_blank">
        {CardWrapper}
      </a>
    ) : (
      CardWrapper
    );
  }
);
