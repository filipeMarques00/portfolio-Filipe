import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
]

const socialgitHub = [
    { name: "github", icon: <FaGithub /> },
  ]
const socialInstagram = [
    { name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/filipe-marques-pinto-49410520a/" target={"_blank"} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}

      {socialgitHub.map((network) => (
        <a href="https://github.com/filipeMarques99/portfolio" target={"_blank"} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}

      {socialInstagram.map((network) => (
        <a href="https://www.instagram.com/_filipemarques1/" target={"_blank"} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks