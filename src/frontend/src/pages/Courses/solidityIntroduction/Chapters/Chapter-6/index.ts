/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from '!raw-loader!./course.md'

import { Data } from '../../../../Chapter/Chapter.controller'

/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import exercise from '!raw-loader!./exercise.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore

import solution from '!raw-loader!./solution.md'
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

import { validatorContent } from './validatorContent'

export const data: Data = { course, video, hints, description, exercise, solution, supports: {}, questions: [], validatorContent }