export const metadata = {
  title: 'Pricing Table - Cruip Tutorials',
  description: 'Page description',
}

import PricingTable from '@/components/pricing-table'
import Banner from '@/components/banner'

export default function PricingTabsPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center bg-slate-50">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <PricingTable />
        </div>
      </main>
      
      <Banner tutorialUrl="https://cruip.com/how-to-create-a-pricing-table-with-a-monthly-yearly-toggle-in-tailwind-css-and-next-js/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/pricing-table.tsx" />
    </>
  )
}