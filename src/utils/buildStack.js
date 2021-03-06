import { stack as d3Stack, stackOffsetNone, stackOrderNone } from 'd3-shape';

export default keys =>
  d3Stack()
    .keys(keys)
    .order(stackOrderNone)
    .offset(stackOffsetNone);
