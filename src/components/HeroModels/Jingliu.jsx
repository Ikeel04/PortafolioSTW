

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Jingliu(props) {
  const { scene } = useGLTF('/models/honkai_star_rail_-_jingliu.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_491.geometry} material={materials.material} skeleton={nodes.Object_491.skeleton} />
        <skinnedMesh geometry={nodes.Object_492.geometry} material={materials.material_1} skeleton={nodes.Object_492.skeleton} />
        <skinnedMesh geometry={nodes.Object_493.geometry} material={materials.material_2} skeleton={nodes.Object_493.skeleton} />
        <skinnedMesh geometry={nodes.Object_494.geometry} material={materials.material_3} skeleton={nodes.Object_494.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/honkai_star_rail_-_jingliu.glb')
