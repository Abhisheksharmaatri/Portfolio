import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import '../app.css' // Importing the external CSS file

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
