import { defineSchema, defineConfig } from "tinacms";

// Tina schema

// =================
// This is where you can define the shape of your content
export default defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ],
    },
    {
      label: "Blog Posts",
      name: "post",
      format: "mdx",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          required: true,
          name: "title",
        },
        {
          type: "image",
          name: "featureImg",
          required: true,
          label: "Feature Image",
        },
        {
          type: "string",
          label: "Excerpt",
          required: true,
          name: "excerpt",
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: "hh:mm A",
          },
        },
        {
          type: "rich-text",
          label: "Body",
          name: "body"
        }
      ],
    },
  ],
});

// ===============

// Tina config

const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return "/";
          }
        }

        if (["post"].includes(collection.name)) {
          return `/posts/${document.sys.filename}`;
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
  apiURL,
});
