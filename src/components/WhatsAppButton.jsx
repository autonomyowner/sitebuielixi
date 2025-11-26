import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const phoneNumber = '213553666904'
  const message = 'Bonjour BioElixir, je souhaite en savoir plus sur vos produits.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-button__icon">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.484 2.028 7.792L0 32l8.384-2.196A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.332c-2.576 0-5.028-.732-7.092-2.012l-.508-.308-5.26 1.38 1.404-5.128-.336-.528A13.29 13.29 0 012.668 16C2.668 8.636 8.636 2.668 16 2.668S29.332 8.636 29.332 16 23.364 29.332 16 29.332zm7.308-9.952c-.4-.2-2.368-1.168-2.736-1.3-.368-.132-.636-.2-.904.2-.268.4-1.036 1.3-1.268 1.568-.232.268-.468.3-.868.1-.4-.2-1.688-.62-3.216-1.98-1.188-1.06-1.992-2.368-2.224-2.768-.232-.4-.024-.616.176-.816.18-.18.4-.468.6-.7.2-.232.268-.4.4-.668.132-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.24-2.98-.328-.784-.66-.676-.904-.688-.232-.012-.5-.016-.768-.016s-.7.1-1.068.5c-.368.4-1.404 1.372-1.404 3.348s1.436 3.884 1.636 4.152c.2.268 2.828 4.316 6.852 6.052.956.412 1.704.66 2.288.844.96.304 1.836.26 2.528.156.772-.116 2.368-.968 2.7-1.904.332-.936.332-1.74.232-1.904-.1-.164-.368-.264-.768-.464z" fill="currentColor"/>
      </svg>
    </a>
  )
}

export default WhatsAppButton
