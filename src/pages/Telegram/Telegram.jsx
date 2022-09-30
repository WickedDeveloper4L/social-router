import React from 'react'
import './telegram.scss'
import {BsTelegram} from 'react-icons/bs'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomInput } from '../../components/input/CustomInput'
import CopyToClipboard from 'react-copy-to-clipboard'

const Telegram = () => {
  const [username, setUsername] = React.useState({
    username: ""
  })
  const [link, setLink] = React.useState({
    link: ""
  })
  function handleChange(event){
    const {name, value} = event.target

    setUsername(
      prevUsername=>({
        ...prevUsername,
        [name]: value
      })
    )
  }

  

  function generateLink(event){
    event.preventDefault()

    setLink(
      prevLink =>({
        ...prevLink,
        link: `https://tttttt.me/${username.username}`
      })
    )
  }
  return (
    <div className='page'>
    <div className='telegram_container'>
    <span className='telegram_title'>Telegram Link Generator</span>
    <BsTelegram className='telegram_logo'/>
    </div>

    <form onSubmit={generateLink} className='form'>
    <h2 className="telegram_label">Your Telegram Username</h2>
    <span className='telegram_sublabel'>Type your telegram Username.</span>
    <CustomInput
        type='text'
        required
        name='username'
        placeholder='telegram name'
        value={username.username}
        handleChange={handleChange}
    />
        <CustomButton onClick={generateLink} className='button'>Generate Link</CustomButton>
        <span className="telegram_sublabel">link is below</span>
    </form>
    <div className='link_container'>
    <span className='telegram_link'>{link.link}</span>
    </div>
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy to clipboard</CustomButton></CopyToClipboard>

    </div>
  )
}

export default Telegram