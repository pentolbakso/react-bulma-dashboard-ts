import { Container, Heading, Section } from "react-bulma-components";
import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <Section>
      <Container className="has-text-centered">
        <Heading>Unauthorized Access!</Heading>
        <Heading subtitle>
          <Link to="/">Back to Home</Link>
        </Heading>
      </Container>
    </Section>
  );
};

export default Forbidden;
