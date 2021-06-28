import React, { Suspense,useRef, useState} from 'react'
import { OrbitControls} from '@react-three/drei';
import { Canvas, useThree,useFrame} from '@react-three/fiber';
import Ball from "./Ball";

const Controls = () => {
    const orbitRef = useRef();
    const {camera, gl} = useThree();

    camera.position.z = 500;
    return (
        <OrbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}



export default function TestRender() {
    return (
        <Canvas className="Canvas-Element">
            <Controls />
            <ambientLight  intensity={1.5}/>
            <pointLight  color="white" intensity={1} position={[100, 100, 100]} />
            <rectAreaLight
              width={30}
              height={30}
              intensity={10}
              color="white"
              position={[50, 50, 5]}
              lookAt={[0, 0, 0]}
              penumbra={2}
              castShadow
              />
            <spotLight position={[1000, 1000, 1000]} />
            <Suspense fallback={null}>
                <Ball scale={.5} position={[0, 0, 0]}/>
            </Suspense>
        </Canvas>
    )
}

