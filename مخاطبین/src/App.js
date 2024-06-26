import Navbar from "./components/Navbar"
import Contacts from "./components/Contacts"
import { useState } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"

import Contact from "./components/Contact"
import AddContact from "./components/AddContact"
import EditContact from "./components/EditContact"

const App = () => {
  const [getContacts, setContacts]= useState([])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Navigate to="/contacts" />}/>
        <Route path='/contacts' element={<Contacts contacts={getContacts} />} />
        <Route path='/contacts/:contactId' element={<Contact />} />
        <Route path='/contacts/add' element={<AddContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App