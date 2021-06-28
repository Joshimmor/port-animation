import React, { Suspense,useRef} from 'react'
import { OrbitControls} from '@react-three/drei';
import { Canvas, useThree} from '@react-three/fiber';
import Ball from "./Ball";

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
            <Controls/>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Ball/>
            </Suspense>
        </Canvas>
    )
}

