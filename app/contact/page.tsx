'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'




function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contacts', {  // Adjusted to match app directory
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', service: '' });
    } else {
      const resData = await response.json();
      setError(resData.message || 'Failed to send message.');
    }
  } catch (error) {
    setError('An error occurred.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
              <h3 className='text-4xl text-accent'>Let’s work together</h3>
              <p className='text-white/60'>Please fill out the form below.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input name="firstName" value={formData.firstName} onChange={handleChange} type='text' placeholder='First Name' required />
                <Input name="lastName" value={formData.lastName} onChange={handleChange} type='text' placeholder='Last Name' required />
                <Input name="email" value={formData.email} onChange={handleChange} type='email' placeholder='Email Address' required />
                <Input name="phone" value={formData.phone} onChange={handleChange} type='text' placeholder='Phone Number' />
              </div>

              <Textarea name="message" value={formData.message} onChange={handleChange} className='h-[200px]' placeholder='Type your message here' required />

              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='Website Development'>Website Development</SelectItem>
                    <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                    <SelectItem value='Design'>Design</SelectItem>
                    <SelectItem value='Mobile App Development'>Mobile App Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button type='submit' size='md' className='max-w-32' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {success && <p className="text-green-500">Your message has been sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
