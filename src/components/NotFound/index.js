import {
  NotFoundDiv,
  NotFoundImage,
  NotFoundHead,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NotFoundDiv>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHead>Page Not found</NotFoundHead>
    <NotFoundPara>
      We are Sorry, the page you requested could not be found.
    </NotFoundPara>
  </NotFoundDiv>
)

export default NotFound
