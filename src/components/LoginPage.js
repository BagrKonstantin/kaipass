import React from 'react';

const LoginPage = () => {
    let a = ' ';
    const handleClick = () =>{
        let b = (document.getElementById('text').value)
        a = b;
    }
    console.log(a);
    return (
        <div>
            <form name="publish">
                <input type="text" name="message" id="text" placeholder="введите сообщение"/>
                <button value="отправить" onClick={handleClick}/>
            </form>
        </div>
    );
};

export default LoginPage;