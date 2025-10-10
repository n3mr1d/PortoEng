import React from "react";

interface BannerProps {
  speed?: number;
}

export const Banner: React.FC<BannerProps> = ({ speed = 5000 }) => {
  const images = [
    { name: "Laravel", icon: "fab fa-laravel" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Linux", icon: "fab fa-linux" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Next.js", icon: "fab fa-js" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Tailwind", icon: "fab fa-css3-alt" },
  ];

  return (
    <div className="relative flex max-w-100 justify-center w-full overflow-hidden h-20">
      <div className="absolute w-full h-full flex mask-x-from-80% mask-x-to-100%">
        {[...Array(3)].map((_, idx) => (
          <section key={idx} className="dan" style={{ ["--speed" as any]: `${speed}ms` }}>
            {images.map((img, i) => (
              <div key={`${img.name}-${i}`} className="image flex items-center justify-center mx-4">
                <i className={`text-white text-2xl ${img.icon}`} title={img.name}></i>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

