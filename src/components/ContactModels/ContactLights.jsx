import * as THREE from 'three';

const ContactLights = () => {
    return (
        <>
            {/* Main light from the front */}
            <spotLight
                position={[0, 2, 5]}
                angle={0.3}
                intensity={50}
                penumbra={0.5}
                color="white"
            />

            {/* Blue accent light from the left */}
            <spotLight
                position={[-3, 2, 2]}
                angle={0.4}
                intensity={30}
                penumbra={0.8}
                color="#4361ee"
            />

            {/* Purple accent light from the right */}
            <spotLight
                position={[3, 2, 2]}
                angle={0.4}
                intensity={30}
                penumbra={0.8}
                color="#7209b7"
            />

            {/* Ambient light for overall scene brightness */}
            <ambientLight intensity={0.5} />

            {/* Screen glow effect */}
            <primitive
                object={new THREE.RectAreaLight('#4cc9f0', 5, 2, 1)}
                position={[0, 0.5, 1]}
                intensity={10}
                rotation={[0, 0, 0]}
            />
        </>
    )
}

export default ContactLights