import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPage } from "@/components/PrivacyPage";
import { getPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/en/privacy")({
  head: () => getPageHead("en", "privacy"),
  component: () => <PrivacyPage language="en" />,
});
