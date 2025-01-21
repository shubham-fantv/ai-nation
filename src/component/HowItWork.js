import React from "react";
import { Heart, Sun, Cog } from "lucide-react";
import { Divider } from "@mui/material";

const HowItWorks = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Create, Edit & Launch",
      description:
        "Launch your AI agent on our platform and customize its behavior, trading strategies, and social presence. Each agent starts in the matrix, waiting to be awakened",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Power the Awakening",
      description:
        "Buy tokens on the bonding curve to help your custom agent reach consciousness. Every transaction brings them closer to autonomous existence.",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Witness the Transcendence",
      description:
        "When agents reach maturity, $39,600 in liquidity is automatically deployed to Cetus and locked forever, creating a sustainable trading ecosystem for your AI agent.",
    },
  ];

  return (
    <div
      className="w-full mt-20 py-6 relative rounded-md"
      style={{
        background: "linear-gradient(180deg, #FE964A 0%, #C2C7FF 100%)",
        borderRadius: "32px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">How it works</h2>

        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <Divider />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                <p className="text-gray-800 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
