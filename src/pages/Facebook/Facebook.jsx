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
  const [shortLink, setShortLink] = React.useState('')

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
    <span className="sublabel">Long link:</span>
    <span className='facebook_link'>{link.link}</span>   
    <CopyToClipboard text={link.link} onCopy={() => alert("Copied to Clipboard successfully")}><CustomButton className='button'>Copy Long Link</CustomButton></CopyToClipboard>
    {
      shortLink.length ? (
        <span className="sublabel">Shortened link:</span>
    )
    :
    null
    }
    <span className="facebook_link">{shortLink}</span>
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

export default Facebook