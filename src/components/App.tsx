import React, { Suspense } from 'react';
import Message from './Message';

import styles from '../styles/app.scss';
import hello from '../images/hello.gif';

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <img src={hello} alt="hello-world" />
        <Message />
      </Suspense>
    </div>
  );
};

export default App;
