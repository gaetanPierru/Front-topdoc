import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Calendrier from '../components/Planning/Calendrier'
import CalendrierTest from '../components/Planning/CalendrierTest'
import Menu from '../components/Menu/Menu'
export default function planning() {

  const [id, setId] = useState(null)

  function recupId() {
    let str = window.location.href;
    let url = new URL(str);
    let name = url.searchParams.get("id");
    setId(parseInt(name))
  }

  useEffect(() => {
    recupId()
  }, [])

  if(id == null) {
    return <>Loading</>
  }


  return (<>
  <Menu />
    {/* <CalendrierTest /> */}
    <Calendrier id={id} />
  </>
  )
}
