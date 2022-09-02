import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@chakra-ui/react'

const Input: React.FC<{ message: string }> = (props) => {
  const [responseData, setResponseData] = useState({ msg: { filename: '送信前' } })
  const [getData, setGetData] = useState({ message: '' })
  const { register, handleSubmit } = useForm<{ upfile: File[] }>({})
  useEffect(() => {
    const doFunction = async (): Promise<void> => {
      const temp: AxiosResponse<{ message: string }> = await axios.get('hoge')
      setGetData(temp.data)
    }
    doFunction()
  }, [])
  const onSubmit = handleSubmit(async (data) => {
    const params = new FormData()
    params.append('upfile', data.upfile[0])
    const response: AxiosResponse<{ msg: { filename: string } }> = await axios.post('postfile', params)
    setResponseData(response.data)
  })
  return (
    <>
      <div className="Form">
        <p>
          props <code>{props.message}</code>
        </p>
        <p>
          get <code>{getData.message}</code>
        </p>
        <p>
          receive <code>{responseData.msg.filename}</code>
        </p>
      </div>
      <div>
        <form method="post" onSubmit={onSubmit}>
          <input type="file" {...register('upfile')} />
          <br />
          <Button type="submit" colorScheme="teal">
            アップロードする
          </Button>
        </form>
      </div>
    </>
  )
}

export default Input
