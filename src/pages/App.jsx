import { Header, Footer } from 'components';
import { useState } from 'react';
import { ReactComponent as Logo } from '../Roseeta.svg';
import { dbService } from '../firebase';


function App() {

  const [preorder, setPreOrder] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("preorder").add({
      preorder,
      createAt : Date.now(),
    });
    setPreOrder("");
  };
  const onChange = (event) => {
    const { target: {value} } = event;
    setPreOrder(value);
  };

  return (
    <>
    <Header/>
    <main>
      <div className="content">
        <h2 className="content__title"> 지식에 자유를 </h2>
        <div className="content__title--sub1"> 책 내용이 웹에서 바로 검색됩니다. </div>
        <div className="content__title--sub2"> 웹과 시멘틱 태그에 기반한 검색가능한 책 솔루션. </div>
        <p> 지금 사전신청 하세요. </p>
        <form onSubmit={onSubmit} className="input">
          <input 
            value={preorder} 
            onChange={onChange} 
            className="input__email" type="email" placeholder="이메일 주소" name="email" maxLength={30}/>
          <input className="input__submit" type="submit" value="사전신청 하기"/>
        </form>
      </div>
      <div className="content__sub">
        <div className="content__info">
          <h3> 책을 웹에서 바로 만나보세요. </h3>
          <p> PDF, 전자책처럼 디바이스에 일일히 저장할 필요 없습니다. 웹 브라우저에서 빠르고 간편하게 열람하세요. </p>
        </div>
        <video
        className="content__img"
        src="video/intro1.mov"
        autoPlay
        playsInline
        muted
        loop></video>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
      <video
        className="content__img"
        src="video/intro2.mov"
        playsInline
        autoPlay
        muted
        loop></video>
        <div className="content__info">
          <h3> 인상적이었던 부분을 북마크에 저장하고<br/> 언제든 다시 찾아보세요. </h3>
          <p> 직관적으로 저장하고 주변에 공유하세요. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <div className="content__info">
          <h3> 책의 유비쿼터스를 경험하세요. </h3>
          <p> 인터넷만 연결된다면 OK입니다. 언제 어디서든, 다양한 검색엔진과 디바이스에서 로제타와 함께하세요. </p>
        </div>
        <video
        className="content__img"
        src="video/intro3.mov"
        autoPlay
        playsInline
        muted
        loop></video>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <img className="content__img" src="img/firebase.png" />
        <div className="content__info">
          <h3> 이메일은 안전하게 보관됩니다. </h3>
          <p> Google이 지원하는 Firebase DB에 암호화되어 보관됩니다.</p>
        </div>
      </div>
      <div className="content">
        <div className="content__title--sub1"> 지금 사전신청하고<br/> 출시 전 알림을 받아보세요. </div>
        <div className="content__additional"> 제공해주신 이메일 정보는 알림 외 다른 목적으로 사용되지 않습니다. </div>
        <form onSubmit={onSubmit} className="input">
            <input 
              value={preorder} 
              onChange={onChange} 
              className="input__email" type="email" placeholder="이메일 주소" name="email" maxLength={30}/>
            <input className="input__submit" type="submit" value="사전신청 하기"/>
        </form>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

