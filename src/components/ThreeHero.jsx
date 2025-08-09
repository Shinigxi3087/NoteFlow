import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function Blob() {
  // Vertex distortion via a small custom shader-ish trick using normal + time
  // but we’ll keep it simple using a high-poly sphere + standard material.
  const materialProps = useMemo(
    () => ({
      roughness: 0.2,
      metalness: 0.6,
      color: "#7aa2ff",
    }),
    []
  );

  return (
    <Float
      speed={1.2} // animation speed
      rotationIntensity={0.6} // XYZ rotation intensity
      floatIntensity={1.2} // up/down float intensity
    >
      <mesh castShadow receiveShadow>
        {/* High segments for smooth look */}
        <icosahedronGeometry args={[1.25, 2]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-black/40">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <color attach="background" args={["#0b0b0b"]} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.2}
          castShadow
        />
        <directionalLight
          position={[-5, -2, -3]}
          intensity={0.5}
        />

        <Suspense fallback={null}>
          {/* Pretty reflections */}
          <Environment preset="city" />

          {/* Our hero mesh */}
          <Blob />

          {/* Subtle sparkles */}
          <Sparkles
            count={30}
            speed={0.4}
            size={2}
            opacity={0.15}
            color="#9aa4ff"
            scale={[6, 3, 3]}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>

      {/* Soft highlight overlay to blend with your gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,.25)_0%,rgba(0,0,0,0)_70%)]" />
    </div>
  );
}


<iframe src='https://my.spline.design/greetingrobot-QH8vHE48L7AQUZAZKBo1LTWB/' frameborder='0' width='100%' height='100%'></iframe>