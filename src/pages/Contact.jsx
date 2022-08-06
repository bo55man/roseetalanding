import {Header,Footer} from 'components'
import { useState } from 'react';
import { dbService } from '../firebase';

function Contact() {

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

  return(
    <>
    <Header/>
    <main>
    <div className="content">
      <p> 지금 사전신청 하세요. </p>
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

export default Contact;