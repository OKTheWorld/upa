import axios, { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'

const Form: React.FC<{ message: string }> = (props) => {
  const { register, handleSubmit } = useForm<{ upfile: File[] }>({})
  const onSubmit = handleSubmit(async (data) => {
    const params = new FormData()
    params.append('upfile', data.upfile[0])
    const response: AxiosResponse<{ msg: Record<string, unknown> }> = await axios.post('postfile', params)
    console.log(response.data)
  })
  return (
    <>
      <div className="Form">
        <p>
          receive <code>{props.message}</code>
        </p>
      </div>
      <div>
        <form method="post" onSubmit={onSubmit}>
          <input type="file" {...register('upfile')} />
          <br />
          <input type="submit" value="アップロードする" />
        </form>
      </div>
    </>
  )
}

export default Form
