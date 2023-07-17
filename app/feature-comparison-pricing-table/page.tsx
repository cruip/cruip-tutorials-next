export const metadata = {
  title: 'Feature Comparison Pricing Table - Cruip Tutorials',
  description: 'Page description',
}

import FeatureComparisonPricing from '@/components/feature-comparison-pricing'
import Banner from '@/components/banner'

export default function PricingTabsPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <FeatureComparisonPricing />
        </div>
      </main>
      
      <Banner tutorialUrl="https://cruip.com/how-to-create-a-feature-comparison-table-with-tailwind-css/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/feature-comparison-pricing.tsx" />
    </>
  )
}