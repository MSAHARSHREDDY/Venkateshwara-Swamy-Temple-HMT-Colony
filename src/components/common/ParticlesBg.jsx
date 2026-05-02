import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 80 },
          color: { value: "#FFD700" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBg;