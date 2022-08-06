import {Link} from 'react-router-dom';


function Footer(){
  return(
  <footer>
    <div className="end"/>
    <div className="roseeta__name"> Roseeta </div>
    <div className="roseeta__policy">
      <Link to="/policy-term" className="roseeta__policy--detail">이용약관</Link>
      <Link to="/privacy" className="roseeta__policy--detail">개인정보처리방침</Link>
    </div>
    <div className="roseeta__info"> 
      <p className="roseeta__detail">대표 : 정동인</p>
      <p className="roseeta__detail">이메일 주소 : roseeta.cogito@gmail.com</p>
      <p className="roseeta__detail">주소 : 대한민국 서울특별시 성북구 안암로 145, 고려대학교 경영본관 218호</p>
      <p className="roseeta__detail">클라우드 호스팅 : Amazon Web Services Inc.</p>
      <p className="roseeta__copyright"> Roseeta &copy; {new Date().getFullYear()} All Rights Reserved </p>
    </div>
  </footer>
  );
}

export default Footer;
