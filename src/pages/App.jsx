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
        <img src="img/book-viewer.jpg" className="content__img"/>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
      <img src="img/bookmark.png" className="content__img"/>
        <div className="content__info">
          <h3> 인상적이었던 부분을 북마크에 저장하고<br/> 언제든 다시 찾아보세요. </h3>
          <p> 직관적으로 저장하고 주변에 공유하세요. </p>
        </div>
      </div>
      <div className="content__divider"></div>
      <div className="content__sub">
        <div className="content__info">
          <h3> 책의 유비쿼터스를 경험하세요. </h3>
          <p> 인터넷만 연결된다면 OK입니다. 언제 어디서든, 다양한 검색엔진과 디바이스에서 로제타와 함께 든든해지세요. </p>
        </div>
        <img src="img/mobile.png" className="content__img"/>
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default App;

