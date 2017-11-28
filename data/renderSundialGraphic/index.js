import { select } from 'd3-selection'
import { arc } from 'd3-shape'
import 'd3-selection-multi'
import getClockPieData from './getClockPieData'

const log = obj => {
  console.log(obj)
  return obj
}

const getSvgDimension = () => Math.min(window.innerWidth, window.innerHeight)

const getClockXPosition = svg => svg.attr('width') / 2
const getClockYPosition = svg => svg.attr('height') / 2

const getClockRadius = svg =>
  Math.min(svg.attr('width'), svg.attr('height')) / 2.1

const createSvg = containerSelector =>
  select(containerSelector)
    .append('svg')
    .attrs({
      width: getSvgDimension(),
      height: getSvgDimension()
    })

const createClockContainer = svg =>
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' + getClockXPosition(svg) + ',' + getClockYPosition(svg) + ')'
    )

const createClockSections = (clockContainer, clockPieData) =>
  clockContainer
    .selectAll('.arc')
    .data(clockPieData)
    .enter()
    .append('g')
    .attr('class', 'arc')

const getArcShapes = clockRadius =>
  arc()
    .outerRadius(clockRadius)
    .innerRadius(clockRadius * (3 / 4) - 20)
    .padAngle(0.02)

const createClockSectionPaths = (clockSections, clockPathDescriptions) =>
  clockSections
    .append('path')
    .attr('d', clockPathDescriptions)
    .attr('fill', function(d) {
      return d.data.color
    })

const createCurrentTimeText = (text, container) =>
  container
    .append('text')
    .text(text)
    .style('text-anchor', 'middle')
    .attr('x', container.attr('width') / 2)
    .attr('y', container.attr('height') / 2)
    .attr('font-size', '60px')

export default (containerSelector, data) => {
  const svg = createSvg(containerSelector)
  const clockContainer = createClockContainer(svg)

  const clockSections = createClockSections(
    clockContainer,
    getClockPieData(data)
  )

  const arcShapes = getArcShapes(getClockRadius(svg))
  const clockSectionPaths = createClockSectionPaths(clockSections, arcShapes)

  const currentTimeText = createCurrentTimeText(
    data.currentTime.format('h:mm:ss a'),
    svg
  )

  return {
    updateGraphicWithTime(currentTime) {
      currentTimeText.text(currentTime.format('h:mm:ss a'))
    }
  }
}
