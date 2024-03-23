import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Finish(){
    return(
        <>
            <div style={{textAlign:'center',lineHeight:'450px',height:'450px'}}>
                <Link to="../">주문완료</Link>
            </div>
        </>
    );
}

export default Finish;