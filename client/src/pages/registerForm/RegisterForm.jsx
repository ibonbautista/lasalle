import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api/auth';
import logo from '../../assets/logo.png';
import './RegisterForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nif: '',
    name: '',
    surname: '',
    phone: '',
    isFamilyMember: false,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData((oldData) => ({ ...oldData, email }));
};

const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormData((oldData) => ({ ...oldData, password }));
};

const handleNifChange = (e) => {
    const nif = e.target.value;
    setFormData((oldData) => ({ ...oldData, nif }));
};

const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData((oldData) => ({ ...oldData, name }));
};

const handleSurnameChange = (e) => {
    const surname = e.target.value;
    setFormData((oldData) => ({ ...oldData, surname }));
};

const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setFormData((oldData) => ({ ...oldData, phone }));
};

const handleIsFamilyMemberChange = (e) => {
    const isFamilyMember = e.target.checked;
    setFormData((oldData) => ({ ...oldData, isFamilyMember }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(formData, navigate);
    console.log("Usuario registrado:", response);
    
    if(response.error){
        setError(response.error);
        console.log("Error en el registro:", response.error);

        if (response.error === "NIF ya registrado") {
          setFormData((oldData) => ({ ...oldData, nif: '' })); // Vaciar el campo NIF
        } else if (response.error === "Email ya registrado") {
          setFormData((oldData) => ({ ...oldData, email: '' })); // Vaciar el campo email
        }

    }else{
        console.log("Usuario registrado exitosamente.");
        setSuccess(true); // Mostrar el popup de éxito
        console.log(success);
        setTimeout(() => {
          navigate("/"); // Redirigir a login después de 2 segundos
      }, 3000);
    }
};

const handleBack = () => {
  navigate(-1); // Navega a la página anterior
};

const closePopup = () => {
  setSuccess(false); // Cerrar el popup manualmente si el usuario lo desea
};

  return (
    <section className="register-section">

      {success && (<div className="success-popup">
                      <p>Login successful! Redirecting to login...</p>
                      <button onClick={closePopup}>Close</button>
                   </div>
      )}

    <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <img src={logo} alt="logo" />
      <h1>Introduce your data</h1>
      <div className="row">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleSurnameChange} required />
        </div>
      </div>
  
      <div className="row">
        <div>
          <label htmlFor="nif">NIF:</label>
          <input type="text" name="nif" placeholder="NIF" value={formData.nif} onChange={handleNifChange} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handlePhoneChange} required />
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handlePasswordChange} required />
        </div>
      </div>

      <div className="row-checkbox">
        <label htmlFor="isFamilyMember">Are you a family member?</label>
        <input type="checkbox" name="isFamilyMember" checked={formData.isFamilyMember} onChange={handleIsFamilyMemberChange} />
      </div>
  
      <button type="submit">Register</button>
      <button className="back-button" type="button" onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>
      </button>
    </form>
  </section>
  
  );
}

export default RegisterForm;
