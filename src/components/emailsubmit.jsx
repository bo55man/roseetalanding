import { useState } from 'react';
import { ReactComponent as Logo } from '../Roseeta.svg';
import { dbService } from '../firebase';

function EmailSubmit() {
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
      await new Promise((r) => setTimeout(r, 100));
      alert('이메일이 제출되었습니다.');
    }
    setDisabled(false);
  }
  return(
    <form onSubmit={onSubmit} className="input">
      <input 
        value={preOrder} 
        onChange={onChange} 
        className="input__email" type="email" placeholder="이메일 주소" name="email" maxLength={30}/>
      <button type="submit" className="input__submit">서비스 구독권 받기</button>
    </form>
  );
}

export default EmailSubmit ;