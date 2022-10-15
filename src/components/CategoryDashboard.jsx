import React from 'react'
import CardDisplay from './CardDisplay.jsx'
import TitleBanner from './TitleBanner.jsx'

export default function CategoryDashboard({category, preSelected, users}) {
  return (
    <div style={{padding: '1rem'}}>
        <TitleBanner category={category} preSelected={preSelected} />
        <CardDisplay users={users} />
    </div>
  )
}
