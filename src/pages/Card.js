import React from 'react'

const Card = (props) => {

    const buttonStyle = {
        background: props.background || '#153b41',
        color: props.color || '#18ca74',
        fontSize: '10px',
        padding: '1px 3px',
        height:'fit-content',
        borderRadius:'2px',
        border:`1px solid ${props.background || '#153b41'}`,
        cursor:'pointer',
       
      };
  return (
    <div>


            <div className="card" style={{ background:'#101935',width: '16rem' ,border:'1px solid #30374c'}}>
           
            <div className="card-body mx-2">
                <div className='d-flex justify-content-between' style={{marginBottom:'5px'}}>
                    <div className='d-flex flex-row'>
                    <h5 className="card-title" style={{fontSize:15 ,color:'#adb9e0'}}> {props.logo}</h5>
                    <h5 className="card-title" style={{fontSize:15 ,color:'#adb9e0'}}> {props.title}</h5>

                    </div>
                    <h6><i className="fa-solid fa-ellipsis fa-xl" style={{color: '#adb9e0'}}></i> </h6> 
                </div>

                <div className='d-flex flex-row align-items-center' >
                    <h5 style={{color:'#ffffff'}}> {props.views}</h5>
                    <button type="button" className=" mx-2 d-flex align-items-center " style={buttonStyle}>{props.growth} {props.direction}</button>


                </div>
                
            </div>
            </div>


    </div>
  )
}

export default Card