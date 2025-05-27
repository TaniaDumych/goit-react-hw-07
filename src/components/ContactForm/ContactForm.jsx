import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form >
        <label className="contact_form">
          Name
          <Field className="contact_form_field" type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className="contact_form">
          Number
          <Field className="contact_form_field" type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>

        <button className="button-btn" type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;