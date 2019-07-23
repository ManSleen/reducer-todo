import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must be at least 3 characters!")
    .required("Username is required!"),
  password: Yup.string()
    .min(3, "Your password must be at least 3 characters!")
    .required("Password is required!")
});

const TodoForm = () => {
  return (
    <Formik
      initialValues={{
        item: ""
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log(actions, values);
      }}
      render={({
        touched,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting
      }) => {
        return (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            onSubmit={handleSubmit}
          >
            <Form.Field
              label="Add Todo Item"
              control={Input}
              type="text"
              name="item"
              autoComplete="off"
              placeholder="Todo item"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.item ? "invalid_input" : ""}
              width="5"
            />
            {errors.item && touched.item ? (
              <p style={{ marginBottom: "20px", color: "red" }}>
                {errors.item}
              </p>
            ) : null}

            <Button type="submit" color="blue">
              Add Todo &rarr;
            </Button>
            {isSubmitting && "Loading!"}
          </Form>
        );
      }}
    />
  );
};

export default TodoForm;
