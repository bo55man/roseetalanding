import { Header, Footer } from 'components';
import { useState } from 'react';
import { ReactComponent as Logo } from '../Roseeta.svg';
import { dbService } from '../firebase';


function App() {

  const [preOrder, setPreOrder] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onChange = (event) => {
    const { target: {value} } = event;
    setPreOrder(value);
  };
  const onSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();    
    if (preOrder.length < 3) {
      alert("올바를 이메일을 입력해주세요.");
    } else {
      await dbService.collection("preorder").add({
        preOrder
      });
      setPreOrder("");
      await new Promise((r) => setTimeout(r, 1000));
      alert('이메일이 제출되었습니다.');
    }
    setDisabled(false);
  }

  return (
    <>
    <Header/>
    <main>
      <div className="content">
        <h2 className="content__title"> 책을 웹에서 스트리밍하세요 </h2>
        <div className="content__title--sub"> 검색 한번으로 간편하게 접근하고, <br className="line-change"/> 직관적으로 활용까지.</div>
        <div className="content__title--sub2"> 이메일을 입력하시면 서비스 구독권을 보내 드립니다. </div>
        <form onSubmit={onSubmit} className="input">
          <input 
            value={preOrder} 
            onChange={onChange} 
            className="input__email" type="email" placeholder="이메일 주소" name="email" maxLength={30}/>
          <button type="submit" className="input__submit">서비스 구독권 받기</button>
        </form>
      </div>
      <div className="content__sub">
      <video
        className="content__img"
        src="video/intro1.mov"
        autoPlay
        playsInline
        muted
        loop></video>
        <div className="content__info">
          <h3> 책을 웹에서 바로 만나보세요. </h3>
          <p> PDF, 전자책처럼 디바이스에 일일히 저장할 필요 없습니다. 웹 브라우저에서 검색 한번으로 원하는 부분만 빠르고 간편하게 열람하세요. </p>
        </div>
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
          <h3> 인상적이었던 부분을 <br/> 북마크에 저장하고 <br className="line-change"/> 언제든 다시 찾아보세요. </h3>
          <p> 직관적으로 저장하고 주변에 공유까지 <br className="line-change"/>간단하게. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <video
        className="content__img"
        src="video/intro3.mov"
        autoPlay
        playsInline
        muted
        loop></video>
        <div className="content__info">
          <h3> 책의 유비쿼터스를 경험하세요. </h3>
          <p> 인터넷만 연결된다면 OK입니다. 언제 어디서든, 다양한 디바이스와 브라우저에서 로제타와 함께하세요. </p>
        </div>
      </div>
      <div className="content">
        <div className="content__title--sub"> 지금 이메일을 입력하시고<br className="line-change"/> 서비스 구독권을 받아보세요. </div>
        <div className="content__title--sub2"> 제공해주신 이메일 정보는 <br className="line-change"/> 알림 외 다른 목적으로 사용되지 않습니다. </div>
        <form onSubmit={onSubmit} className="input">
          <input 
            value={preOrder} 
            onChange={onChange} 
            className="input__email" type="email" placeholder="이메일 주소" name="email" maxLength={30}/>
          <button type="submit" className="input__submit">서비스 구독권 받기</button>
        </form>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

