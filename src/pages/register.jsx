import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./registercss.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/validationSchema";

const onSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

function register() {
  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      address: "",
      city: "",
      zip: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <Container>
        <h3 class="text-left display-5 pt-4">Create Account</h3>
        <Form onSubmit={handleSubmit} className="row g-2 mt-3">
          <Form.Group className="mb-1 col-md-6">
            <Form.Label className="lead">First Name</Form.Label>
            <Form.Control
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Name"
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-6 w-10">
            <Form.Label className="lead">Surname</Form.Label>
            <Form.Control
              value={values.surname}
              onChange={handleChange}
              id="surname"
              type="text"
              placeholder="Surname"
              onBlur={handleBlur}
              className={errors.surname && touched.surname ? "input-error" : ""}
            />
            {errors.surname && touched.surname && (
              <p className="error">{errors.surname}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-6 w-10">
            <Form.Label className="lead">Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email Address"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-1 col-md-6">
            <Form.Label className="lead">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username ? "input-error" : ""
              }
            />
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-1 col-md-4">
            <Form.Label className="lead">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 Main St"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.address && touched.address ? "input-error" : ""}
            />
            {errors.address && touched.address && (
              <p className="error">{errors.address}</p>
            )}
            <Form.Text className="text-muted">
              We'll <b>never</b> share your information with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="col-md-4">
            <Form.Label className="lead">City</Form.Label>
            <Form.Control
              value={values.city}
              onChange={handleChange}
              type="text"
              id="city"
              placeholder="Sydney"
              maxLength={10}
              onBlur={handleBlur}
              className={errors.city && touched.city ? "input-error" : ""}
            />
            {errors.city && touched.city && (
              <p className="error">{errors.city}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-4">
            <Form.Label className="lead">Zip</Form.Label>
            <Form.Control
              value={values.zip}
              onChange={handleChange}
              type="text"
              id="zip"
              placeholder="2567"
              maxLength={4}
              onBlur={handleBlur}
              className={errors.zip && touched.zip ? "input-error" : ""}
            />
            {errors.zip && touched.zip && <p className="error">{errors.zip}</p>}
          </Form.Group>
          <Form.Group className="mb-1 col-md-6">
            <Form.Label className="lead">Password</Form.Label>
            <Form.Control
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-6 w-10">
            <Form.Label className="lead">Confirm Password</Form.Label>
            <Form.Control
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </Form.Group>
          <Form.Group class="col-md-12 text-center pt-3">
            <Button
              disabled={isSubmitting}
              variant="btn btn-lg w-75"
              className="custom-btn"
              type="submit"
            >
              Register Details
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default register;
