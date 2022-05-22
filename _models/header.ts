import { ShopifySection } from "types/shopify";

export const header: ShopifySection = {
  name: "Header",
  settings: [
    {
      type: "product",
      id: "product",
      label: "Product",
    },
    {
      type: "select",
      id: "layout_mode",
      label: "Layout mode",
      options: [
        {
          value: "collage",
          label: "Collage",
        },
        {
          value: "grid",
          label: "Grid",
        },
      ],
      default: "grid",
    },
    {
      type: "radio",
      id: "pagination_mode",
      label: "Pagination mode",
      options: [
        {
          value: "pagination",
          label: "Standard pagination",
        },
        {
          value: "infinite_scrolling",
          label: "Infinite scrolling",
        },
      ],
      default: "pagination",
    },
    {
      type: "text",
      id: "cool",
      label: "Cool",
    },
    {
      type: "checkbox",
      id: "enable_tag_filte-rs",
      label: "Enable filtering by product tag",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_sort_by",
      label: "Enable collection sorting",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_type_filters",
      label: "Enable filtering by product type",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_vendor_filters",
      label: "Enable filtering by product vendor",
      default: true,
    },
    {
      type: "checkbox",
      id: "show_vendor",
      label: "Show vendor",
      default: true,
    },
    {
      type: "checkbox",
      id: "show_quick_shop",
      label: "Show quick shop",
      default: true,
    },
    {
      type: "header",
      content: "Grid",
      info: "Those settings are only used if the grid layout is selected.",
    },
    {
      type: "checkbox",
      id: "grid_remove_spacing",
      label: "Remove spacing between grid items",
      default: false,
    },
    {
      type: "select",
      id: "grid_items_per_row",
      label: "Items per row",
      options: [
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
      ],
      default: "4",
    },
    {
      type: "select",
      id: "number_of_rows",
      label: "Number of rows",
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
        {
          value: "7",
          label: "7",
        },
        {
          value: "8",
          label: "8",
        },
      ],
      default: "4",
    },
    {
      type: "header",
      content: "Custom Brand Page",
    },
    {
      type: "checkbox",
      id: "brand_page",
      label: "Custom Brand Content",
      default: false,
    },
    {
      type: "header",
      content: "Slider Banner",
    },
    {
      type: "checkbox",
      id: "slider_banner",
      label: "Slider Banner",
      default: false,
    },
  ],
};
