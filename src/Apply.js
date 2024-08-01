import React, { useEffect } from 'react'
import { useState, useRef, useContext } from 'react'
import DataContext from "./Context/DataContext";


const Apply = () => {
    const {width} = useContext(DataContext) 
    const [count, setCount] = useState(0);
    const chipsRef = useRef([]);
    const formFieldRef = useRef([]);
    const handlebtnclickNext = (event) =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        event.preventDefault();
      if(count === 0){
        setCount(1);
      }
      else if(count === 1){
        setCount(2);
      }
    }
    const handlebtnclickBack = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if(count === 1){
          setCount(0);
        }
        else if(count === 2){
          setCount(1);
        }
      }
    useEffect(() => {
            chipsRef.current.forEach((chip, index) => {
                if (index === count) {
                    chip.classList.add('active');
                } else {
                    chip.classList.remove('active');
                }
            });
            formFieldRef.current.forEach((chip, index) => {
                if (index === count) {
                    chip.classList.add('active');
                } 
                else {
                    chip.classList.remove('active');
                }
                
            });
    }, [count]);
  return (
    <div  className={width > 992 ? 'applypage w-full' : 'applypage w-small'}>
      <div className="applylayer">
        <form action="" id='applicationForm'>
            <div  className={width > 992 ? 'formtitle w-full' : 'formtitle w-small'}><span>GDSC HIRING 2024</span></div>
            <div className="chipsdiv" >
                <div className="chips active" ref={(el) => (chipsRef.current[0]) = el}></div>
                <div className="chips" ref={(el) => (chipsRef.current[1]) = el}></div>
                <div className="chips" ref={(el) => (chipsRef.current[2]) = el}></div>
            </div>
           <div  className={width > 992 ? 'formsdiv w-full' : 'formsdiv w-small'}>
           <div className="formfields1"  ref={(el) => (formFieldRef.current[0] = el)}>
           <div className="formfieldinner">
                <label htmlFor="applname">Name</label>
                <input type="text" id='applname' />
           </div>
           <div className="formfieldinner">
                <label htmlFor="applemail">Chitkara Email Id</label>
                <input type="text" id='applemail' />
           </div>
           <div className="formfieldinner">
                <label htmlFor="applroll">Roll Number</label>
                <input type="text" id='applroll' />
           </div>
           <div className="formfieldinner">
                <label htmlFor="applnum">Phone Number</label>
                <input type="text" id='applnum' />
           </div>
           <div className="formfieldinner">
           <label htmlFor="applbranch">Branch</label>
           <input type="text" id='applbranch'/>
           </div>
           <div className="formfieldinner">
                <label >Year</label>
                <div className="makerow">
                <input type="radio" id='applyear1st' name='year'/>
                <label htmlFor="applyear1st">2nd</label>
                </div>
                <div className="makerow">
                <input type="radio" id='applyear2nd' name='year'/>
                <label htmlFor="applyear2nd">3rd</label>
                </div>
                
           </div>
           <div className="formfieldinner">
                <label >Please enter the domain you wish to join :</label>
                <div className="makerow">
                <input type="radio" id='appldomain1st' name='domain'/>
                <label htmlFor="appldomain1st">Technical</label>
                </div>
                <div className="makerow">
                <input type="radio" id='appldomain2nd' name='domain'/>
                <label htmlFor="appldomain2nd">Non-Technical</label>
                </div>
           </div>
            

           </div>
            <div className="formfields2" ref={(el) => (formFieldRef.current[1] = el)}>
            
                <div className="formfieldinner">
                    <label >Which team you would like to join?</label>
                    <div className="makerow">
                    <input type="radio" id='applteam1' name='domain'/>
                    <label htmlFor="applteam1">AI/ML</label>
                    </div>
                    <div className="makerow">
                    <input type="radio" id='applteam2' name='domain'/>
                    <label htmlFor="applteam2">Android</label>
                    </div>
                    <div className="makerow">
                    <input type="radio" id='applteam3' name='domain'/>
                    <label htmlFor="applteam3">Cloud</label>
                    </div>
                    <div className="makerow">
                    <input type="radio" id='applteam4' name='domain'/>
                    <label htmlFor="applteam4">CyberTech</label>
                    </div>
                    <div className="makerow">
                    <input type="radio" id='applteam5' name='domain'/>
                    <label htmlFor="applteam5">SheCodes</label>
                    </div>
                    <div className="makerow">
                    <input type="radio" id='applteam6' name='domain'/>
                    <label htmlFor="applteam6">Web Dev</label>
                    </div>
            </div>

            </div>
            <div className="formfields3" ref={(el) => (formFieldRef.current[2] = el)}>
            <div className="formfieldinner">
           <label htmlFor="applbranch" style={width>992 ? {fontSize: '16px', color: 'wheat'}:{fontSize: '13px', color: 'wheat'}}>Here is the problem Statement : <br />
           Develop a simple responsive web page using HTML, CSS, and JavaScript For GDSC CUIET showcasing skills in front-end design and user experience. Use your creative imagination of how an official GDSC website should look and for images you can use illustrations.</label>
           </div>
           <div className="formfieldinner">
           <label htmlFor="appllink">Please prepare a document with the provided content and upload your GitHub Link:</label>
           <input type="link" id='appllink'/>
           </div>
            </div>
           </div>
           <div className="formbtns">
           {count &&
           <button  className={width > 992 ? 'submitBtn backbtn w-full' : 'submitBtn backbtn w-small'} type='button' onClick={handlebtnclickBack}>Back</button>
           }
           {(count == 2) ? 
            (<button  className={width > 992 ? 'submitBtn nextbtn w-full' : 'submitBtn nextbtn w-small'} type='submit'> Submit</button>):
            (<button className={width > 992 ? 'submitBtn nextbtn w-full' : 'submitBtn nextbtn w-small'} type='button' onClick={handlebtnclickNext}> Next</button>)
        }
            </div>
        </form>
      </div>
    </div>
  )
}

export default Apply
