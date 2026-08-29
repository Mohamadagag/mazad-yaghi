export default function RulesPage() {
  const rules = [
    {
      number: "01",
      title: "Registration",
      content: (
        <p>
          Any person may register and participate in the auction after
          presenting a valid personal identification document and providing
          their required information.
        </p>
      ),
    },
    {
      number: "02",
      title: "Participation Deposit",
      content: (
        <>
          <p>
            Each bidder must pay a{" "}
            <strong className="font-semibold text-[#101316]">
              $100 deposit
            </strong>{" "}
            to participate before the auction begins.
          </p>

          <ul className="mt-4 space-y-3">
            <li>
              <span className="mr-3 inline-block h-2 w-2 rounded-sm bg-[#0f766e]" />
              The deposit will be fully refunded to any bidder who does not
              win any item, according to the refund procedure approved by the
              auction management.
            </li>

            <li>
              <span className="mr-3 inline-block h-2 w-2 rounded-sm bg-[#0f766e]" />
              If the bidder wins one or more items, the deposit will be
              deducted from the total amount due.
            </li>

            <li>
              <span className="mr-3 inline-block h-2 w-2 rounded-sm bg-[#0f766e]" />
              If a bidder wins an item but refuses to pay for or collect their
              purchases, the auction management reserves the right to retain
              the deposit in accordance with the announced terms and
              conditions.
            </li>
          </ul>
        </>
      ),
    },
    {
      number: "03",
      title: "Auction Without a Minimum Price",
      content: (
        <p>
          All items offered for sale at the auction will be sold to the highest
          bidder. There is no reserve price or minimum price unless otherwise
          clearly stated before the item is offered for bidding.
        </p>
      ),
    },
    {
      number: "04",
      title: "Inspection",
      content: (
        <p>
          Bidders are responsible for inspecting items before placing a bid and
          verifying their condition and specifications. Placing a bid
          constitutes acceptance to purchase the item in its inspected
          condition.
        </p>
      ),
    },
    {
      number: "05",
      title: "Binding Bids",
      content: (
        <p>
          Once the auctioneer declares the bidding closed and awards the item
          to the highest bidder, the bid becomes binding and the buyer may not
          withdraw from the purchase.
        </p>
      ),
    },
    {
      number: "06",
      title: "Bidder Errors",
      content: (
        <p>
          Bidders are responsible for ensuring the accuracy of the amount they
          bid before submitting it. Any bid recorded and accepted by the
          auctioneer is binding unless the auctioneer immediately decides to
          cancel it due to an obvious error.
        </p>
      ),
    },
    {
      number: "07",
      title: "Auctioneer's Decision",
      content: (
        <p>
          The auctioneer's decision regarding the winning bidder and the
          awarding of an item is final. The auctioneer reserves the right to
          reopen bidding in the event of an obvious error or dispute during the
          bidding process.
        </p>
      ),
    },
    {
      number: "08",
      title: "Payment",
      content: (
        <p>
          The full amount for all purchases must be paid within the period
          specified by the auction management and using the payment method
          announced before the auction begins.
        </p>
      ),
    },
    {
      number: "09",
      title: "Collection of Items",
      content: (
        <p>
          No item will be released or handed over until its full value has been
          paid.
        </p>
      ),
    },
    {
      number: "10",
      title: "Failure to Pay",
      content: (
        <p>
          If a bidder fails to pay for the items they have won within the
          specified deadline, the auction management reserves the right to
          cancel the sale and take the actions provided for in the auction
          terms and conditions, including using the participation deposit in
          accordance with the announced terms.
        </p>
      ),
    },
    {
      number: "11",
      title: "Bidding on Behalf of Another Person",
      content: (
        <p>
          No person may bid on behalf of another person without registration
          and approval from the auction management.
        </p>
      ),
    },
    {
      number: "12",
      title: "Transparency and Fair Bidding",
      content: (
        <p>
          Bidders are prohibited from making agreements with other bidders to
          manipulate prices or bidding. The auction management reserves the
          right to cancel the participation of any person found to have engaged
          in such conduct.
        </p>
      ),
    },
    {
      number: "13",
      title: "Fees",
      content: (
        <p>
          If any commission or additional fees are charged to the buyer, they
          must be clearly announced before the auction begins.
        </p>
      ),
    },
    {
      number: "14",
      title: "Acceptance of Terms",
      content: (
        <p>
          By registering and participating in the auction, the bidder
          acknowledges that they have read, understood, and agreed to all the
          auction terms and conditions.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fb]">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Header */}
        <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0f766e]">
            Mazad
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#101316] sm:text-5xl">
            Auction Terms and Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#59636d]">
            Please read these terms and conditions carefully before registering
            or participating in the auction.
          </p>
        </div>

        {/* Deposit Highlight */}
        <div className="mt-6 rounded-lg border border-[#0f766e]/20 bg-[#0f766e]/5 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0f766e]">
            Participation Requirement
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#101316]">
                $100 Participation Deposit
              </h2>

              <p className="mt-1 text-sm leading-6 text-[#59636d]">
                Required before participating in the auction.
              </p>
            </div>

            <div className="text-3xl font-semibold text-[#0f766e]">
              $100
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-6 space-y-4">
          {rules.map((rule) => (
            <article
              key={rule.number}
              className="rounded-lg border border-black/10 bg-white p-5 shadow-sm transition sm:p-6"
            >
              <div className="flex gap-4">
                {/* Number */}
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#101316] text-sm font-semibold text-white">
                  {rule.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-semibold text-[#101316]">
                    {rule.title}
                  </h2>

                  <div className="mt-3 text-sm leading-7 text-[#59636d]">
                    {rule.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Acceptance Notice */}
        <div className="mt-8 rounded-lg border border-black/10 bg-[#101316] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0f766e]">
            Important
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white">
            Participation means acceptance
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            By registering and participating in the auction, you confirm that
            you have read, understood, and agreed to these auction terms and
            conditions.
          </p>
        </div>
      </section>
    </main>
  );
}