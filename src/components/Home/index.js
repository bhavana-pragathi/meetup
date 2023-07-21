import ThemeContext from '../../context/ThemeContext'
import {
  MainDiv,
  Heading,
  Nav,
  Logo,
  Para,
  Image,
  LinkItem,
  RegButton,
  ContentDiv,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isRegistered, name, topics} = value

        return (
          <MainDiv>
            <Nav>
              <LinkItem to="/">
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </LinkItem>
            </Nav>
            {isRegistered === true ? (
              <ContentDiv>
                <Heading>Hello {name}</Heading>
                <Para>Welcome to {topics}</Para>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </ContentDiv>
            ) : (
              <ContentDiv>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <LinkItem to="/register">
                  <RegButton type="button" onClick={onRegister}>
                    Register
                  </RegButton>
                </LinkItem>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </ContentDiv>
            )}
          </MainDiv>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
