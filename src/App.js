import { Redirect, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/index.js'
import { PublicRoutes, PrivateRoutes } from './routes/routes'
import { cart, productsMock } from './mocks/mock'

import './App.css'

export const context = React.createContext(null)
export const setCountCart = React.createContext(null)

const App = () => {
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    setOwner(localStorage.getItem('token'))
  }, [])
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('products'))) {
      localStorage.setItem('products', JSON.stringify(productsMock))
    }
  }, [])
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [])

  const [owner, setOwner] = useState()
  const logout = () => {
    localStorage.removeItem('token')
    setOwner(null)
  }

  const [number, setNumber] = useState([].length)

  return (
    <div className="App">
      <Header
        user={owner}
        setOwner={setOwner}
        logout={logout}
        number={number}
      />
      <context.Provider value={owner}>
        <setCountCart.Provider value={setNumber}>
          <Switch>
            {owner
              ? PrivateRoutes.map((route, index) => {
                  return (
                    <Route
                      key={route.index}
                      path={route.path}
                      component={route.component}
                    />
                  )
                })
              : PublicRoutes.map((route, index) => {
                  return (
                    <Route
                      key={route.index}
                      path={route.path}
                      component={route.component}
                    />
                  )
                })}
            <Redirect path="/" to="/main" />
          </Switch>
        </setCountCart.Provider>
      </context.Provider>
      <Footer />
    </div>
  )
}

export default App
