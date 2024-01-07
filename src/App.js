import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

const App = () => {

  function Model(props) {
    const model = useLoader(GLTFLoader, 'models/scene.gltf')
    return (
      <primitive
        object={model.scene}
        position={props.position}
        rotation={[0, 4.4, 0]}
        />
    )
  }
  
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model position={[2, -2, 0]} />
    </Canvas>
  )
};


export default App;