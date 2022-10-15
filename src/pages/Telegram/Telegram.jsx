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
  const [shortLink, setShortLink] = React.useState('')
  function handleChange(event){
    const {name, value} = event.target

    setUsername(
      prevUsername =>({
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
  React.useEffect(
    ()=>{
      const longUrl = link.link
      fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
      .then(response => response.json())
      .then(data => setShortLink(data.result.short_link))
    },[link]
  )
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
    <span className="sublabel">Long link:</span>
    <span className='telegram_link'>{link.link}</span>   
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy Long Link</CustomButton></CopyToClipboard>
    {
      shortLink.length ? (
        <span className="sublabel">Shortened link:</span>
    )
    :
    null
    }
    <span className="telegram_link">{shortLink}</span>
    {
      shortLink.length ? (
        <CopyToClipboard text={shortLink} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy Short Link</CustomButton></CopyToClipboard>
        )
    :
    null
    }
    </div>
    </div>
  )
}

export default Telegram