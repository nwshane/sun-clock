import { connect } from 'react-redux'
import Arc from './Arc'

import {
  SUN_CLOCK_CIRCLE_DIMENSION,
  SUN_CLOCK_RADIUS,
  SUN_CLOCK_ARC_WIDTH,
  SUN_CLOCK_CENTER_X,
  SUN_CLOCK_CENTER_Y
} from '~/data/constants'

import {
  getNighttimeStartAngle,
  getNighttimeEndAngle
} from '../../data/getters'

const mapStateToProps = state => ({
  dimension: SUN_CLOCK_CIRCLE_DIMENSION,
  startAngle: getNighttimeStartAngle(state),
  endAngle: getNighttimeEndAngle(state),
  color: 'black',
  radius: SUN_CLOCK_RADIUS,
  arcWidth: SUN_CLOCK_ARC_WIDTH,
  centerX: SUN_CLOCK_CENTER_X,
  centerY: SUN_CLOCK_CENTER_Y
})

export default connect(mapStateToProps)(Arc)
