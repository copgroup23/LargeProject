import React from 'react';
import TopHome from '../components/TopHome';
import QuizCompleted from '../components/QuizCompleted';

const QuizCompletedPage = () =>
{

    return(
      <div className="loginPage">
        <TopHome />
        <QuizCompleted />
      </div>
    );
};

export default QuizCompletedPage;
