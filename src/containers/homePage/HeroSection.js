import React, { useRef, useState, Suspense } from 'react'
import { Button } from '../../components/Buttons'
import './HeroSection.css';

import { Canvas, useFrame } from "react-three-fiber"; 
import { useSpring, a} from 'react-spring/three'
import Navbar from './Navbar';

const Box = ( {position, args}) => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.z += 0.01))

    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    })

    return(
        <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow position={position} ref={mesh}>
            <cylinderBufferGeometry attach='geometry' args={args} translate={-2, -0,5, 0}/>
            <meshStandardMaterial attach='material' color='#514100' />
        </a.mesh>
    )
};

function HeroSection() {

    return (
        <div className='heroContainer'>
            <div className="heroLeft">
                <h3 className="heroLeftTitle">
                    Making Money Splitting Effortless
                </h3>
                <p className="heroLeftParagraph">
                Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                </p>
                <div className="heroBtn">
                    <Button className='btn' buttonStyle='btnPrimary'>
                        SIGN UP
                    </Button>
                </div>
            </div>
            <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 50}}>
                <ambientLight intensity={0.5} />
                <directionalLight 
                    castShadow 
                    position={[0, 10, 0]} 
                    intensity={1} 
                    shadow-mapSize-width={1024} 
                    shadow-mapSize-height={1024} 
                    shadow-camera-far={50}
                    shadow-camera-left={10}
                    shadow-camera-right={-10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    />
                <pointLight position={[-10, 0, -20]} instensity={0.2} />
                <pointLight position={[0, -10, 0]} instensity={1.5} />
                
                <group>
                    <mesh receiveShadow rotation={ [-Math.PI / 2,0,0]} position={[0, -3, 0]}>
                        <planeBufferGeometry attach='geometry' args={[100, 100]} />
                        {/* this casts a shadow */}
                        <shadowMaterial attach='material' opacity={0.05}/>
                    </mesh>
                        <Box position={[1, 0, -2]} args={[1, 1, 0.2, 32]} />
                        <Box position={[-2, 1, -5]} args={[1, 1, 0.2, 32]} />
                        <Box position={[5, 0, -2]} args={[1, 1, 0.2, 32]} />                    
                        <Box position={[0, 3, -5]} args={[1, 1, 0.2, 32]} />                    
                        <Box position={[-1, -2, -1.5]} args={[1, 1, 0.2, 32]} />                    
                        <Box position={[3, 4, -1.5]} args={[1, 1, 0.2, 32]} />                    
                </group>
            </Canvas>
        </div>
    )
}

export default HeroSection
