import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./App"
import Books from "./components/Books"
import Book from "./components/Book"
import About from "./components/About"
import Home from "./components/Home"
import NotFound from "./components/Notfound"


import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Books" element={<Books />}>
                        <Route index element={
                            <main>کتاب مورد نظر خود را انتخاب نمایید</main>
                        } />
                        <Route path={':BookId'} element={<Book />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)