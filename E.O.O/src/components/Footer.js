import {Link} from 'react-router-dom';
import style from './Footer.module.css';
import {useState} from 'react'


function Footer(){

    const [순서, set순서] = useState(1);
    return(
        <>
            <div className={style.푸터바}>
                <Link to='empolyeecall'>
                <div className={style.직원호출}>
                    <img src ='/image/직원호출아이콘.png'/>
                </div>
                </Link>
                <div className={style.단계이미지}>
                    <div className={style.단계}>
                        <p>메뉴선택</p>
                        <div className={순서 >= 1 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문내역</p>
                        <div className={순서 >= 2 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>결제</p>
                        <div className={순서 >= 3 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문완료</p>
                        <div className={순서 >= 4 ? style.주황 : style.회색}></div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Footer;

