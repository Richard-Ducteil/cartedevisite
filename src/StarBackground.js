import React, { useState, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import { useFrame } from "@react-three/fiber";

const StarBackground = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#05faf6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default StarBackground;
