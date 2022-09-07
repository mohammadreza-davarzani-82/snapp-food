import {faXmark ,faCircleCheck,   } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle,faTrashCan } from '@fortawesome/free-regular-svg-icons'
import React , {useState} from "react";
import "./modalAddress.css"

const ModalAddress = (props) =>{
    

    return (
        <>
     
       
      {props.visible ? (
        <>
          <div dir="rtl" className=" flex justify-center items-center w-full fixed z-50   outline-none focus:outline-none ">
            <div className="relative w-full  ">
              {/*content*/}
                <div  className= "border-0 mx-auto top-32 rounded-2xl shadow-lg anim2 relative  flex flex-col bg-white outline-none focus:outline-none" style={{height:"387px",width:"42.5%"}}>
                    {/*header*/}
                    <div  className="flex   w-full p-4  rounded-t">
                        <button className="p-1  rounded-full items-center  bg-transparent border-0   float-right text-xl leading-none font-semibold outline-none focus:outline-none" onClick={props.close}>
                            <FontAwesomeIcon icon={faXmark} className='mx-auto mt-1 text-gray-500'  />
                        </button>
                        <h3 className="text-sm text-center font-bold flex justify-center mx-auto items-center  ">انتخاب آدرس</h3>
                    </div>
                {/*body*/}
               
                    <div className="px-4 pb-4 pt-0">
                        <div style={{maxHeight:"60vh",marginBottom:"1rem",overflow:"auto"}}>
                                <div className="flex flex-row flex-nowrap justify-between items-center relative box-border	w-full py-2.5 px-4 border border-solid border-gray-200 rounded-md cursor-pointer ">
                                    <div className="inline-flex basis-0 grow shrink items-center">
                                        <button>
                                        <FontAwesomeIcon  style={{width:"1.375rem" ,height:"1.375rem"}} icon={faCircleCheck} className='mx-auto mt-1.5  text-gray-500 '  />
                                        </button>
                                        <div  className="w mr-2 pr-2.5 flex flex-col flex-nowrap">
                                            <p style={{marginBottom:"5px"}} className="font-bold text-sm w-auto h-auto  mx-0 mt-0 p-0 inline-block">خانه</p>
                                            <div>
                                                <span className="inline-block w-auto h-auto m-0 p-0 overflow-hidden pt-0.5  text-sm text-gray-700"> پیروزی، خیابان زینتی افخم،روبروی بلوار نیکنام، کوچه خاکبازان،انتهای حریفی،کوچه ملکی پلاک ۱۵ واحد ۳</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-nowrap">
                                        <button className="flex justify-start h-14">
                                            <FontAwesomeIcon   icon={faTrashCan} className='mx-auto mt-1.5  text-gray-500 '  />
                                        </button>
                                        <button className="flex justify-start h-14">

                                        </button>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
               
                {/*footer*/}
                
                 
                </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-30 bg-gray-900"></div>
        </>
      ) : null}
    </>
    )
}
export default ModalAddress