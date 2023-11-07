import React from 'react'

const Head = () => {
  return (
    <div>

            <div className='header'  style={{margin:'0 70px', padding:'25px 0'}}>
                <div className='content d-flex justify-content-between mx-4'>
                        <div className='d-flex flex-column'>
                            <h3 style={{color:'#ffffff', fontSize:20}}>Welcome Back,John</h3>
                            <h6 style={{color:'#acb7df', fontSize:10}}>Measure your adverstising ROI and report website traffic.</h6>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <button type="button" className="btn btn-primary mx-2" style={{background:'#212c4d', color:'#ffffff', fontSize:15}}>Export Data <i className="fa-solid fa-arrow-down fa-lg mx-1" style={{ color: '#ffffff'}}></i></button>
                            <button type="button" className="btn btn-primary mx-2" style={{background:'#6c72ff', color:'#ffffff', fontSize:15}}>create report</button>
                        </div>
                </div>
            </div>

    </div>
  )
}

export default Head