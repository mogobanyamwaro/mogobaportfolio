import React from 'react';

import AllPages from '../components/pdf/Allpages';
import SinglePage from '../components/pdf/SinglePage';

// import { sampleBase64pdf } from './sampleBase64pdf';
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from '../pdfs/douglas.pdf';

// import './styles.css';

export default function Mycv() {
  return (
    <div className="">
      <h4>Single Page</h4>
      <SinglePage pdf={samplePDF} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPages pdf={samplePDF} />
      </div>

      <hr />

      {/* <h4>Base 64 Single Page</h4> */}
      {/* <SinglePage pdf={sampleBase64pdf} /> */}

      <hr />
    </div>
  );
}
