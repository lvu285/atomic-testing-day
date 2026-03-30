import { buildSearchEngine } from "https://staticdev.cloud.coveo.com/headless/v3/headless.esm.js";

const {
  VITE_ORGANIZATION_ID,
  VITE_ENVIRONMENT,
  VITE_ACCESS_TOKEN,
  VITE_PIPELINE,
  VITE_SEARCH_HUB,
  VITE_ORGANIZATION_ID_PROD,
  VITE_ENVIRONMENT_PROD,
  VITE_ACCESS_TOKEN_PROD,
  VITE_PIPELINE_PROD,
  VITE_SEARCH_HUB_PROD,
} = import.meta.env;

export const searchEngine = buildSearchEngine({
  configuration: {
    organizationId: VITE_ORGANIZATION_ID,
    environment: VITE_ENVIRONMENT,
    accessToken: VITE_ACCESS_TOKEN,
    search: {
      pipeline: VITE_PIPELINE,
      searchHub: VITE_SEARCH_HUB,
    },
    analytics: {
      apiBaseUrl: " https://analyticsdev.cloud.coveo.com/analytics/v1/",
      analyticsMode: "legacy",
    },
  },
});

export const searchEngineProd = buildSearchEngine({
  configuration: {
    organizationId: VITE_ORGANIZATION_ID_PROD,
    environment: VITE_ENVIRONMENT_PROD,
    accessToken: VITE_ACCESS_TOKEN_PROD,
    search: {
      pipeline: VITE_PIPELINE_PROD,
      searchHub: VITE_SEARCH_HUB_PROD,
    },
    analytics: {
      analyticsMode: "legacy",
    },
  },
});
