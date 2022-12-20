import Section from "components/Section"
import songs from 'data/songs'

export default function Home() {
 
  return (
    <div className="grid gap-y-8">
      <Section 
        title='Recently Played'
        more='/blabla'
        items={songs}
      />
      <Section 
        title='Shows to try'
        more='/blabla'
        items={songs}
      />
      <Section 
        title='Made for Murat'
        more='/blabla'
        items={songs}
      />
    </div>
  )
}
