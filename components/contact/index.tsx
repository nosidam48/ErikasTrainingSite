import * as emailjs from 'emailjs-com';
import * as Yup from 'yup';
import {
  Field,
  Form,
  Formik,
} from 'formik';
import classnames from 'classnames';
import style from './style.module.scss';

const Basic = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Please enter at least 3 characters')
      .max(70, 'Character limit exceeded!')
      .required('Required'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email address'),
    message: Yup.string()
      .min(6, 'Please enter a longer message')
      .max(1000, 'Max characters exceeded')
      .required('Required'),
  });

  return (
    <div className={style.formContainer}>
      <h1>Contact Erika</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          const templateParams = {
            from_name: values.name,
            from_email: values.email,
            to_name: 'Erika',
            message: values.message,
          };
          emailjs.send(
            'service_u02o6gf',
            'template_hiv6vnp',
            templateParams,
            'user_YdYOZeeM5lttF2mngBm3i'
          );
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          isSubmitting,
          errors,
          handleChange,
          setErrors,
          values,
        }) => (
          <Form className={style.form}>
            <label className={style.label} htmlFor="name">
              Name
            </label>
            <Field
              onChange={(e) => {
                handleChange(e);
                setErrors({});
              }}
              type="name"
              name="name"
              className={style.field}
            />
            <div
              className={classnames(
                style.error,
                !errors.name && style.hidden
              )}
            >
              {errors.name || "no error"}
            </div>
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <Field
              onChange={(e) => {
                handleChange(e);
                setErrors({});
              }}
              name="email"
              className={style.field}
            />
            <div
              className={classnames(
                style.error,
                !errors.email && style.hidden
              )}
            >
              {errors.email || "no error"}
            </div>
            <label className={style.label} htmlFor="firstName">
              Message (max 1000 characters)
            </label>
            <Field
              onChange={(e) => {
                handleChange(e);
                setErrors({});
              }}
              className={style.textArea}
              type="text"
              as="textarea"
              name="message"
            />
            <div className={style.remainingCharacters}>{`${
              1000 - values.message.length
            } characters remaining`}</div>
            <div
              className={classnames(
                style.error,
                !errors.message && style.hidden
              )}
            >
              {errors.message || "no error"}
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
