import { Image } from "_client/image";
import clsx from "clsx";
import svgToDataUri from "mini-svg-data-uri";
import { FC } from "react";
import { BackgroundSection } from ".shopify-cms/types/sections";

export const Background: FC<BackgroundSection> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <BackgroundBlock key={block.id} {...block} />
      ))}
    </>
  );
};

export type BackgroundBlockProps = {
  id: BackgroundSection["blocks"][number]["id"];
  settings: BackgroundSection["blocks"][number]["settings"];
  type: BackgroundSection["blocks"][number]["type"];
};

export const BackgroundBlock: FC<BackgroundBlockProps> = ({ id, settings }) => {
  return (
    <div id={`block--${id}`}>
      <style jsx>{`
        [id="background-${id}"] {
          ${settings.css}
        }
      `}</style>
      <div
        aria-hidden
        id={`background-${id}`}
        className={clsx(
          "pointer-events-none absolute inset-x-0 -z-10 select-none",
          {
            all: "",
            mobile: "sm:hidden",
            mobile_tablet: "lg:hidden",
            tablet: "hidden sm:block lg:hidden",
            tablet_desktop: "hidden sm:block",
            desktop: "hidden lg:block",
          }[settings.type]
        )}
        style={{
          background: settings.color || "transparent",
          marginTop: `${settings.marginTop}px`,
          height: `${settings.height}px`,
        }}
      >
        {settings.image
          ? <Image
              className="h-full w-full object-cover"
              style={{ opacity: settings.opacity / 100 }}
              src={settings.image?.src}
              width={settings.image?.width}
              height={settings.image?.height}
              alt={settings.image?.alt || "Background Blur Image"}
            />
          : null}
        {settings.svg
          ? <div
              className="relative h-full w-full overflow-hidden"
              style={{ opacity: settings.opacity / 100 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="background"
                aria-hidden
                className="image mx-auto h-full min-w-full"
                src={svgToDataUri(settings.svg)}
              />
            </div>
          : null}
      </div>
    </div>
  );
};
