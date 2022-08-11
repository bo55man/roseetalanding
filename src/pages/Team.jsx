import {Header,Footer,EmailSubmit} from 'components';
import { useState } from 'react';
import { dbService } from '../firebase';

function Team() {

  return(
    <>
    <Header/>
    <main>
    <div className="content">
      <div className="content__title--sub2"> 이메일을 입력하시면 서비스 구독권을 보내 드립니다. </div>
      <EmailSubmit/>
    </div>
    </main>
    <Footer/>
    </>
  );
}

export default Team;