import { Link, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleMenu from "./SingleMenu";
import SetMenu from "./SetMenu";
import SideMenu from "./SideMenu";
import Drink from "./Drink";
import style from './MainMenu.module.css';
import {useState, useEffect} from 'react';

function MainMenu(){
    
    const [menus, setMenus] = useState([]);
    const [page, setPage] = useState(1);
    const onePageSixMenus = 6;
    const [selectMenu1, setSelectMenu1] = useState(null);
    const [selectMenu2, setSelectMenu2] = useState(null);
    const [selectMenu3, setSelectMenu3] = useState(null);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectCategory, setSelectCategory] = useState('');



    useEffect(() => {
        fetch('https://raw.githubusercontent.com/teamSixmen/E.O.O/develop/src/data/01_burger.json')
        .then(response => response.json())
        .then(json =>
            { console.log(json);
               setMenus(json);
            })

    },
    []
    );

    function getMenu() {

        const startIndex = (page - 1) * onePageSixMenus;
        const endIndex = startIndex + onePageSixMenus;
        const currentMenus = menus.slice(startIndex, endIndex);
        
        if (currentMenus.length < onePageSixMenus) {
            const emptyChan = onePageSixMenus - currentMenus.length;
            for (let i = 0; i < emptyChan; i++) {
            currentMenus.push({ empty: true });
            }
        }
    return currentMenus;
    }

    function pageChange(pageNumber) {
        setPage(pageNumber)
    }

    function selectClickMenu(menu) {
        if (!selectMenu1) {
            setSelectMenu1(menu);
            setCount1(1);
            setTotalPrice(totalPrice + menu.price);
        } else if (!selectMenu2) {
            setSelectMenu2(menu);
            setCount2(1);
            setTotalPrice(totalPrice + menu.price);
        } else if (!selectMenu3) {
            setSelectMenu3(menu);
            setCount3(1);
            setTotalPrice(totalPrice + menu.price);
        }
    }

    function plusCount(menuNumber) {
        if (menuNumber === 1) {
            setCount1(prevCount => prevCount + 1);
            setTotalPrice(totalPrice + selectMenu1.price);
        } else if (menuNumber === 2) {
            setCount2(prevCount => prevCount + 1);
            setTotalPrice(totalPrice + selectMenu2.price);
        } else if (menuNumber === 3) {
            setCount3(prevCount => prevCount + 1);
            setTotalPrice(totalPrice + selectMenu3.price);
        }
    }

    function minusCount(menuNumber) {
        if (menuNumber === 1) {
            if (count1 > 1) {
                setCount1(prevCount => prevCount - 1);
                setTotalPrice(totalPrice - selectMenu1.price);
            } else {
                setSelectMenu1(null);
                setCount1(0);
                setTotalPrice(totalPrice - selectMenu1.price);
            }
        } else if (menuNumber === 2) {
            if (count2 > 1) {
                setCount2(prevCount => prevCount - 1);
                setTotalPrice(totalPrice - selectMenu2.price);
            } else {
                setSelectMenu2(null);
                setCount2(0);
                setTotalPrice(totalPrice - selectMenu2.price);
            }
        } else if (menuNumber === 3) {
            if (count3 > 1) {
                setCount3(prevCount => prevCount - 1);
                setTotalPrice(totalPrice - selectMenu3.price);
            } else {
                setSelectMenu3(null);
                setCount3(0);
                setTotalPrice(totalPrice - selectMenu3.price);
            }
        }
    }

    function choiceCategory(category) {
        setSelectCategory(category);
    }

    return(
        <>
            <div className={style.선택메뉴}>
                <div className={style.갈색줄}>갈색줄</div>
                <div className={style.선택메뉴나옴}>
                    <div className={style.선택메뉴창}>
                    {selectMenu1 && (
                        <div className={style.선택메뉴창}>
                            <img src={`/image/Burger/${selectMenu1.menuName}.png`} alt={selectMenu1.menuName} />
                            <div>{selectMenu1.menuName}</div>
                            <div>{selectMenu1.price}원</div>
                            <div className={style.카운트}>
                                <button className={style.마이너스} onClick={() => minusCount(1)}></button>
                                <p>{count1}</p>
                                <button className={style.플러스} onClick={() => plusCount(1)}></button>
                            </div>
                        </div>
                    )}
                    </div>
                    
                    <div className={style.선택메뉴창}>
                    {selectMenu2 && (
                        <div className={style.선택메뉴창}>
                            <img src={`/image/Burger/${selectMenu2.menuName}.png`} alt={selectMenu2.menuName} />
                            <div>{selectMenu2.menuName}</div>
                            <div>{selectMenu2.price}원</div>
                            <div className={style.카운트}>
                                <button className={style.마이너스} onClick={() => minusCount(2)}></button>
                                <p>{count2}</p>
                                <button className={style.플러스} onClick={() => plusCount(2)}></button>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className={style.선택메뉴창}>
                    {selectMenu3 && (
                        <div className={style.선택메뉴창}>
                            <img src={`/image/Burger/${selectMenu3.menuName}.png`} alt={selectMenu3.menuName} />
                            <div>{selectMenu3.menuName}</div>
                            <div>{selectMenu3.price}원</div>
                            <div className={style.카운트}>
                                <button className={style.마이너스} onClick={() => minusCount(3)}></button>
                                <p>{count3}</p>
                                <button className={style.플러스} onClick={() => plusCount(3)}></button>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                <div className={style.내실돈}>내실돈 : {totalPrice} 원</div>
            </div>
            <div className={style.메뉴전체칸}>
                <div className={style.메뉴카테고리}>
                    <Link to='/menu'>
                        <button className={selectCategory === '추천' ? `${style.선택된카테고리}` : ''}
                                onClick={() => choiceCategory('추천')}>추천</button>
                    </Link>

                    <Link to = '/singlemenu'>
                        <button className={selectCategory === '버거' ? `${style.선택된카테고리}` : ''}
                                onClick={() => choiceCategory('버거')}>버거</button>
                    </Link>
                    
                    <Link to='/menu'>
                        <button className={selectCategory === '치킨' ? `${style.선택된카테고리}` : ''}
                                onClick={() => choiceCategory('치킨')}>치킨</button>
                    </Link>
                    
                    <button>사이드</button>
                    
                    <button>음료</button>
                </div>

                <div className={style.메뉴보이는곳}>
                    {getMenu().map((menu, index) => (
                        <div className={`${style.상품} ${menu.empty ? style.비어있는상품 : ''}`}
                             key={index}
                             onClick = {() => selectClickMenu(menu)}
                        >
                            {menu.empty ? <div>없지롱</div> : (
                                <>
                                <img src={`/image/Burger/${menu.menuName}.png`} alt={menu.menuName} />
                                <div>{menu.menuName}</div>
                                <div>{menu.price}원</div>
                                </>
                            )}
                        </div>
                    ))}
                    <div className={style.페이지네이션}>
                        {Array.from({ length: Math.ceil(menus.length / onePageSixMenus) }, (_, index) => (
                            <button
                                key={index}
                                className={page === index + 1 ? style.버튼활성화 : style.페이지버튼}
                                onClick={() => pageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

            
            </div>
            
        </>
    );
}

export default MainMenu;