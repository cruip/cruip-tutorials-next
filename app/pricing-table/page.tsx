export const metadata = {
  title: "Pricing Table - Cruip Tutorials",
  description: "Page description",
};

import PricingTable from "@/components/pricing-table";
import Banner from "@/components/banner";

export default function PricingTabsPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <PricingTable />
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/how-to-create-a-pricing-table-with-a-monthly-yearly-toggle-in-tailwind-css-and-next-js/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/pricing-table.tsx"
      />
    </>
  );
}
