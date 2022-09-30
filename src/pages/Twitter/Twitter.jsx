import React from 'react'
import './twitter.scss'
import { AiOutlineTwitter} from 'react-icons/ai'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomInput } from '../../components/input/CustomInput'
import CopyToClipboard from 'react-copy-to-clipboard'

const Twitter = () => {
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
        link: `https://twitter.com/${username.username}`
      })
    )
  }
  return (
    <div className='page'>
    <div className='twitter_container'>
    <span className='twitter_title'>Twitter Link Generator</span>
    <AiOutlineTwitter className='twitter_logo'/>
    </div>

    <form onSubmit={generateLink} className='form'>
    <h2 className="twitter_label">Your Twitter Username</h2>
    <span className='twitter_sublabel'>Type your twitter Username.</span>
    <CustomInput
        type='text'
        required
        name='username'
        placeholder='twitter name'
        value={username.username}
        handleChange={handleChange}
    />
        <CustomButton onClick={generateLink} className='button'>Generate Link</CustomButton>
        <span className="twitter_sublabel">link is below</span>
    </form>
    <div className='link_container'>
    <span className='twitter_link'>{link.link}</span>
    </div>
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy Link</CustomButton></CopyToClipboard>

    </div>
  )
}

export default Twitter