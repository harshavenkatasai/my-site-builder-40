import moment1 from "@/assets/moments/moment-1.png";
import moment2 from "@/assets/moments/moment-2.png";
import moment3 from "@/assets/moments/moment-3.png";
import moment4 from "@/assets/moments/moment-4.png";
import moment5 from "@/assets/moments/moment-5.png";
import moment6 from "@/assets/moments/moment-6.png";
import moment7 from "@/assets/moments/moment-7.png";

const moments = [moment1, moment2, moment3, moment4, moment5, moment6, moment7];

const MomentsSection = () => {
  // Duplicate the array for seamless infinite marquee
  const loop = [...moments, ...moments];

  return (
    <section className="py-16 bg-background overflow-hidden" aria-labelledby="moments-heading">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 id="moments-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Our Moments
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A glimpse into our live sessions, workshops and learning journey at DataGenz Academy.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((src, i) => (
            <div
              key={i}
              className="mx-3 shrink-0 w-[280px] md:w-[380px] aspect-video rounded-xl overflow-hidden border border-border shadow-lg bg-card"
            >
              <img
                src={src}
                alt={`DataGenz Academy moment ${(i % moments.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
