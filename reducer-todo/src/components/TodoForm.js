import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";

const RegisterSchema = Yup.object().shape({
  item: Yup.string().required(
    "Please add a todo item, we can't have an empty todo list :)"
  )
});

const TodoForm = ({ addTodo }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add-A-Todo</h1>
      <Formik
        initialValues={{
          item: ""
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(values.item);
          addTodo(values.item);
          resetForm();
        }}
        render={({
          values,
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
              <Form.Input
                width={16}
                control={Input}
                value={values.item || ""}
                type="text"
                name="item"
                autoComplete="off"
                placeholder="Todo item"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.item ? "invalid_input" : ""}
              />
              {errors.item ? (
                <p style={{ marginBottom: "20px", color: "red" }}>
                  {errors.item}
                </p>
              ) : null}

              <Button size="big" fluid type="submit" color="blue">
                Add Todo &rarr;
              </Button>
              {isSubmitting && "Loading!"}
            </Form>
          );
        }}
      />
    </div>
  );
};

export default TodoForm;
