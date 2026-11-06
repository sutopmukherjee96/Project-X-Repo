import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { default: Component } = await import("./HomePage");
      return { Component };
    },
  },
  {
    path: "/work/:projectSlug",
    lazy: async () => {
      const { default: Component } = await import("./CaseStudyPage");
      return { Component };
    },
  },
  {
    path: "/about",
    lazy: async () => {
      const { default: Component } = await import("./AboutPage");
      return { Component };
    },
  },
  {
    path: "*",
    lazy: async () => {
      const { default: Component } = await import("./NotFoundPage");
      return { Component };
    },
  },
]);
