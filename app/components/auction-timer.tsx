"use client";

import { useEffect, useMemo, useState } from "react";

const initialSeconds = 10;

type AuctionTimerProps = {
  onSold?: () => void;
};

export function AuctionTimer({ onSold }: AuctionTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isSold, setIsSold] = useState(false);

  const isActive = isRunning && timeLeft > 0 && !isSold;

  const markAsSold = () => {
    setIsRunning(false);
    setIsSold(true);
    onSold?.();
  };

  // Countdown
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isActive]);

  // Automatically mark auction as sold when timer reaches 0
  useEffect(() => {
    if (timeLeft === 0 && isRunning && !isSold) {
      setIsRunning(false);
      setIsSold(true);
      onSold?.();
    }
  }, [timeLeft, isRunning, isSold, onSold]);

  const formattedTime = useMemo(() => {
    const seconds = String(timeLeft).padStart(2, "0");
    return `00:${seconds}`;
  }, [timeLeft]);

  const progress = (timeLeft / initialSeconds) * 100;

  const startTimer = () => {
    setTimeLeft(initialSeconds);
    setIsRunning(true);
    setIsSold(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <section
      data-testid="auction-timer"
      className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-[#0f766e]">
            Auction countdown
          </p>

          <p
            data-testid="auction-time"
            className="mt-2 text-5xl font-semibold tabular-nums text-[#101316]"
            aria-live="polite"
          >
            {formattedTime}
          </p>
        </div>

        <div
          data-testid="auction-status"
          className="min-h-7 rounded-md bg-[#eef2f1] px-3 py-1.5 text-sm font-semibold text-[#263039]"
        >
          {isSold
            ? "Sold"
            : isActive
              ? "Live"
              : timeLeft === 0
                ? "Ended"
                : "Ready"}
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-md bg-[#dfe7e4]">
        <div
          className="h-full rounded-md bg-[#0f766e] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <button
          type="button"
          data-testid="start-timer"
          onClick={startTimer}
          disabled={isSold}
          className="min-h-12 rounded-md bg-[#101316] px-4 text-sm font-semibold text-white transition hover:bg-[#263039] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Start 10s
        </button>

        <button
          type="button"
          data-testid="stop-timer"
          onClick={stopTimer}
          disabled={!isActive}
          className="min-h-12 rounded-md border border-black/15 bg-white px-4 text-sm font-semibold text-[#101316] transition hover:bg-[#eef2f1] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Stop
        </button>

        <button
          type="button"
          data-testid="sold-button"
          onClick={markAsSold}
          disabled={isSold}
          className="min-h-12 rounded-md bg-[#0f766e] px-4 text-sm font-semibold text-white transition hover:bg-[#0d625b] disabled:cursor-not-allowed disabled:opacity-40"
        >
          SOLD
        </button>
      </div>
    </section>
  );
}