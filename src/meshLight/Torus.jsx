import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

export const MyTorus = () => {
  // JavaScript code to create a custom scene with a rotating cube and sparkles
  /* function CustomScene() {
  const { scene, camera } = useThree();

  const cubeRef = useRef();
  useEffect(() => {
    // Add Scene
    scene.background = new THREE.Color("#F0F0F0");

    // Add camera
    camera.aspect = window.innerWidth / window.innerHeight;

    // Create and add a cube
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 200, 16);
    const material = new THREE.MeshNormalMaterial({
      color: "#FF0000",
      emissive: "#468585",
      wireframe: false,
    });
    const cube = new THREE.Mesh(geometry, material);

    // Add cube to the scene
    scene.add(cube);
    cubeRef.current = cube;

    // Add lighting
    const light = new THREE.AmbientLight(0x404040); // soft white light
    light.position.set(1, 1, 1);
    scene.add(light);

    // Set up renderer
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);

    // Clean up function
    return () => {
      scene.remove(cube);
      scene.remove(light);
    };
  }, [scene, camera]);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.z += 0.01;
    }
  });

  return null;
} */
  return (
    <Canvas
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [0, 0, 10],
      }}
    >
      <OrbitControls />
      {/* <CustomScene /> */}
      <mesh>
        <torusKnotGeometry args={[1, 0.4, 200, 16]} />
        <meshNormalMaterial />
      </mesh>
      <directionalLight position={[5, 5, 5]} intensity={10} />
      <Sparkles
        count={200}
        size={5}
        scale={[20, 15, 20]}
        position={[0, 1, 0]}
        color="purple"
      />
    </Canvas>
  );
};
