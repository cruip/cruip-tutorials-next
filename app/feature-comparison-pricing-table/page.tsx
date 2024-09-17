export const metadata = {
  title: "Feature Comparison Pricing Table - Cruip Tutorials",
  description: "Page description",
};

import FeatureComparisonPricing from "@/components/feature-comparison-pricing";
import Banner from "@/components/banner";

export default function FeatureComparisonPricingPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <FeatureComparisonPricing />
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-create-a-feature-comparison-table-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/feature-comparison-pricing.tsx"
      />
    </>
  );
}
