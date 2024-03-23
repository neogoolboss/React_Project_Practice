import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleMenu from "./SingleMenu";
import SetMenu from "./SetMenu";
import SideMenu from "./SideMenu";
import Drink from "./Drink";

function MainMenu(){
    return(
        <>
            <div style={{height:'400px'}}>
                <div style={{borderBottom:'1px solid'}}>
                    <div style={{textAlign:'center',lineHeight:'100px',height:'100px'}}>
                        선택한 메뉴
                    </div>
                    <div style={{textAlign:'end',lineHeight:'30px'}}>
                        <Link to="../payment">주문하기</Link>
                    </div>
                </div>
                <div style={{textAlign:'center',lineHeight:'200px'}}>
                    <Link to="../additional">메뉴 클릭!</Link>
                </div>
            </div>
        </>
    );
}

export default MainMenu;