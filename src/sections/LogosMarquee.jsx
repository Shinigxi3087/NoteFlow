import Marquee from "react-fast-marquee";

export default function LogosMarquee() {
  const logos = ["Notion", "Slack", "GitHub", "Figma", "Linear", "Vercel", "OpenAI"];
  return (
    <div className="py-8 border-y border-neutral-800 bg-black/30">
      <Marquee gradient={false} speed={40}>
        <div className="flex items-center gap-10">
          {logos.map(l => (
            <span key={l} className="text-neutral-400 text-sm tracking-wider uppercase">{l}</span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
