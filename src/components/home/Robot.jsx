import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  Grid,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { easing } from "maath";
import * as THREE from "three";

export default function App() {
  return (
    <Canvas flat shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
      <Robot />
    </Canvas>
  );
}

function Robot() {
  const colorRef = useRef(new THREE.Color("#8D90AE"));

  useFrame((state) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 1.5)) / 2;
    const color1 = new THREE.Color("#7987A6"); 
    const color2 = new THREE.Color("#8D91AC");

    colorRef.current.lerpColors(color1, color2, t); 
    state.gl.setClearColor(colorRef.current);
  });

  return (
    <>
      <fog attach="fog" args={["black", 15, 22.5]} />
      <Stage
        intensity={-1.9}
        environment="city"
        shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
        adjustCamera={false}
      >
        <Kamdo rotation={[0, Math.PI, 0]} />
      </Stage>
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        sectionColor={[0.5, 0.5, 10]}
        fadeDistance={30}
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI / 2}
      />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={5} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
    </>
  );
}

function Kamdo(props) {
  const head = useRef();
  const stripe = useRef();
  const light = useRef();
  const { nodes, materials } = useGLTF(
    "/s2wt_kamdo_industrial_divinities-transformed.glb"
  );

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);
    easing.dampE(
      head.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );
    light.current.intensity = 1 + t * 4;
  });

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body001.geometry}
        material={materials.Body}
      />
      <group ref={head}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head001.geometry}
          material={materials.Head}
        />
        <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
          <meshBasicMaterial ref={stripe} toneMapped={false} />
          <pointLight
            ref={light}
            intensity={1}
            color={[10, 2, 20]}
            distance={10.5}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/s2wt_kamdo_industrial_divinities-transformed.glb");
