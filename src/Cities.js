import { useEffect, useState, useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import {UserContext} from './Countries'


export default function Cities(props) {
    const [cities, setCities] = useState([{}]);
    const user = useContext(UserContext);
  
  console.log(user);


    useEffect(() => {
        fetch("http://localhost:3000/cities?countryId=" + props.countryId)
            .then(responses => responses.json())
            .then(data => setCities(data))
    }, [props.countryId]);



    return (
        <>



            <ListGroup>
                
                {
                    cities.map((c) => (
                        <ListGroupItem key={c.id}>{c.cityName}
                            <Canvas>
                                <OrbitControls />
                                <mesh>
                                    <boxGeometry attach="geometry" args={[2,2,2,2]} />
                                    <meshBasicMaterial attach="material" color={c.cityColor} />
                                </mesh>
                                </Canvas>
                                </ListGroupItem>
                    ))
                }

            </ListGroup>

            



        </>
    )

}