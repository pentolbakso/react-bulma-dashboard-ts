import React from "react";
import {
  Button,
  Columns,
  Container,
  Form,
  Heading,
  Section,
} from "react-bulma-components";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch, RootState } from "../../rematch/store";

const Login = () => {
  const dispatch = useDispatch<Dispatch>();
  const loading = useSelector(
    (state: RootState) => state.loading.effects.auth.login
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await dispatch.auth.login({ email, password });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (!!user) return <Navigate to="/dashboard" replace={true} />;

  return (
    <Section>
      <Columns centered={true}>
        <Columns.Column size={6}>
          <Container>
            <Heading>SiteName</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <Form.Control>
                  <Form.Label>Email</Form.Label>
                  <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Input
                        type="email"
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Email"
                      />
                    )}
                  />
                </Form.Control>
                {errors.email && (
                  <Form.Help color="danger">
                    Please input a valid email
                  </Form.Help>
                )}
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Form.Label>Password</Form.Label>
                  <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Input
                        type="password"
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                      />
                    )}
                  />
                </Form.Control>
                {errors.password && (
                  <Form.Help color="danger">
                    Please input a valid password
                  </Form.Help>
                )}
              </Form.Field>
              <Form.Control>
                <Button
                  color="primary"
                  type="submit"
                  loading={loading}
                  className="is-uppercase has-text-weight-bold"
                >
                  Login
                </Button>
              </Form.Control>
            </form>
          </Container>
        </Columns.Column>
      </Columns>
    </Section>
  );
};

export default Login;
