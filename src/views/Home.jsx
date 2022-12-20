import Section from "components/Section"

export default function Home() {

  const items = [
    {
      id: 1,
      title:'Sleep',
      description:'Original Soundtrack',
      artist:'Murat Örsoğlu',
      image:'data:image/jpeg;base64,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',
      type: 'album',
      src:'https://cdn.freesound.org/previews/664/664460_9497060-lq.mp3'
    },
    {
      id: 2,
      title:'SleepSleepSleepSleepSleepSleepSleep',
      description:'Original Soundtrack',
      artist:'Baki abi',
      image:'https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxlc3NvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      type: 'podcast',
      src:'https://cdn.freesound.org/previews/664/664493_9497060-lq.mp3'
    },
    {
      id: 3,
      title:'Sleep',
      description:'Original Soundtrack',
      artist:'Hasan abi',
      image:'https://plus.unsplash.com/premium_photo-1663924748832-4a81301b73c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      type: 'album',
      src:'https://cdn.freesound.org/previews/664/664571_9497060-lq.mp3'
    },
    {
      id: 4,
      title:'Sleep',
      description:'Original Soundtrack',
      artist:'Ahmet abi',
      image:'https://images.unsplash.com/photo-1671422283469-45d9192736af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      type: 'album',
      src:'https://cdn.freesound.org/previews/664/664581_9497060-lq.mp3'
    },
    {
      id: 5,
      title:'Sleep',
      description:'Original Soundtrack',
      artist:'Nurten abla',
      image:'https://images.unsplash.com/photo-1671250216336-fe1e65663832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      type: 'artist',
      src:'https://cdn.freesound.org/previews/664/664549_9497060-lq.mp3'
    },
  ]

  return (
    <div className="grid gap-y-8">
      <Section 
        title='Recently Played'
        more='/blabla'
        items={items}
      />
      <Section 
        title='Shows to try'
        more='/blabla'
        items={items}
      />
      <Section 
        title='Made for Murat'
        more='/blabla'
        items={items}
      />
    </div>
  )
}
