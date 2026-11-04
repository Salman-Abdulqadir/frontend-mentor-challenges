import React, { useRef, useState } from "react";
import Button from "./ui/Button";
import anishaAvatar from "@images/avatar-anisha.png";
import aliAvatar from "@images/avatar-ali.png";
import richardAvatar from "@images/avatar-richard.png";
import shanaiAvatar from "@images/avatar-shanai.png";
import { MoveLeft, MoveRight } from "lucide-react";
import clsx from "clsx";

const testimonials = [
  {
    name: "Anisha Li",
    comment: `Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.`,
    avatar: anishaAvatar,
  },
  {
    name: "Ali Bravo",
    comment: `We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.`,
    avatar: aliAvatar,
  },
  {
    name: "Richard Watts",
    comment: `Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!`,
    avatar: richardAvatar,
  },
  {
    name: "Shanai Gough",
    comment: `Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.`,
    avatar: shanaiAvatar,
  },
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="relative min-w-[400px] flex flex-col items-center space-y-3 bg-light-gray p-6 shadow-md">
      <div className="h-18 w-18 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={item.avatar} alt={item.name} />
      </div>
      <h4 className="mt-8">{item.name}</h4>
      <p>{JSON.stringify(item.comment)}</p>
    </div>
  );
};
const Testimonials = () => {
  const scrollRef = useRef();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-[80vh] space-y-6 text-center">
      <h2 className="text-4xl">What they've said</h2>
      {/* Desktop and tablet testmonials */}
      <>
        <div
          ref={scrollRef}
          className="hidden md:flex relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-x-hidden pb-4 pt-18 space-x-8"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
        <div className="hidden md:flex justify-center gap-4">
          <Button variant="secondary" onClick={() => scroll("left")}>
            <MoveLeft />
          </Button>
          <Button variant="secondary" onClick={() => scroll("right")}>
            <MoveRight />
          </Button>
        </div>
      </>
      <div className="space-y-4 flex flex-col items-center md:hidden mt-18">
        <TestimonialCard item={testimonials[testimonialIndex]} />
        <div className="flex items-center gap-3">
          {Array(testimonials.length)
            .fill(0)
            .map((_, index) => {
              const isActive = index === testimonialIndex;
              return (
                <div
                  onClick={() => setTestimonialIndex(index)}
                  key={index}
                  className={clsx(
                    "w-4 h-4 rounded-full border border-bright-orange cursor-pointer",
                    isActive ? "bg-bright-orange" : ""
                  )}
                />
              );
            })}
        </div>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Testimonials;
