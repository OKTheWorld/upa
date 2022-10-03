import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { HStack, VStack, StackDivider, Button, IconButton, Flex, Text } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

// ArrowDownIcon

const ListFile: React.FC = () => {
  const [getData, setGetData] = useState<{ list: string[] }>({ list: [] })
  const fileList = getData.list.map((file) => (
    <Flex w="100%" h="40px" bg="yellow.200">
      <HStack w="100%">
        <Flex w="40px" h="40px" px="4px" alignItems="center" justifyContent="start" bg="red.300">
          <IconButton
            colorScheme="teal"
            aria-label="Call Segun"
            size="sm"
            icon={<ArrowDownIcon />}
            onClick={() => pushDo(file)}
          />
        </Flex>
        <Flex w="50%" h="40px" alignItems="center" justifyContent="start" align="stretch" bg="red.300">
          {file}
        </Flex>
        <Flex flex="1" h="40px" alignItems="center" bg="red.200">
          edit zone
        </Flex>
      </HStack>
    </Flex>
  ))

  useEffect(() => {
    const doFunction = async (): Promise<void> => {
      try {
        const response: AxiosResponse<{ list: string[] }> = await axios.get('lsList')

        setGetData(response.data)
      } catch (error: unknown) {
        axios.isAxiosError(error) ? setGetData({ list: ['Axios Error'] }) : setGetData({ list: ['Error'] })
      }
    }
    doFunction()
  }, [])
  const pushDo = async (filename: string): Promise<void> => {
    try {
      const response: AxiosResponse<string> = await axios.get('get_file/' + filename)
      //   window.alert(Object.keys(response))
      //   window.alert(Object.keys(response.headers))
      //   window.alert(response.data)
      //   window.alert(response.headers['content-type'])
      const blob = new Blob([response.data], { type: response.headers['content-type'] })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = filename
      link.click()
    } catch (error: unknown) {
      window.alert('error')
    }
  }
  return (
    <>
      <Text px="10px" fontSize="30px" color="black.200">
        File List
      </Text>
      <HStack px="10px" display="flex" align="stretch">
        <Flex w="90%" px="10px" bg="gray.400">
          <VStack w="100%" p="10px" spacing="12px" align="stretch" divider={<StackDivider borderColor="gray.500" />}>
            {fileList}
          </VStack>
        </Flex>
        <Flex w="20%" bg="gray.200">
          flex box
        </Flex>
      </HStack>
    </>
  )
}

export default ListFile
