import {useState,useRef} from 'react'
import emailjs from 'emailjs-com';

import './Contact.css';

function Contact() {
    const [submit,setSubmit] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    const [valid,setValid] = useState(false);

    String.prototype.replaceAt = function(index, replacement) {
      return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    const validEmail = (input) => {
      return (input.length>4 && input.includes('@'))
    }
    const validText = (input) => {
      return (input.length>3)
    }
    const changeName = (input) =>{
      setName(()=>input);
      
      if(input.length>4 && validEmail(email) && validText(text)){
        setValid(true)
      } else {
        setValid(false)
      }
    }
    const changeEmail = (input) =>{
      setEmail(()=>input);
      if(validText(name) && validEmail(input) && validText(text)){
        setValid(true);
      }else {
        setValid(false)
      }
    }
    const changeText = (input) =>{
      setText(()=>input);
      if(validText(name) && validEmail(email) && validText(input)){
        setValid(true);
      }else {
        setValid(false)
      }
    }
    const form = useRef();

    const sendMessage = async (e) => {
      e.preventDefault();
      

      emailjs.sendForm('service_1o2kdtp', 'template_0np39v5', form.current, '3auqE-bpvVjvPAsd6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSubmit(true);
    }
    const renderContent = () =>{
      if(!submit){
        return(
          <>
          <div className='flex justify-center items-center h-fullWith125m px-[20px]'>
          <div className="form ">
              <form action="#" ref={form} className="msg_form text-secondaryGray">
                  <label htmlFor="input_name">_name:</label>
                  <input onChange={(e)=>changeName(e.target.value)}
                  name="name" minLength="3" maxLength="30" id="input_name" placeholder="input your name"/>
                  <label htmlFor="input_email">_email:</label>
                  <input onChange={(e)=>changeEmail(e.target.value)}
                   name="email" id="input_email" maxLength="30" placeholder="input your email"/>
                  <label htmlFor="input_message">_message:</label>
                  <textarea onChange={(e)=>changeText(e.target.value)}
                  name="message" id="input_message" maxLength="227" wrap="hard" placeholder=" Leave a message here"></textarea>
                  
                  <button
                  onClick={valid?(e)=>sendMessage(e):(e)=>{e.preventDefault()}}
                  className={valid?'text-secondaryWhite':' brightness-50'}
                  >submit-message</button>
              </form>
            </div>
          </div>
          </>
        )
      } else return (
        <>
        <div className='flex justify-center items-center h-fullWith125m px-[20px]'>
          <div className='flex flex-col border-[1px] border-line p-[20px] rounded-[10px] text-secondaryGray items-center'>
            <h4 className='text-[28px]'>Thank you! &#129304;</h4>
            <div className='mt-[20px]'>
             &nbsp; Your message has been accepted. You will recieve answer really soon.
            </div>
            <button
            onClick={()=>setSubmit(false)}
            className='w-full mt-[50px] md:h-[38px] h-[30px] border-none rounded-[8px] bg-line text-secondaryWhite hover:brightness-150'
            >send-new-message</button>
          </div>
        </div>
        </>
      )
    }
    // const content = useMemo(()=>{
    //   return renderContent();
    // },[submit,valid]);
  return (
    <>
    {renderContent()}
    </>
  )
}

export default Contact