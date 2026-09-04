"use client";

import Image from "next/image";
import { useState } from "react";
import { AuctionTimer } from "@/app/components/auction-timer";
import { products } from "@/app/data/products";

export default function MazadPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSold, setIsSold] = useState(false);
  const [showSoldPopup, setShowSoldPopup] = useState(false);

  const product = products[currentIndex];

  const handleSold = () => {
    setIsSold(true);
    setShowSoldPopup(true);
  };

  const goToNextItem = () => {
    if (!isSold) {
      return;
    }

    if (currentIndex < products.length - 1) {
      setCurrentIndex((index) => index + 1);

      // New item is not sold yet
      setIsSold(false);
      setShowSoldPopup(false);
    }
  };

  return (
    <main className="bg-[#f7f8fb]">
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:px-8 lg:py-14">

        {/* Product */}
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
          <div className="relative aspect-[4/3] bg-[#eef2f1]">
            <Image
              src={product.image}
              alt={`${product.name} product image`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="grid gap-5 border-t border-black/10 p-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-[#0f766e]">
                Auction page
              </p>

              <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#101316]">
                {product.name}
              </h1>

              <p className="mt-1 text-sm font-semibold text-[#647079]">
                {product.code}
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#59636d]">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">

          {/* Bidder */}
          <section className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-[#0f766e]">
                  Current Highest Bid
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-[#f7f8fb] p-4">
                <p className="text-xs text-[#76818b]">
                  Current Bid
                </p>

                <p className="mt-1 text-xl font-semibold text-[#101316]">
                  ${product.currentBid}
                </p>
              </div>

              <div className="rounded-md bg-[#f7f8fb] p-4">
                <p className="text-xs text-[#76818b]">
                  Item
                </p>

                <p className="mt-1 text-xl font-semibold text-[#101316]">
                  {currentIndex + 1} / {products.length}
                </p>
              </div>
            </div>
          </section>
          <AuctionTimer
  key={product.id}
  onSold={handleSold}
/>

          {/* Next Item */}
          <button
            type="button"
            onClick={goToNextItem}
            disabled={
              !isSold || currentIndex === products.length - 1
            }
            className="w-full min-h-12 rounded-md bg-[#101316] px-4 text-sm font-semibold text-white transition hover:bg-[#263039] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {currentIndex === products.length - 1
              ? "Last Item"
              : "Next Item"}
          </button>
        </div>
      </section>

      {/* SOLD popup */}
      {showSoldPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">

            <p className="text-5xl font-black tracking-wide text-[#101316]">
              SOLD
            </p>

            <p className="mt-3 text-lg font-semibold text-[#59636d]">
              ${product.currentBid}
            </p>

            {/* <p className="mt-1 text-sm text-[#76818b]">
              Sold to {product.bidder.name} for {product.currentBid}
            </p> */}

            <button
              type="button"
              onClick={() => setShowSoldPopup(false)}
              className="mt-6 w-full min-h-12 rounded-md bg-[#101316] px-4 text-sm font-semibold text-white hover:bg-[#263039]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}