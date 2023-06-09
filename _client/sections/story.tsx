import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { BlockImageText } from "_client/sections/block-image-text";
import { FC } from "react";
import { StorySection } from ".shopify-cms/types/sections";

export const Story: FC<StorySection> = ({ id, blocks, settings, type }) => {
  return (
    <>
      <Wrapper
        maxWidth="xl"
        spacing={settings.spacing}
        spacingTop={settings.spacing_top}
        spacingBottom={settings.spacing_bottom}
      >
        <div className="flex flex-col gap-8 md:gap-24">
          {blocks.map((block) => {
            switch (block.type) {
              case "heading":
                return <BlockHeading key={block.id} {...block} />;
              case "image-text":
                return <BlockImageText key={block.id} {...block} />;
            }
          })}
        </div>
      </Wrapper>
    </>
  );
};
