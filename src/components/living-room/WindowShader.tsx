import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useState } from 'react'

const PARTICLE_COUNT = 300

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)

  //particle velocity (sideways drift, less gravity)
  const velocities = useRef<THREE.Vector3[]>(
    Array.from({ length: PARTICLE_COUNT }, () =>
      new THREE.Vector3(
        0.002 + Math.random() * 0.01,
        -0.005 - Math.random() * 0.005,
        0
      )
      
    )
  )

  const { mouse, viewport } = useThree()

  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 0] = -viewport.width / 2 + Math.random() * 0.2 // Near left wall

      pos[i * 3 + 1] = Math.random() * 2
      pos[i * 3 + 2] = 0
    }
    return pos
  }, [viewport.width])

  const sizes = useMemo(() => {
    const s = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      s[i] = 0.01 + Math.random()**2 * 0.3
    }
    return s
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [positions, sizes])

  const [material] = useState(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#FFFEE9') },
      },
      vertexShader: `
        attribute float size;
        varying float vSize;
        varying float vFlicker;

        uniform float uTime;

        void main() {
          vSize = size;

          //flicker
          vFlicker = 0.5 + 0.5 * sin(position.x * 10.0 + uTime * 5.0);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z); //attenuate size
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        precision mediump float;
        uniform vec3 uColor;
        varying float vSize;
        varying float vFlicker;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * vFlicker; // radial + flicker
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
    })

    return mat
  })

  useFrame((state) => {
    const pos = geometry.attributes.position.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3

      pos[index] += velocities.current[i].x
      pos[index + 1] += velocities.current[i].y

      const mx = mouse.x * viewport.width / 2
      const my = mouse.y * viewport.height / 2

      const dx = pos[index] - mx
      const dy = pos[index + 1] - my
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 0.7) {
        const repulse = 0.02 / (dist + 0.05)
        pos[index] += dx * repulse
        pos[index + 1] += dy * repulse
      }

      if (
        pos[index] > viewport.width / 2 || 
        pos[index + 1] < -viewport.height / 2
      ) {
        pos[index] = -viewport.width / 2 + Math.random() * 0.2;
        pos[index + 1] = Math.random() * viewport.height - viewport.height / 2;
      }
      
    }

    geometry.attributes.position.needsUpdate = true
    material.uniforms.uTime.value = time
  })

  return <points ref={meshRef} geometry={geometry} material={material} />
}

export default function ParticleCanvas() {
  return (
    <Canvas
      className="absolute left-[0svh] bottom-0 z-[4]"
      style={{
        overflow: 'visible',
        width: '35svh',
        height: '74svh',
        position: 'absolute',
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ParticleField />
    </Canvas>
  )
}
