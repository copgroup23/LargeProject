import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import QuizPage from './pages/QuizPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import QuizCompletedPage from './pages/QuizCompletedPage';
import HistoryPage from './pages/HistoryPage';
import ViewQuizPage from './pages/ViewQuizPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router >
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/SignUp" exact>
        <SignUpPage />
      </Route>
      <Route path="/Home" exact>
        <HomePage />
      </Route>
      <Route path="/ForgotPassword" exact>
        <ForgotPasswordPage />
      </Route>
      <Route path="/VerifyEmail" exact>
        <VerifyEmailPage />
      </Route>
      <Route path="/Quiz" exact>
        <QuizPage />
      </Route>
      <Route path="/ResetPassword" exact>
        <ResetPasswordPage />
      </Route>
      <Route path="/QuizCompleted" exact>
        <QuizCompletedPage />
      </Route>
      <Route path="/History" exact>
        <HistoryPage />
      </Route>
      <Route path="/ViewQuiz" exact>
        <ViewQuizPage />
      </Route>
      <Route path="/StudyMaterial" exact>
        <StudyMaterialPage />
      </Route>
      <Route path="/Profile" exact>
        <ProfilePage />
      </Route>
      <Redirect to="/" />
    </Switch>
    </Router>
  );
}

export default App;