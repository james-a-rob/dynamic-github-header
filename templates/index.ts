import simpleExample, { type Options as SimpleOptions } from './simple-example';
import latestFollower, { type Options as LatestFollowerOptions } from './latest-follower';

const templates: { [key: string]: (queryParams: {}) => {} } = {
    'simple-example': simpleExample,
    'latest-follower': latestFollower
}
export default templates;