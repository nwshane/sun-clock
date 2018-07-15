import { Provider } from 'react-redux'
import Head from 'next/head'
import queryString from 'query-string'
import isEqual from 'lodash.isequal'
import favicon from '../favicon.ico'

import SunClock from '../components/SunClock'
import createStore from '../data/createStore'

const store = createStore()

const promisifiedScript = src =>
  new Promise(function(resolve, reject) {
    var script = document.createElement('script')
    script.src = src
    script.addEventListener('load', function() {
      resolve()
    })
    script.addEventListener('error', function(e) {
      reject(e)
    })
    document.body.appendChild(script)
  })

class HomePage extends React.Component {
  state = {
    queryParams: null
  }

  updateQueryParams = () => {
    const queryParams = queryString.parse(window.location.search)

    if (!isEqual(this.state.queryParams, queryParams)) {
      this.setState({ queryParams })
    }
  }

  componentDidUpdate() {
    this.updateQueryParams()
  }

  loadFontError = oError => {
    console.error('The script ' + oError.target.src + " didn't load correctly.")
  }

  loadGoogleFont = () => {
    window.WebFont.load({
      google: {
        families: ['Nunito']
      }
    })
  }

  componentDidMount() {
    this.updateQueryParams()
    promisifiedScript(
      'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    )
      .then(this.loadGoogleFont)
      .catch(this.loadFontError)
  }

  render() {
    const { queryParams } = this.state
    return (
      <Provider store={store}>
        <main data-test="main">
          <Head>
            <title>Sun Clock</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href={favicon} />
          </Head>
          {queryParams && <SunClock {...{ queryParams }} />}
          <style jsx global>{`
            html {
              width: 100vw;
              height: 100vh;
              font-family: sans-serif;
            }

            html.wf-active {
              font-family: 'Nunito', sans-serif;
            }

            /* Hardcoding this to make svg 100% of height and width of screen
          TODO: Think of better way to do this! */
            body,
            body > div:nth-child(1),
            div#__next,
            main {
              width: 100%;
              height: 100%;
            }

            body {
              margin: 0;
            }
            p {
              margin: 0;
            }
          `}</style>
        </main>
      </Provider>
    )
  }
}

export default HomePage
