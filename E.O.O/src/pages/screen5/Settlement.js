import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Settlement(){
    return(
        <>
            <div style={{textAlign:'center',lineHeight:'400px',height:'400px',border:'1px solid'}}>
                <Link to="../goodbye">카드입력</Link>
            </div>
        </>
    );
}

export default Settlement;