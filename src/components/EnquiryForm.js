import { useEffect, useState } from 'react'
import { attractions } from '../data/attractions'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  destination: '',
  visitors: '1',
  visitDate: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please add your full name.'
  if (!values.email.trim()) errors.email = 'Please add your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.phone.trim()) errors.phone = 'Please add a phone number.'
  if (!values.destination) errors.destination = 'Choose a destination to enquire about.'
  if (!values.visitors || Number(values.visitors) < 1) errors.visitors = 'Enter at least 1 visitor.'
  if (!values.visitDate) errors.visitDate = 'Select a preferred visit date.'
  if (!values.message.trim() || values.message.trim().length < 10) errors.message = 'Please share at least 10 characters about your plans.'
  return errors
}

export default function EnquiryForm({ selectedDestination = '' }) {
  const [values, setValues] = useState({ ...initialValues, destination: selectedDestination })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (selectedDestination) setValues((current) => ({ ...current, destination: selectedDestination }))
  }, [selectedDestination])

  const updateField = (field) => (event) => {
    setSubmitted(false)
    setValues((current) => ({ ...current, [field]: event.target.value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  return (
    <section className="enquiry-section section-pad" id="enquire">
      <div className="shell enquiry-layout">
        <div className="enquiry-copy">
          <p className="eyebrow eyebrow--light">Your next chapter</p>
          <h2>Tell us where<br /><em>you want to go.</em></h2>
          <p>Share a few details and we’ll help you shape a highland itinerary with the right pace, places, and local context.</p>
          <div className="enquiry-note"><span className="note-number">03</span><p>Good trips start with one curious question.</p></div>
        </div>
        <div className="form-card">
          {submitted && <div className="success-message" role="status"><span>✓</span><div><strong>Enquiry received.</strong><p>Thanks — we’ll be in touch with a few thoughtful next steps.</p></div></div>}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <Field label="Full name" name="fullName" value={values.fullName} onChange={updateField('fullName')} error={errors.fullName} placeholder="Your name" />
              <Field label="Email address" name="email" type="email" value={values.email} onChange={updateField('email')} error={errors.email} placeholder="you@example.com" />
              <Field label="Phone number" name="phone" type="tel" value={values.phone} onChange={updateField('phone')} error={errors.phone} placeholder="+266 ..." />
              <div className="field"><label htmlFor="destination">Destination</label><select id="destination" value={values.destination} onChange={updateField('destination')} aria-invalid={Boolean(errors.destination)}><option value="">Choose a place...</option>{attractions.map((attraction) => <option key={attraction.id} value={attraction.name}>{attraction.name}</option>)}</select>{errors.destination && <span className="field-error">{errors.destination}</span>}</div>
              <Field label="Number of visitors" name="visitors" type="number" min="1" max="30" value={values.visitors} onChange={updateField('visitors')} error={errors.visitors} />
              <Field label="Preferred visit date" name="visitDate" type="date" value={values.visitDate} onChange={updateField('visitDate')} error={errors.visitDate} />
              <div className="field field--full"><label htmlFor="message">Message</label><textarea id="message" value={values.message} onChange={updateField('message')} placeholder="Tell us what kind of experience you are looking for..." rows="4" aria-invalid={Boolean(errors.message)} />{errors.message && <span className="field-error">{errors.message}</span>}</div>
            </div>
            <div className="form-submit-row"><p>We’ll use your details only to respond to this enquiry.</p><button className="button button--coral" type="submit">Send enquiry <span aria-hidden="true">↗</span></button></div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, min, max }) {
  return <div className="field"><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} min={min} max={max} aria-invalid={Boolean(error)} />{error && <span className="field-error">{error}</span>}</div>
}
