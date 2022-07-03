import { Section } from "_client/layout/section";
import clsx from "clsx";
import { FC } from "react";
import { BlockquoteSection } from "types/sections";

export const BlockBlockquote: FC<BlockquoteSection> = ({ id, settings, type }) => {
  return (
    <Section id={id} type={type} container="xl" padding="base">
      <figure className="relative mx-auto max-w-prose px-4">
        <div className="absolute inset-0 -z-10 flex h-[84%] select-none items-center justify-center">
          <div className="relative aspect-1 h-full  rounded-[0_0_100%_0] bg-sky-200/40">
            <div className="absolute aspect-1 h-[47%] rounded-[0_0_100%_0] bg-white"></div>
          </div>
          <div className="relative aspect-1 h-full rounded-[0_0_100%_0] bg-sky-200/40">
            <div className="absolute aspect-1 h-[47%] rounded-[0_0_100%_0] bg-white"></div>
          </div>
        </div>
        <blockquote
          className={clsx(
            "relative mb-3 max-w-xl text-base leading-relaxed tracking-tight text-slate-600 md:text-lg xl:max-w-2xl",
            settings.quotation_marks && [
              "b:absolute b:-left-3 b:-top-3 b:text-4xl b:open-quote",
              "a:relative a:-bottom-3 a:-right-2 a:text-4xl a:close-quote a:leading-0",
            ]
          )}
        >
          {settings.quote}
        </blockquote>

        <figcaption>
          <h3 className="text-lg font-semibold text-slate-800">{settings.author}</h3>
          <h4 className="text-sm text-slate-400">{settings.job_title}</h4>
        </figcaption>
      </figure>
    </Section>
  );
};
