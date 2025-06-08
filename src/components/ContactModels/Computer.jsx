import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export function Computer(props) {
  const { nodes, materials } = useGLTF('/models/computer-optimized-transformed.glb')

  // Create a custom material for the screen to make it glow
  const screenMaterial = new THREE.MeshPhongMaterial({ 
    color: '#4cc9f0',
    emissive: '#4cc9f0',
    emissiveIntensity: 0.5,
    shininess: 100
  })

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh castShadows receiveShadows geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized-transformed.glb')
