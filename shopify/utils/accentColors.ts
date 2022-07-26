import { Sections } from ".shopify-cms/types/sections";
import { ShopifySection } from ".shopify-cms/types/shopify";

export const accentColors: ShopifySection["settings"] = [
  {
    type: "header",
    content: "Accents",
  },
  {
    type: "color",
    id: "color_accent",
    label: "Color_accent",
  },
  {
    type: "color",
    id: "color_accent_contrast",
    label: "Color_accent_contrast",
  },
  {
    type: "color",
    id: "color_accent_secondary",
    label: "Color_accent_secondary",
  },
  {
    type: "color",
    id: "color_accent_secondary_contrast",
    label: "Color_accent_secondary_contrast",
  },
  {
    type: "header",
    content: "Accents Dark",
  },
  {
    type: "color",
    id: "color_accent_dark",
    label: "Color_accent_dark",
  },
  {
    type: "color",
    id: "color_accent_contrast_dark",
    label: "Color_accent_contrast_dark",
  },
  {
    type: "color",
    id: "color_accent_secondary_dark",
    label: "Color_accent_secondary_dark",
  },
  {
    type: "color",
    id: "color_accent_secondary_contrast_dark",
    label: "Color_accent_secondary_contrast_dark",
  },
];
