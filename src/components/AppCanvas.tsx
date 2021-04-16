import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

type Props = {
  sceneId: string;
};

export default function AppCanvas({ sceneId }: Props): JSX.Element {
  const Scene = dynamic(() => import(`src/three/scenes/${sceneId}`));

  return (
    <div className="h-screen w-full p-1">
      <div className="h-full w-full bg-black">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
