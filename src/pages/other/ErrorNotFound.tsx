import { Container, Heading, Section } from "react-bulma-components";
import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <Section>
      <Container className="has-text-centered">
        <Heading>404 - Not Found</Heading>
        <Heading subtitle>
          <Link to="/">Back to Home</Link>
        </Heading>
      </Container>
    </Section>
  );
};

export default ErrorNotFound;
