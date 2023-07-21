import ThemeContext from '../../context/ThemeContext'
import {
  MainBg,
  RegImage,
  FormDiv,
  RegHeading,
  LabelInput,
  Label,
  Input,
  Select,
  Option,
  RegButton,
  ErrMsg,
  Nav,
  LinkItem,
  Logo,
  ContentDiv,
} from './styledComponents'

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

const Register = props => (
  <ThemeContext.Consumer>
    {value => {
      const {
        name,
        topics,
        showError,
        changeName,
        changeTopic,
        regName,
        updateErr,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()

        if (name !== '' && topics !== '') {
          const {history} = props
          history.replace('/')
          regName()
        } else {
          updateErr()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <MainBg>
          <Nav>
            <LinkItem to="/">
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </LinkItem>
          </Nav>
          <ContentDiv>
            <RegImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormDiv onSubmit={onSubmitForm}>
              <RegHeading>Let Us Join</RegHeading>
              <LabelInput>
                <Label htmlFor="name">NAME</Label>
                <Input
                  id="name"
                  onChange={onChangeName}
                  type="text"
                  placeholder="Your Name"
                  value={name}
                />
              </LabelInput>
              <LabelInput>
                <Label htmlFor="topic">TOPICS</Label>
                <Select id="topic" value={topics} onChange={onChangeTopic}>
                  {topicsList.map(eachOption => (
                    <Option value={eachOption.displayText} key={eachOption.id}>
                      {eachOption.displayText}
                    </Option>
                  ))}
                </Select>
              </LabelInput>
              <RegButton type="submit">Register Now</RegButton>
              {showError && <ErrMsg>Please enter your name</ErrMsg>}
            </FormDiv>
          </ContentDiv>
        </MainBg>
      )
    }}
  </ThemeContext.Consumer>
)

export default Register
