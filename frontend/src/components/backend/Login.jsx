import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('http://localhost:8000/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if(result.status == false){
        toast.error(result.message);
      }
      else{
        const userInfo = {
            id : result.id,
            token: result.token,
        }

        localStorage.setItem('userInfo',JSON.stringify(userInfo));

            navigate('/admin/dashboard');
      }

      if (!res.ok) {
        alert('Authentication failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('An error occurred while authenticating. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5 d-flex justify-content-center">
          <div className="login-form my-5">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="mb-3">Login here</h4>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email field is required',
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      type="email"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      placeholder="Enter email"
                      name="email"
                      id="email"
                    />
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email?.message}</p>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      {...register('password', {
                        required: 'Password field is required',
                      })}
                      type="password"
                      className={`form-control ${errors.password && 'is-invalid'}`}
                      placeholder="Enter password"
                      name="password"
                      id="password"
                    />
                    {errors.password && (
                      <p className="invalid-feedback">{errors.password?.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
