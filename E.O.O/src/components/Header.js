import {Link} from 'react-router-dom';
import style from './Header.module.css';
import {useState} from 'react';

function Header(){

    const[selectButton, setSelectButton] = useState(null);

    return(
        <>
            <div>
                <div className={style.갈색바}></div>

                <div className={style.네비바}>

                    <img src='/image/두꺼운로고.png' alt ='로고'/>

                    <button className={selectButton === '포장' ? style.포장버튼 : ''}
                        style={{
                            backgroundColor: selectButton === '포장' ? '#ffb800' : 'white',
                            borderColor: '#ffb800'}}
                        onClick={()=> {setSelectButton('포장')}}>
                        포장</button>

                    <button className={selectButton === '매장' ? style.포장버튼 : ''}
                        style={{
                            backgroundColor: selectButton === '매장' ? '#ffb800' : 'white',
                            borderColor: '#ffb800'}}
                        onClick={()=> {setSelectButton('매장')}}>매장</button>
                        
                    <Link to='../'>
                        <button className={style.처음으로버튼}>
                            <img src='/image/처음으로아이콘.png'/>
                            <br/>
                            <p>처음으로</p>
                        </button>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Header;
