import {Link} from 'react-router-dom';
import style from './Home.module.css';

function Home(){

    return(
        <>
            <Link to="menu">
                <div className={style.광고}></div>
            </Link>
            <div className={style.직원호출버튼}>
                <Link to='empolyeecall'>
                    <button>
                        <span>💇‍♀️</span>
                        <br/>
                        직원호출
                    </button>
                </Link>
            </div>
            <div className={style.가운데정렬}>
                <p>현금 및 기타 결제는 카운터에서 진행해주세요.</p>
            </div>
            <div className={style.포장매장버튼}>
                <Link to="menu">
                    <button>
                        <span>포장<br/>
                        <small>Take Out</small>
                        </span>
                    </button>
                </Link>
                <Link to="menu">
                    <button>
                        <span>매장<br/>
                        <small>Eat In</small>
                        </span>
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Home;

