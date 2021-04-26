import { Formik } from 'formik';
 
const Basic = () => (
  <>
    <Formik
      initialValues={{ name: '', surname: '', birthDate: '', email: '', password: '' }}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.email = 'Required';
        }

        if (!values.surname) {
          errors.email = 'Required';
        }

        if (!values.birthDate) {
          errors.birthDate = "Required";
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (
          values.password.trim().length <= 6
        ) {
          errors.password = "Minimum is 6 symbols";
        } else if (
          /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(values.password)
        ) {
          errors.password = "Pasword shuld contain numbers, upper & lower case letters";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label for="inputName">Name</label>
          <input
            id="inputName"
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <p className="text-danger">{errors.name && touched.name && errors.name}</p>
          <label for="inputSurname">Surname</label>
          <input
            id="inputSurname"
            type="text"
            name="surname"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
          />
          <p className="text-danger">{errors.surname && touched.surname && errors.surname}</p>
          <label for="inputBirthDate">BirthDay</label>
          <input
            id="inputBirthDate"
            type="date"
            name="birthDate"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.birthDate}
          />
          <p className="text-danger">{errors.birthDate && touched.birthDate && errors.birthDate}</p>
          <label for="inputEmail">Email address</label>
          <input
            id="inputEmail"
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p className="text-danger">{errors.email && touched.email && errors.email}</p>
          <label for="inputPassword">Password</label>
          <input
            id="inputPassword"
            type="password"
            name="password"
            class="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p class="text-danger">{errors.password && touched.password && errors.password}</p>
          <button type="submit" class="btn btn-warning" disabled={isSubmitting || errors}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </>
);
 
export default Basic;