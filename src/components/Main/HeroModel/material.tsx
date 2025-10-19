"use client";
// @ts-nocheck
import { useTexture } from "@react-three/drei";
import { forwardRef, JSX } from "react";
import { MeshMatcapMaterial } from "three";
import React from "react";

// ✅ Use the intrinsic type instead of importing from fiber
type MeshMatcapMaterialProps = JSX.IntrinsicElements["meshMatcapMaterial"];

export const CustomMaterial = forwardRef<
  MeshMatcapMaterial,
  MeshMatcapMaterialProps
>((props, ref) => {
  const texture = useTexture("/images/1.jpeg");

  return <meshMatcapMaterial {...props} ref={ref} matcap={texture} />;
});

CustomMaterial.displayName = "CustomMaterial";
