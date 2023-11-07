import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';  // Importa useHistory desde react-router-dom

function AppForm(){
  const history = useHistory(); // Obtiene la instancia de history

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}

      //espacio para validar que los datos sean ingresados
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Este campo es requerido';
        } else if(!values.email) {
          errors.email = 'Este campo es requerido';
        } else if(
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Direccion de correo invaliddo';
        } else if (!values.imagen) {
          errors.imagen = 'Este campo es requerido';
        }

        return errors;
      }}

      //cuando se presiona el boton, guarda la informacio
      onSubmit={(values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('imagen', values.imagen);
      
        fetch('https://formspree.io/f/mqkjpgqa', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        })
          .then((response) => {
            setSubmitting(false);
            alert('Gracias por registrarte');
            history.push('/tarjeta-de-presentacion');
          });
      }}

      //formulario
    >
      {({ isSubmitting }) => (
        <Form className="form" encType="multipart/form-data">


          <div>
            <label htmlFor="name">Tu nombre:</label>
            <Field type="text" name="name"  />
            <ErrorMessage name="name" component="div" />
          </div>
          
          <div>
            <label htmlFor="email">Tu correo:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="imagen">Cargar imagen:</label>
            <Field type="file" name="imagen" accept="image/*" />
            <ErrorMessage name="imagen" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Crear tarjeta de presentacion
          </button>

        </Form>
      )}

    </Formik>
  )
}

export default AppForm;