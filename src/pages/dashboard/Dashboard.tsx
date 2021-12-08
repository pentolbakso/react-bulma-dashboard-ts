import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { ucFirstAllWords } from "../../helpers/formatUtils";
import { Dispatch, RootState } from "../../rematch/store";
import { Container, Heading } from "react-bulma-components";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Container>
      <Heading className="has-text-weight-light">Dashboard</Heading>
      <Heading subtitle>{dayjs().format("D MMM YYYY")}</Heading>
      {/* <Columns multiline>
        <Columns.Column size={12}>
          <Box>
            <DashboardStats />
          </Box>
        </Columns.Column>
        <Columns.Column size={6}>
          <Box>
            <Heading size={5}>Customers</Heading>
            <Button.Group>
              <Button onClick={() => history.push('/customers')} text>
                Browse
              </Button>
              <Button onClick={() => history.push('/customers/create')} text>
                Create
              </Button>
            </Button.Group>
          </Box>
        </Columns.Column>
        <Columns.Column size={6}>
          <Box>
            <Heading size={5}>Data</Heading>
            <p>Lorem ipsum</p>
          </Box>
        </Columns.Column>
      </Columns> */}
    </Container>
  );
};

export default Dashboard;
