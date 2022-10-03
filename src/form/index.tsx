import UPAInput from './UPAInput'
import ListFile from './ListFile'

const message = 'test message'
const Form: React.FC = () => {
  return (
    <>
      <UPAInput message={message} />
      <ListFile />
    </>
  )
}

export default Form
