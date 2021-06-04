import { Formik, Form } from "formik";

export function FormikHandler({
  initialValues,
  btnRef,
  submitHandler,
  validationSchema,
  children,
}) {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {({ handleSubmit }) => (
        <>
          <Form>
            <>{children}</>
            <button
              type="submit"
              style={{ display: "none" }}
              ref={btnRef}
              onSubmit={() => handleSubmit()}
            ></button>
          </Form>
        </>
      )}
    </Formik>
  );
}
