import { connect } from 'react-redux'
import { getLoading } from '~/data/getters'

import SunriseTime from './SunriseTime'
import SunsetTime from './SunsetTime'
import CenterOfClock from '~/components/shared/CenterOfClock'
import CurrentTime from './CurrentTime'
import LocationSelect from './LocationSelect'
import DateSelect from './DateSelect'
import SunClockCircle from './SunClockCircle'
import LoadingCircle from './LoadingCircle'

class SunClockPresentation extends React.Component {
  render() {
    const { loading } = this.props
    return (
      <div className="outside-container">
        <div className="inside-container">
          {loading
            ? [
                <CenterOfClock key="CenterOfClock" showBorder={false}>
                  <p>Loading Sun Clock...</p>
                </CenterOfClock>,
                <LoadingCircle key="LoadingCircle" />
              ]
            : [
                <SunriseTime key="SunriseTime" />,
                <SunsetTime key="SunsetTime" />,
                <CenterOfClock key="CenterOfClock">
                  <CurrentTime />
                </CenterOfClock>,
                <LocationSelect key="LocationSelect" />,
                <DateSelect key="DateSelect" />,
                <SunClockCircle key="SunClockCircle" />
              ]}
        </div>
        <style jsx global>{`
          html {
            width: 100vw;
            height: 100vh;
          }

          /* Hardcoding this to make svg 100% of height and width of screen
          TODO: Think of better way to do this! */
          body,
          body > div:nth-child(1),
          body > div > div:nth-child(1),
          body > div > div > main {
            width: 100%;
            height: 100%;
          }
        `}</style>
        <style jsx>{`
          .outside-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: calc(5px + 3vmin);
          }
          .inside-container {
            width: 100%;
            height: 100%;
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: getLoading(state)
})

export default connect(mapStateToProps)(SunClockPresentation)
