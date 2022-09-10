import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

const Todo: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [text, setText] = useState<string | null>(null)
  const [todos, setTodo] = useState<string[]>([''])
  const addTodo = (str: string | null): void => {
    if (str !== null) setTodo([...todos, str])
  }

  const doubled = (count: number) => {
    setCount(count * 2)
  }
  return (
    <>
      <div style={{ backgroundColor: 'red' }}>Todo App</div>
      <div>
        <input type="text" />
        <Input
          variant="outline"
          name="bb"
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </div>
      <Button
        onClick={() => {
          addTodo(text)
        }}
        colorScheme="black"
        variant="outline"
      >
        登録
      </Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>
        <p>count: {count}</p>
        <Button onClick={() => setCount(count + 1)} colorScheme="black" variant="outline">
          Push
        </Button>
        <Button onClick={() => doubled(count)} colorScheme="black" variant="outline">
          Double
        </Button>
        <div>
          <Input placeholder="user" />
        </div>
      </div>
    </>
  )
}

export default Todo
