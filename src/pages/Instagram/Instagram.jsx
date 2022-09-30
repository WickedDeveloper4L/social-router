import React from 'react'
import './instagram.scss'
import {AiFillInstagram} from 'react-icons/ai'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomInput } from '../../components/input/CustomInput'
import CopyToClipboard from 'react-copy-to-clipboard'

const Instagram = () => {
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
        link: `https://www.instagram.com/${username.username}`
      })
    )
  }
  return (
    <div className='page'>
    <div className='instagram_container'>
    <span className='instagram_title'>Instagram Link Generator</span>
    <AiFillInstagram className='instagram_logo'/>
    </div>

    <form onSubmit={generateLink} className='form'>
    <h2 className="instagram_label">Your Instagram Username</h2>
    <span className='instagram_sublabel'>Type your instagram Username.</span>
    <CustomInput
        type='text'
        required
        name='username'
        placeholder='instagram name'
        value={username.username}
        handleChange={handleChange}
    />
        <CustomButton onClick={generateLink} className='button'>Generate Link</CustomButton>
        <span className="instagram_sublabel">link is below</span>
    </form>
    <div className='link_container'>
    <span className='instagram_link'>{link.link}</span>
    </div>
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy Link</CustomButton></CopyToClipboard>
    </div>
  )
}

export default Instagram