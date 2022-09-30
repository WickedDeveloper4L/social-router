import React from 'react'
import './whatsapp.scss'
import { CustomInput } from '../../components/input/CustomInput'
import {IoLogoWhatsapp} from 'react-icons/io'
import CustomButton from '../../components/customButton/CustomButton'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Whatsapp = () => {
  const [number, setNumber] = React.useState({
    phoneNumber: ""
  })

  const [text, setText] = React.useState({
    text: ""
  })
  
  const [link, setLink] = React.useState({
    link: ""
  })

  function handleChange (event){
    const {name, value} = event.target

    setNumber(
      prevNumber => ({
        ...prevNumber,
        [name]: value
      })
    )

    setText(
      prevText =>({
        ...prevText,
        [name]: value
      })
    )

  }

  function generateLink(event){
    event.preventDefault()
    
    setLink(prevLink =>({
      ...prevLink,
      link: `https://wa.me/${number.phoneNumber}?text=${encodeURI(text.text)}`
    }))
  }

 


  return (
    <div className='page'>
    <div className='title_container'>
    <span className='title'>Whatsapp Link Generator</span>
    <IoLogoWhatsapp className='logo'/>
    </div>

    <form onSubmit={generateLink} className='form'>
    <h2 className="label">Your WhatsApp Number</h2>
    <span className='sublabel'>Type your WhatsApp phone number. Make sure you include the country code 
    followed by the area code. E.g.1 for the US, 44 for the UK. <br/>Include country code without + symbol. 
    Eg. if country code is +234 and WhatsApp number is 08031234567, then type "2348031234567" below.</span>
    <CustomInput
        type='text'
        required
        name='phoneNumber'
        placeholder='Phone Number'
        value={number.phoneNumber}
        handleChange={handleChange}
      />
    <h2 className="label">Welcome Message (Optional)</h2>
    <span className="sublabel">Automatically include this text when a user clicks on your chat link, making it easier to start a conversation.</span>
      <CustomInput
        type='textarea'
        required
        name='text'
        placeholder='Optional Text'
        value={text.text}
        handleChange={handleChange}
      />

        <CustomButton onClick={generateLink} className='button'>Generate Link</CustomButton>
        <span className="sublabel">link is below</span>
    </form>
    <div className='link_container'>
    <span className='link'>{link.link}</span>

    </div>
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy to clipboard</CustomButton></CopyToClipboard>
    </div>
  )
}

export default Whatsapp