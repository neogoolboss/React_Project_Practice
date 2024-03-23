import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Payment(){
    return(
        <>
            <div style={{textAlign:'center',lineHeight:'200px',height:'200px',border:'1px solid'}}>
                대충 주문 내역
            </div>
            <div style={{height:'200px'}}>
                <div style={{background:'orange',width:'422px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>일반결제</div>
                <div style={{width:'423px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>간편결제</div>
            </div>
            <div style={{textAlign:'center',lineHeight:'100px',height:'100px',marginLeft:'-30px'}}>
                <Link to="../settlement">결제하기</Link> | {" "}
                <Link to="../menu">취소</Link>
            </div>
        </>
    );
}

export default Payment;