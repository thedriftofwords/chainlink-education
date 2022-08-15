/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from '!raw-loader!./course.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import description from '!raw-loader!./description.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import video from '!raw-loader!./video.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import hints from '!raw-loader!./hints.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import { Data } from 'pages/Chapter/Chapter.controller'

import { validatorContent } from './validatorContent'
import { questions } from './questions'

export const data: Data = { course, video, hints, description, exercise: undefined, solution: undefined, supports: { }, questions, validatorContent }