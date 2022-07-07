import { useEffect, useState, createContext,  } from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import Cities from "./Cities";

const UserContext = createContext("Yasemin");


export default function Countries() {
  const [countries, setCountries] = useState([{}]);
  const [countryId, setCountryId] = useState(1)




  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then(responses => responses.json())
      .then(data => setCountries(data))
  }, []);


  return (
    <>

      <Col xs="3">

        <ListGroup>
          {
            countries.map((c) => (
              <ListGroupItem onClick={() => setCountryId(c.id)} key={c.id}>{c.countryName}  </ListGroupItem>
            ))
          }

        </ListGroup>
      </Col>
      <Col> <UserContext.Provider value={countryId}>
        <Cities countryId={countryId} />


      </UserContext.Provider></Col>




    </>
  )

}
export { UserContext };