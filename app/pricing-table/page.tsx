export const metadata = {
  title: 'Pricing Table - Cruip Tutorials',
  description: 'Page description',
}

import PricingTable from '@/components/pricing-table'
import Banner from '@/components/banner'

export default function PricingTabsPage() {
  return (
    <>

      <PricingTable />
      
      <Banner tutorialUrl="https://cruip.com/how-to-create-a-pricing-table-with-a-monthly-yearly-toggle-in-tailwind-css-and-next-js/" downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/pricing-table.tsx" />

    </>
  )
}