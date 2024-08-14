import { Header, Main, ShowCard, Allcards, Footer } from "./component/AllComponents"
import { getAllCards } from "./services/cardsServer"
import { Route, Routes, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
function App() {
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fechdata = async () => {
      try {
        setLoading(true)
        const { data: response } = await getAllCards()
        setCards(response)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
    fechdata()
  }, [])
  
  return (
    <>
      <Header loading={loading} cards={cards} />

      <Routes>
        <Route path="/" element={<Navigate to="/main" />} ></Route>
        <Route path="/:cardid" element={<ShowCard />} />
        <Route path="/main" element={<Main loading={loading} cards={cards}/>} />
        <Route path="/main/:cardid" element={<ShowCard />} />
        <Route path="/allcards/:cardid" element={<ShowCard />} />
        <Route path="/allcards" element={<Allcards loading={loading} cards={cards} />} />
        <Route path="/main/g/:genre" element={<Allcards loading={loading} cards={cards} />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App