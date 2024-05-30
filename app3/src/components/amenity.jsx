import { useState } from 'react'

function Amenity({ icon, title, onChange }) {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <input
        onChange={(e) => {
          console.log(e.target.checked)
          setChecked(e.target.checked)
          onChange(e.target.checked)
        }}
        className='me-2'
        type='checkbox'
      />
      <i className={'me-2 bi ' + icon} style={{ fontSize: 20 }} />
      <span>{title}</span>
    </div>
  )
}

export default Amenity