import React from 'react'

const ThemeContext = React.createContext({
  name: '',
  topics: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  showError: false,
  isRegistered: false,
  regName: () => {},
  updateErr: () => {},
})

export default ThemeContext
