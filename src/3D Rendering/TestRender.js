import React, { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei';
import { Canvas,useFrame, useThree, } from '@react-three/fiber';


const Controls = () => {
    const orbitRef = useRef();
    const {camera, gl} = useThree();


    return (
        <OrbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.25 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setActive(true)}
      onPointerOut={(event) => setActive(false)}
    >
      <boxGeometry args={[1.25, 3, .15]} />
      <meshStandardMaterial  />
    </mesh>
  )
}
function Plane() {
    
    return (
      <mesh
        position={[0,0,0]}
        rotation={[-Math.PI/2,0,0]}
      >
        <planeBufferGeometry attach="geometry" args={[100,100]}/>
        <meshStandardMaterial attach="material" color="1a281f" />
      </mesh>
    )
  }

export default function TestRender() {
    return (
        <Canvas className="Canvas-Element">
            <Controls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} />
            <Box position={[0, 1, 0]} />
            <Box position={[0, 1, 5000]} />
            <Box position={[0, 1, 10000]} />
        </Canvas>
    )
}

