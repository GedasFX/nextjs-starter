import dynamic from 'next/dynamic';
import { useState } from 'react';

// In some cases SSR will work, but in most of the more advanced usages of the library having SSR enabled will break the renderer.
const Canvas = dynamic(() => import('src/components/AppCanvas'), { ssr: false });

export default function ScenePage() {
  const [scene, setScene] = useState('intro-1');

  return (
    <>
      <button
        className="fixed top-2 left-2 z-10 text-white"
        onClick={() => {
          setScene(s => (s === 'intro-2' ? 'intro-1' : 'intro-2'));
        }}
      >
        Cycle Scene
      </button>
      <Canvas sceneId={scene} />
    </>
  );
}
