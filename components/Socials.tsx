import Link from 'next/link';
import { FaGithub, FaLinkedin} from 'react-icons/fa'


const socials = [
    {
        icon: <FaGithub />, path: 'https://github.com/ike-nanino?tab=repositories'
    },
    {
        icon: <FaLinkedin />, path: 'https://gh.linkedin.com/in/isaac-semanu-5373332b4'
    },
];

interface StyleProps {
    containerStyles: string,
    iconStyles: string
}

function Socials({ containerStyles, iconStyles}: StyleProps) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles} >
                   {item.icon}
                </Link>
            )
        })
        
        }
    </div>
  )
}

export default Socials