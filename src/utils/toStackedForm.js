import compose from 'ramda/src/compose';
import map from 'ramda/src/map';
import mergeAll from 'ramda/src/mergeAll';
import splitEvery from 'ramda/src/splitEvery';
import { getSeries } from './';

export default data =>
  compose(
    map(mergeAll),
    splitEvery(getSeries(data).length),
    map(({ name, series, value }) => ({ name, [series]: value }))
  )(data);
