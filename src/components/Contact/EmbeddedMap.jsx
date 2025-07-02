import React from 'react';

const EmbeddedMap = () => {
  return (
    <div className="mt-10 w-full h-[300px] overflow-hidden rounded-md shadow-md md:max-w-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.198661627246!2d7.408741774361411!3d6.86064421915497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044e969dff01885%3A0x257897c17ef9ad6c!2sFaculty%20Of%20Vocational%20and%20Technical%20Education!5e1!3m2!1sen!2sng!4v1751306700754!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Faculty Location Map"
      ></iframe>
    </div>
  )
}

export default EmbeddedMap;