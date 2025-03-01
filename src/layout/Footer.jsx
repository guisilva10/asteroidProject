import React from 'react'


const Footer = () => {
    return (<>
        <div style={{bottom:'0', width:'100%', position: 'fixed'}}>
            <footer >
                <div style={{display:'flex',background:'rgba(0,0,0,0.1)' }} >
                    <small style={{margin: '0 auto'}}>Copyright &copy; Thiago Silva </small>
                </div>
            </footer>
        </div>
    </>)
}

export default Footer