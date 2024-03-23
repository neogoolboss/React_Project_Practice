import style from './EmployeeCall.module.css';

function EmployeeCall() {

    return(
        <>
            <div className={style.직원호출}>
                <img src ='/image/직원아이콘.png'/>
                <h1>직원이 호출되었습니다.</h1>
                <h1>잠시만 기다려주세요.</h1>
            </div>
        </>
    );
}

export default EmployeeCall;
