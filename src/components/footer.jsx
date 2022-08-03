

function Footer(){
  return(
  <footer>
    <div className="end"/>
    <div className="roseeta__info"> 
      <div className="roseeta__name"> Roseeta </div>
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
