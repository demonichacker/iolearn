// @ts-nocheck - React Three Fiber component with custom JSX elements
"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text } from "@react-three/drei"
import type { Group } from "three"

const lessonData = [
  { title: "JavaScript", color: "#f7df1e", position: [-3, 1, 0] },
  { title: "React", color: "#61dafb", position: [3, -1, 0] },
  { title: "Math", color: "#ff6b6b", position: [-2, -2, 0] },
  { title: "Python", color: "#3776ab", position: [2, 2, 0] },
  { title: "CSS", color: "#1572b6", position: [0, 0, -2] },
]

export function FloatingLessonCards() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {lessonData.map((lesson, index) => (
        <Float key={lesson.title} speed={1 + index * 0.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <group position={lesson.position as [number, number, number]}>
            <RoundedBox args={[1.5, 1, 0.1]} radius={0.1} smoothness={4}>
              <meshStandardMaterial color={lesson.color} />
            </RoundedBox>
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {lesson.title}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  )
}
