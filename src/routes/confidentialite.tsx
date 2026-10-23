import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPage } from "@/components/PrivacyPage";
import { getPageHead } from "@/lib/site-metadata";

export const Route = createFileRoute("/confidentialite")({
  head: () => getPageHead("fr", "privacy"),
  component: () => <PrivacyPage language="fr" />,
});
