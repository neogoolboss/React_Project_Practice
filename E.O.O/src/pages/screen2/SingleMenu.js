import React, { useState, useEffect } from 'react';
import style from './SingleMenu.module.css';

function SingleMenu() {
    const [menus, setMenus] = useState([]);
    const [page, setPage] = useState(1);
    const onePageSixMenus = 6;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/teamSixmen/E.O.O/develop/src/data/01_burger.json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setMenus(json);
            });
    }, []);

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
        setPage(pageNumber);
    }

    return (
        <div className={style.메뉴보이는곳}>
                {getMenu().map((menu, index) => (
                    <div className={`${style.상품} ${menu.empty ? style.비어있는상품 : ''}`}
                        key={index}
                    >
                        {menu.empty ? ( 
                            <div>없지롱</div>
                        ) : (
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
    );
}

export default SingleMenu;
