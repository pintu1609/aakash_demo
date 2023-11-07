import React from 'react'
import Card from './Card'

const CardView = () => {
  return (
    <div>
      <div className='cardview  ' style={{margin:'0 70px'}}>
       
        <div className='row'>
            <div className='col-md-3 d-flex' style={{justifyContent:'start'}}>
        <Card logo={<i className="fa-solid fa-eye fa-sm mx-1" style={{ color: '#adb9e0' }}></i> } title='Pageviews' views='50.8K' growth='28.4%' direction={<i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i>} background='#153b41' color='#18ca74' />
        </div>
        <div className='col-md-3 d-flex'style={{justifyContent:'center'}}>
        <Card logo={<i  className="fa-solid fa-user fa-sm mx-1" style={{ color: '#adb9e0' }}></i> } title='Pageviews' views='23.6K' growth='12.6%' direction={<i className="fa-solid fa-arrow-down mx-1 " style={{color: '#fd5a65'}}></i>}  background='#41273f' color='#fd5a65' />
        </div>
        <div className='col-md-3 d-flex'style={{justifyContent:'center'}}>
        <Card logo={<i  className="fa-solid fa-circle-plus fa-sm mx-1"style={{ color: '#adb9e0' }}></i> } title='Pageviews' views='756K' growth='3.1%' direction={<i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i>}  background='#153b41' color='#18ca74' />
        </div>
        <div className='col-md-3 d-flex'style={{justifyContent:'end'}}>
        <Card logo={<i className="fa-solid fa-star fa-sm mx-1" style={{ color: '#adb9e0' }}></i> } title='Pageviews' views='2.3K'  growth='11.3%'  direction={<i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i>}  background='#153b41' color='#18ca74'/>

            </div>

        </div>
        </div>

      

    </div>
  )
}

export default CardView
