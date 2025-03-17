import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import '../App.css' // Importing the external CSS file
import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react' // Icons

const contactDetails = [
  {
    name: 'Email',
    value: 'abhiatriat2004@gmail.com',
    url: 'mailto:abhiatriat2004@gmail.com',
    icon: <Mail size={20} />
  },
  {
    name: 'Contact',
    value: '+916396673923',
    url: 'tel:+916396673923',
    icon: <Phone size={20} />
  },
  {
    name: 'LinkedIn',
    value: 'Abhishek Sharma',
    url: 'https://www.linkedin.com/in/abhishek-sharma-25a17a229/',
    icon: <Linkedin size={20} />
  },
  {
    name: 'LeetCode',
    value: 'abhishekatri',
    url: 'https://leetcode.com/abhishekatri/',
    icon: <Code size={20} />
  },
  {
    name: 'GitHub',
    value: 'abhisheksharmaatri',
    url: 'https://github.com/Abhisheksharmaatri',
    icon: <Github size={20} />
  }
]

const Contact = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    emailjs.send('service_id', 'template_id', data, 'user_id').then(
      () => alert('Message Sent!'),
      error => console.log(error)
    )
  }

  return (
    <section className='contact-section' id='contact'>
      <div className='contact-container'>
        <ul className='contact-list'>
          {contactDetails.map((contact, index) => (
            <li className='contact-list-item'>
              <a
                key={index}
                href={contact.url}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-card'
              >
                {contact.icon}
                <span>{contact.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className='contact-heading'>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
        <input
          {...register('name')}
          placeholder='Your Name'
          className='contact-input'
        />
        <input
          {...register('email')}
          placeholder='Your Email'
          className='contact-input contact-margin'
        />
        <textarea
          {...register('message')}
          placeholder='Message'
          className='contact-textarea contact-margin'
        ></textarea>
        <button type='submit' className='contact-button'>
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
