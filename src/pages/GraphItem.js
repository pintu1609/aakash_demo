import React,{useState, useEffect} from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


import { LineChart, Line,  } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';





const GraphItem = () => {
    
    
    const [apiData, setApiData] = useState([]);
    const [profitData, setProfitData] = useState([])
const [visitorData, setVisitorData] = useState([])


        // main graph

    const getGraph=async()=>{

        // api Call for area line graph
        try{
        const response = await fetch("https://mocki.io/v1/09199a38-be9f-4de1-b34d-0face48cdb89", {
         method: "GET", 
          
         headers: {
           "Content-Type": "application/json",
        
         },
        
       });
       if (response.ok) {
        const data = await response.json();
        console.log(data)
        setApiData(data.data); // Set the fetched data to state
      } else {
        throw new Error('Network response was not ok');
      }

      } catch (error) {
        console.error("Fetch API error:", error);
        
       
      }

     }

     

     useEffect(() => {
        getGraph();
      }, []);
      
        // Bar Graph

        const BarGraph=async()=>{

            // api Call for Bar Graph
            try{
            const response = await fetch("https://mocki.io/v1/e1dffb18-52f6-4240-9d75-397eb204f12d", {
             method: "GET", 
              
             headers: {
               "Content-Type": "application/json",
            
             },
            
           });
           if (response.ok) {
            const data = await response.json();
            console.log(data)
            setProfitData(data.profit); // Set the fetched data to state
          } else {
            throw new Error('Network response was not ok');
          }
    
          } catch (error) {
            console.error("Fetch API error:", error);
            
           
          }
    
         }
    
         
    
         useEffect(() => {
            BarGraph();
          }, []);


      // line graph
      const lineGraph=async()=>{

        // api Call line graph
        try{
        const response = await fetch("https://mocki.io/v1/1435f43c-cdfb-4b25-9cc5-5824fc929568", {
         method: "GET", 
          
         headers: {
           "Content-Type": "application/json",
        
         },
        
       });
       if (response.ok) {
        const data = await response.json();
        console.log(data)
        setVisitorData(data.visitor); // Set the fetched data to state
      } else {
        throw new Error('Network response was not ok');
      }

      } catch (error) {
        console.error("Fetch API error:", error);
        
       
      }

     }

     

     useEffect(() => {
      lineGraph();
      }, []);
      


      const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          const data = payload[0].payload; // Get the specific payload data
          return (
            <div className="custom-tooltip" style={{borderRadius:'5px', background:'#101935', padding:'10px 20px', height:'70px', border:'1px solid #1f294a'}}>
              <div className='d-flex flex-column' >

              <div className='d-flex flex-row align-items-center' >
                        <h6 style={{color:'#ffffff', marginBottom:'0px'}}>
                       $ {` ${data.amt}`}

                        </h6>
                        <button type="button" className="butt mx-2 d-flex align-items-center " >24.8% <i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i> </button>
                    </div>

              <p style={{color:'#475171', textAlign:'center', }}>{` ${data.name}`}</p>
              </div>
            </div>
          );
        }
      
        return null;
      };
      
      
      
      
      
      
      
      
      

  return (
    <div>
        <div style={{padding:'30px 70px'}}>

        
       <div className='graph' style={{margin:'0px 0px 0px',border:'1px solid #30374c', borderRadius:'5px', background:'#101935' }}>
        <div className='graphitem d-flex flex-row' style={{padding:'20px 30px'}} >
        <div className='maingraph' style={{width:'50vw', height:'470px' }}>

            <div className='tit d-flex justify-content-between' style={{padding:'10px 20px'}}>

                <div>
                    <h5 style={{fontSize:12 ,color:'#adb9e0'}}>
                        Total Revenue
                    </h5>
                    <div className='d-flex flex-row align-items-center'>
                        <h6 style={{color:'#ffffff', marginBottom:'0px'}}>
                            $240.8K

                        </h6>
                        <button type="button" className="butt mx-2 d-flex align-items-center " >24.8% <i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i> </button>
                    </div>
                </div>

                <div className='d-flex flex-row align-items-center'>

                    <h6 style={{fontSize:12 ,color:'#adb9e0', margin:'0px 10px '}}><i className="fa-solid fa-circle fa-sm mx-1" style={{color: '#6168e8'}}></i>  Revenue </h6>
                    <h6 style={{fontSize:12 ,color:'#adb9e0' , margin:'0px 10px'}}><i className="fa-solid fa-circle fa-sm mx-1" style={{color: '#51b4f0'}}></i>  Expenses </h6>



                    <div className="btn-group " style={{marginLeft:10}}>
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#adb9e0', fontSize:12, background:'#212c4d', border:'1px solid #2c385c', padding:'2px 2px'}}>
                    <i className="fa-solid fa-calendar fa-sm mx-1" style={{color: '#adb9e0'}}></i> Jan 2024-Dec 2024
                    </button>
                    <ul className="dropdown-menu" style={{textAlign:'center', background:'#212c4d',color:'#adb9e0', minWidth:'8rem'}}>
                        <li>Action</li>
                        <li>Another action</li>
                        
                    </ul>
                    </div>
                </div>

            </div>
          


        <ResponsiveContainer width="100%" height="90%">
      
        <AreaChart
          width={500}
          height={400}
          data={apiData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#1f2949" horizontal={true} vertical={false} />
          <XAxis dataKey="name" stroke='#a9b4dc' axisLine={false}/>
          <YAxis stroke='#a9b4dc' axisLine={false} tickFormatter={(value) => `${value / 1000}K`}   />
          <Tooltip content={<CustomTooltip />}  />
          <Area type="monotone" dataKey="expenses" stackId="1" stroke="#51b4f0" fill="#152244" />
          <Area type="monotone" dataKey="revenue" stackId="2" stroke="#6168e8" fill="#1d2655" />
          
        </AreaChart>
       
      </ResponsiveContainer>


        </div>
        <div className='partition-line' style={{width:'1px', height: '540px', background:'#30374c', margin:'-20px 0px'}}></div>
       <div className='sidegraph d-flex flex-column' style={{width:'35vw', paddingLeft:'30px'}}>
                <div>
                            <div className='head' style={{marginBottom:'10px'}}>
                                <h5 style={{fontSize:12 ,color:'#adb9e0'}}>
                                <i className="fa-solid fa-chart-line fa-sm mx-1" style={{color: '#a6b1d8'}}></i> Total Profit
                                </h5>
                                <div className='d-flex flex-row align-items-center mx-2'>
                                    <h6 style={{color:'#ffffff', marginBottom:'0px' }}>
                                        $240.8K

                                    </h6>
                                    <button type="button" className="butt mx-2 d-flex align-items-center " >24.8% <i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i> </button>
                                </div>
                            </div>


                            <div style={{height:'150px', padding:'10px 0'}}>

                            <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                    width={500}
                                    height={300}
                                    data={profitData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: -15,
                                        bottom: 0,
                                    }}
                                    >
                                    <CartesianGrid stroke="#1f2949" horizontal={true} vertical={false} />
                                    
                                    <XAxis dataKey="name" stroke='#a9b4dc' axisLine={false} interval={3}/>
                                    <YAxis stroke='#a9b4dc' axisLine={false} tick={{ display: 'none' }}/>
                                   
                                    <Bar dataKey="pv" fill="#6c72ff" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                    <Bar dataKey="uv" fill="#54bff9" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                                    </BarChart>
                                </ResponsiveContainer>

                            </div>
                            <div className='horizontal-partition' style={{ width: '100%', height: '2px', background: '#30374c', }}></div>

                    <div className='bota' style={{padding:'10px'}} >
                            <div className='d-flex justify-content-between align-items-center'>

                                <div className='d-flex flex-row '>

                                <h5 style={{fontSize:14 ,color:'#adb9e0'}}>
                                    Last 12 Months
                                </h5>  
                                </div>
                                <div>
                                <h5 style={{fontSize:14 ,color:'#5960d6'}}>
                                    View Report
                                </h5>
                                </div>
                            </div>


                        </div>
                </div>
                <div className='horizontal-partition' style={{ width: '113%', height: '1px', background: '#30374c',margin:'0px -30px' }}></div>

                <div>
                            <div className='bott ' style={{padding:'18px 0 10px'}}>
                                <h5 style={{fontSize:12 ,color:'#adb9e0'}}>
                                <i className="fa-solid fa-clock fa-sm mx-1" style={{color: '#a6b1d8'}}></i> Total Session
                                </h5>
                                <div className='d-flex flex-row align-items-center mx-2' >
                                    <h6 style={{color:'#ffffff', marginBottom:'0px'}}>
                                    400

                                    </h6>
                                    <button type="button" className="butt mx-2 d-flex align-items-center " >16.8% <i className="fa-solid fa-arrow-down fa-rotate-180 mx-1" style={{color: '#18ca74'}}></i> </button>
                                </div>
                            </div>
                            <div style={{height:'130px', padding:'10px 0'}}>
                                

                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart
                                        width={500}
                                        height={300}
                                        data={visitorData}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: -25,
                                            bottom: 5,
                                        }}
                                        >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1f2949" horizontal={false} vertical={true}  />
                                       
                                        <XAxis dataKey="name" stroke='#a9b4dc' axisLine={false} interval={7}/>
                                        <YAxis stroke='#a9b4dc' axisLine={false} ticks={[0, 250, 500]}  />
                                        {/* <Tooltip /> */}
                                        {/* <Legend /> */}
                                        <Line type="monotone" dataKey="people" stroke="#5b61d8" />         
                                        </LineChart>
                                    </ResponsiveContainer>


                            </div>
                            <div className='horizontal-partition' style={{ width: '100%', height: '2px', background: '#30374c', }}></div>

                        <div className='bota' >
                            <div className='d-flex justify-content-between align-items-center' style={{padding:'12px 0px'}}>

                                <div className='d-flex flex-row '>
                                <button type="button" className="butt mx-2 d-flex align-items-center " style={{fontSize:15}} >Live</button>

                                <h5 style={{fontSize:14 ,color:'#adb9e0',margin:'5px 0px 0px'}}>
                                    10k Visitors
                                </h5>  
                                </div>
                                <div>
                                <h5 style={{fontSize:14 ,color:'#5960d6'}}>
                                    View Report
                                </h5>
                                </div>
                            </div>


                        </div>
                </div>

       </div>
       </div>
        </div>
        </div>
    </div>
  )
}

export default GraphItem
