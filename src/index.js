// https://github.com/catamphetamine/react-phone-number-input

import * as ReactDOM from 'react-dom'
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Demo() {
  const [phone, setPhone] = useState('')

  return (
    <React.Fragment>
      <p>
        <i>Reading</i> the country code from the text field without also{' '}
        <i>displaying</i> it in the text field can lead to a
        frustrating/confusing UX. See{' '}
        <a href="https://github.com/catamphetamine/react-phone-number-input/issues/273">
          #273
        </a>
      </p>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
      />
      <hr />
      Internal state (users would <i>not</i> see this):
      <pre>{JSON.stringify(phone)}</pre>
    </React.Fragment>
  )
}

ReactDOM.render(<Demo />, document.getElementById('root'))
