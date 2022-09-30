import React from 'react'
import './facebook.scss'
import CustomButton from '../../components/customButton/CustomButton'
import { CustomInput } from '../../components/input/CustomInput'
import {GrFacebook} from 'react-icons/gr'
import CopyToClipboard from 'react-copy-to-clipboard'

const Facebook = () => {
  const [name, setName] = React.useState({
    name: ""
  })

  const [link, setLink] = React.useState({
    link: ""
  })
  function handleChange(event){
    const {name, value} = event.target

    setName(
      previousName=>({
        ...previousName,
        [name]: value
      })
    )
  }

  function generateLink(event){
    event.preventDefault()
    setLink(
      prevLink =>({
        ...prevLink,
        link: `https://facebook.com/${name.name}`
      })
    )

  }
  return (
    <div className='page'>
    <div className='facebook_container'>
    <span className='facebook_title'>Facebook Link Generator</span>
    <GrFacebook className='facebook_logo'/>
    </div>

    <form onSubmit={generateLink} className='form'>
    <h2 className="facebook_label">Your Facebook Name</h2>
    <span className='facebook_sublabel'>Type your Facebook Name without any space.</span>
    <CustomInput
        type='text'
        required
        name='name'
        placeholder='facebook name'
        value={name.name}
        handleChange={handleChange}
    />
        <CustomButton onClick={generateLink} className='button'>Generate Link</CustomButton>
        <span className="facebook_sublabel">link is below</span>
    </form>
    <div className='link_container'>
    <span className='facebook_link'>{link.link}</span>
    </div>
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy to clipboard</CustomButton></CopyToClipboard>
    </div>
  )
}

export default Facebook