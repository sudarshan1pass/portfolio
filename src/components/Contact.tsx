import { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sudarshanpandat@gamil.com',
      href: 'mailto:sudarshanpandat@gamil.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9811911051',
      href: 'tel:+919811911051'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your faridabad haryana, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-lg">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper elevation={4} className="p-10 m-10  rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  sx={{mb:"10px"}}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                   sx={{mb:"10px"}}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                   sx={{mb:"10px"}}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<Send />}
                    sx={{
                      background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1d4ed8 30%, #059669 90%)',
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Paper>
          </motion.div>
        </div>

        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Contact;
