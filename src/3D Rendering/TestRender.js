import React, { Suspense, useRef} from 'react'
import { OrbitControls} from '@react-three/drei';
import { Canvas, useThree} from '@react-three/fiber';
import Rocket from "./Rocket";

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




export default function TestRender() {
    return (
        <Canvas className="Canvas-Element">
            <Controls />
            <ambientLight intensity={2}/>
            <pointLight  color="0xFFFFFF" intensity={1} position={[0, 0, -500]}  />
            <rectAreaLight
              width={500}
              height={500}
              intensity={1}
              color="0xFFFFFF"
              position={[0, 0, -100]}
              lookAt={[0, 0, 0]}
              penumbra={2}
              castShadow
              />
            <spotLight
             position={[0, 0, -500]} />
            <Suspense fallback={null}>
                <Rocket position={[0,-2,-5]}
                rotation={[0, Math.PI / 2, 0]}
                />
            </Suspense>
        </Canvas>
    )
}

