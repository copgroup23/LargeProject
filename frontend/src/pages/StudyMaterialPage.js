import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import StudyMaterial from '../components/StudyMaterial';
import TopHome from '../components/TopHome';

const StudyMaterialPage = () =>
{

    return(
      <div>
        <TopHome />
        <StudyMaterial />
      </div>
    );
};

export default StudyMaterialPage;
