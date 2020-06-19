import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { ROLE, ROUTE_PAGE } from '../../functionals/Common/constants';
import { STATUS_AUTH } from '../../functionals/AuthUser/constants';
import { openLink } from '../../utils/electronHelper';
import { isCheckAuth } from '../../utils/localStoreHelper';
import i18n from '../../i18n';
import './login.scss';

const Login = (props) => {
  const { isLoading, currentUser, errorAuth, handleLogin, history } = props;
  const [hasError, setHasError] = useState('');
  const [openEye, setOpenEye] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setHasError('');
    handleLogin(data.email, data.password);
  };
  useEffect(() => {
    if (errorAuth) {
      const { status } = errorAuth.data;
      if (status === STATUS_AUTH.ACCOUNT_NOT_ACTIVE) {
        setHasError(i18n.t('validation.accountNotActive'));
      } else if (
        status === STATUS_AUTH.INCORRECT_PASSWORD ||
        status === STATUS_AUTH.ACCOUNT_NOT_EXIST
      ) {
        setHasError(i18n.t('validation.userPassIncorrect'));
      }
    } else if (currentUser) {
      if (currentUser.role === ROLE.ROLE_TEACHER) {
        history.push(ROUTE_PAGE.ROUTE_HOME);
      } else {
        setHasError(i18n.t('validation.accountNotActive'));
      }
    }
  }, [currentUser, errorAuth]);

  useEffect(() => {
    setHasError('');
  }, []);

  const handleClickEye = useCallback(() => {
    setOpenEye(!openEye);
  }, [openEye]);

  const handleClickOpenForgotPassword = useCallback((event) => {
    event.preventDefault();
    openLink(ROUTE_PAGE.ROUTE_FORGOT_PASSWORD);
  }, []);
  if (isCheckAuth()) {
    return <Redirect to={ROUTE_PAGE.ROUTE_HOME} />;
  }
  return (
    <div className="wrapper-login">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div className="form-background">
            <div className="bg-login" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Update Login version 0.0.18</h2>
          <div className="form-login">
            <div className="main-login">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="group-form">
                  <div className="each-form">
                    <input
                      className="form-control input-form"
                      name="email"
                      placeholder={`${i18n.t('login.email')}`}
                      ref={register({
                        required: `${i18n.t('login.email')} ${i18n.t(
                          'validation.required'
                        )}`,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: i18n.t('validation.formatEmail'),
                        },
                      })}
                    />
                    <i className="icon icon-email" />
                    {errors.email && (
                      <span className="error">{errors.email.message}</span>
                    )}
                  </div>
                  <div className="each-form">
                    <input
                      className="form-control input-form"
                      placeholder={`${i18n.t('login.password')}`}
                      type={openEye ? `password` : `text`}
                      name="password"
                      ref={register({ required: true })}
                    />
                    <i className="icon icon-password" />
                    <i
                      onClick={() => handleClickEye(false)}
                      className={`icon ${
                        openEye ? `icon-eye-open` : `icon-eye-close`
                      }`}
                    />
                    {errors.password && (
                      <span className="error">
                        {`${i18n.t('login.password')} ${i18n.t(
                          'validation.required'
                        )}`}
                      </span>
                    )}
                  </div>
                  <div className="each-form each-form-center">
                    <a
                      onClick={(e) => handleClickOpenForgotPassword(e)}
                      className="link"
                    >
                      {i18n.t('login.forgotPassword')}
                    </a>
                  </div>
                  <div className="each-form each-form-center">
                    <button
                      className={
                        isLoading
                          ? `btn btn-primary btn-login`
                          : `btn btn-primary`
                      }
                      type="submit"
                      name="signin"
                      disabled={isLoading}
                    >
                      {i18n.t('login.signIn')}
                      {isLoading ? <i className="loading" /> : ''}
                    </button>
                  </div>
                </div>
                {hasError && hasError.length > 0 && (
                  <div className="form-error">
                    <p className="error">{hasError}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
