import React, { useState } from "react";
import { DATA } from "./data";
import jeremyAvatar from "./assets/images/image-jeremy.png";

import TrackingCard from "./components/tracking-card";
import UserPanel from "./components/user-panel";

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-navy-950">
      <div class="grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-2 gap-4  w-full max-w-[1000px]">
        <div class="md:row-span-2">
          <UserPanel
            timeframeOptions={["daily", "weekly", "monthly"]}
            selectedTimeframe={selectedTimeframe}
            setSelectedTimeframe={setSelectedTimeframe}
            username={"Jeremy Robson"}
            avatarImage={jeremyAvatar}
          />
        </div>
        {DATA.map((item, index) => {
          const timeframe = item?.timeframes?.[selectedTimeframe];
          const previousValueLabel = {
            daily: "Day",
            weekly: "Week",
            monthly: "Month",
          }?.[selectedTimeframe];
          return (
            <TrackingCard
              key={`card-${item.title}-${index}`}
              cardIcon={item.cardIcon}
              bgColor={item.bgColor}
              title={item.title}
              currentValue={`${timeframe?.current}hrs`}
              previousValue={`Last ${previousValueLabel} - ${timeframe?.previous}hrs`}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
