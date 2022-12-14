const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contacts</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>New York, US</p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Facetime / WhatsApp</h2>
            <p>
              <a href='tel:+13472658082'>+1 (347) 265-80-82</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p>
              <a href='mailto:natalliapahosava@gmail.com'>
                natalliapahosava@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
export default Contacts
