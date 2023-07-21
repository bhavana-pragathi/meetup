import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Register from './components/Register'
import './App.css'
import ThemeContext from './context/ThemeContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
// Replace your code here
class App extends Component {
  state = {
    name: '',
    topics: topicsList[0].displayText,
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topics => {
    this.setState({topics})
  }

  regName = () => {
    this.setState({isRegistered: true})
  }

  updateErr = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topics, isRegistered, showError} = this.state
    return (
      <ThemeContext.Provider
        value={{
          name,
          topics,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          regName: this.regName,
          updateErr: this.updateErr,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
