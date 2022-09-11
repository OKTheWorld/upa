import { rest } from 'msw'
import axios from 'axios'

type Hoge = {
  message: string
}

type Login = {
  access_token: string
}

type LsList = {
  list: string[]
}

type Error = {
  detail: string
}

const accessToken = 'accessToken'
const baseURL = axios.defaults.baseURL

export const handlers = [
  rest.get('/favicon.svg', (_, res, ctx) => res(ctx.status(200))),

  rest.post(`${baseURL}/login`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json<Login>({ access_token: accessToken }))
  }),

  rest.get(`${baseURL}/hoge`, (_, res, ctx) => {
    if (axios.defaults.headers.common.Authorization !== `Bearer ${accessToken}`) {
      return res(ctx.status(401), ctx.json<Error>({ detail: 'Unauthorized' }))
    }
    return res(ctx.status(200), ctx.json<Hoge>({ message: 'mock hoge' }))
  }),

  rest.get(`${baseURL}/lsList`, (_, res, ctx) => {
    if (axios.defaults.headers.common.Authorization !== `Bearer ${accessToken}`) {
      return res(ctx.status(401), ctx.json<Error>({ detail: 'Unauthorized' }))
    }
    return res(ctx.status(200), ctx.json<LsList>({ list: ['file1', 'file2', 'superfile3'] }))
  })
]
