export const metadata = {
  title: "Search Modal - Cruip Tutorials",
  description: "Page description",
};

import SearchModal from "@/components/search-modal";
import Banner from "@/components/banner";

export default function SearchModalPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-24 md:px-6">
          <SearchModal />
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/building-a-documentation-search-modal-with-nextjs/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/search-modal.tsx"
      />
    </>
  );
}
