import simpleExample, { type Options } from './simple-example';
const templates: { [key: string]: (options: Options) => {} } = {
    'simple-example': simpleExample
}
export default templates;