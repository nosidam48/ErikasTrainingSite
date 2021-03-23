import Image from 'next/image';
import * as emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import style from './style.module.scss';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter at least 3 characters')
    .max(70, 'Character limit exceeded!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(7, 'Please enter a valid phone number')
    .max(25, 'Phone number too long')
    .required('Please enter your phone number'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email address'),
  services: Yup.string(),
  dogName: Yup.string()
    .max(100, 'Name too long')
    .required("Please enter your dog's name"),
  dogAge: Yup.number()
    .max(35, 'Dog too old')
    .required("Please enter your dog's age"),
  message: Yup.string()
    .min(6, 'Please enter a longer message')
    .max(1000, 'Max characters exceeded')
    .required('Required'),
});

const Basic = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      {success ? (
        <div className={style.success}>
          <h2>Thank you for choosing</h2>
          <div className={style.imageWrapper}>
            <Image
              src="/images/logo_inverted.png"
              width="1000"
              height="955"
              alt="Make Fetch Happen logo"
            />
          </div>
          <h2>We will be in contact to schedule an appointment</h2>
        </div>
      ) : (
        <div className={style.formContainer}>
          <h1>Let's Make Fetch Happen!</h1>
          <Formik
            initialValues={{
              name: '',
              phoneNumber: '',
              email: '',
              services: 'Single Session',
              dogName: '',
              dogAge: '',
              message: '',
            }}
            validationSchema={SignupSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              const templateParams = {
                from_name: values.name,
                from_email: values.email,
                to_name: 'Erika',
                message: values.message,
                phone_number: values.phoneNumber,
                services: values.services,
                dog_name: values.dogName,
                dog_age: values.dogAge,
              };

              emailjs
                .send(
                  'service_zwqyg8e',
                  'template_a2equkq',
                  templateParams,
                  'user_QZyc7n3lL85kGIUV4gtCy'
                )
                .then(
                  function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccess(true);
                  },
                  function (error) {
                    throw new Error('Sorry, something went wrong ' + error);
                  }
                );
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, errors, handleChange, setErrors, values }) => (
              <Form className={style.form}>
                <label className={style.label} htmlFor="name">
                  Name
                </label>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    setErrors({});
                  }}
                  type="text"
                  id="name"
                  name="name"
                  className={style.field}
                />
                <div
                  className={classnames(
                    style.error,
                    !errors.name && style.hidden
                  )}
                >
                  {errors.name || 'no error'}
                </div>
                <label className={style.label} htmlFor="phoneNumber">
                  Phone Number
                </label>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    setErrors({});
                  }}
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={style.field}
                />
                <div
                  className={classnames(
                    style.error,
                    !errors.phoneNumber && style.hidden
                  )}
                >
                  {errors.phoneNumber || 'no error'}
                </div>
                <label className={style.label} htmlFor="email">
                  Email
                </label>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    setErrors({});
                  }}
                  id="email"
                  name="email"
                  className={style.field}
                />
                <div
                  className={classnames(
                    style.error,
                    !errors.email && style.hidden
                  )}
                >
                  {errors.email || 'no error'}
                </div>
                <label className={style.label} htmlFor="service">
                  Training Services
                </label>
                <Field
                  id="service"
                  as="select"
                  name="service"
                  className={style.field}
                >
                  <option value="Single Session">Single Session</option>
                  <option value="Training Package">Training Package</option>
                  <option value="Complete Puppy Package">Complete Puppy Package</option>
                </Field>
                <div
                  className={classnames(
                    style.error,
                    !errors.services && style.hidden
                  )}
                >
                  {errors.services || 'no error'}
                </div>
                <div className={style.dogInfo}>
                  <div className={style.dogInfoItem}>
                    <label className={style.label} htmlFor="dogName">
                      Dog's Name/Age
                    </label>
                    <Field
                      onChange={(e) => {
                        handleChange(e);
                        setErrors({});
                      }}
                      type="text"
                      id="dogName"
                      name="dogName"
                      className={style.dogName}
                    />
                    <div
                      className={classnames(
                        style.error,
                        !errors.dogName && style.hidden
                      )}
                    >
                      {errors.dogName || 'no error'}
                    </div>
                  </div>
                  <div className={style.dogInfoItem}>
                    <div className={style.labelPlaceholder} />
                    <Field
                      onChange={(e) => {
                        handleChange(e);
                        setErrors({});
                      }}
                      type="number"
                      id="dogAge"
                      name="dogAge"
                      className={style.dogAge}
                      aria-label="Dog's age"
                      min={1}
                      max={64}
                    />
                    <div
                      className={classnames(
                        style.error,
                        !errors.dogAge && style.hidden
                      )}
                    >
                      {errors.dogAge || 'no error'}
                    </div>
                  </div>
                </div>
                <label className={style.label} htmlFor="message">
                  What do you want to work on?
                </label>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    setErrors({});
                  }}
                  className={style.textArea}
                  type="text"
                  as="textarea"
                  id="message"
                  name="message"
                />
                <div className={style.remainingCharacters}>{`${
                  1000 - values.message.length
                } characters remaining`}</div>
                <div
                  className={classnames(
                    style.errorArea,
                    !errors.message && style.hidden
                  )}
                >
                  {errors.message || 'no error'}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Basic;
