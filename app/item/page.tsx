import Link from "next/link";
import { ProductCarousel } from "@/app/components/product-carousel";
import { products } from "@/app/data/products";

export default function ItemPage() {
  return (
    <main className="bg-[#f7f8fb]">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#0f766e]">Item page</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#101316]">
              Product carousel
            </h1>
          </div>
        </div>
        <ProductCarousel products={products} />
      </section>
    </main>
  );
}
