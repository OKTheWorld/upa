import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { HStack, VStack, StackDivider, IconButton, Flex, Text } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

// ArrowDownIcon

type data = {
  list: string
  mtime: string
}

const ListFile: React.FC = () => {
  const [getData, setGetData] = useState<{ datas: data[] }>({ datas: [{ list: 'e', mtime: 'e' }] })
  const fileList = getData.datas.map((data, index) => (
    <Flex w="100%" h="40px" bg="yellow.200" key={index}>
      <HStack w="100%">
        <Flex w="40px" h="40px" px="4px" alignItems="center" justifyContent="start" bg="red.300">
          <IconButton
            colorScheme="teal"
            aria-label="Call Segun"
            size="sm"
            icon={<ArrowDownIcon />}
            onClick={() => pushDo(data.list)}
          />
        </Flex>
        <Flex w="50%" h="40px" alignItems="center" justifyContent="start" align="stretch" bg="red.300">
          {data.list}
        </Flex>
        <Flex flex="1" h="40px" alignItems="center" bg="red.200">
          {data.mtime}
        </Flex>
      </HStack>
    </Flex>
  ))

  useEffect(() => {
    const doFunction = async (): Promise<void> => {
      try {
        const response: AxiosResponse = await axios.get('lsList')

        setGetData(response.data)
      } catch (error: unknown) {
        axios.isAxiosError(error)
          ? setGetData({ datas: [{ list: 'Axios Error', mtime: '-' }] })
          : setGetData({ datas: [{ list: 'Error', mtime: 'e' }] })
      }
    }
    doFunction()
  }, [])
  const pushDo = async (filename: string): Promise<void> => {
    try {
      const response: AxiosResponse<{ data: string; type: string }> = await axios.get('get_file/' + filename)
      //   window.alert(Object.keys(response))
      //   window.alert(Object.keys(response.headers))
      //   window.alert(response.data)
      //   window.alert(response.headers['content-type'])
      const blob = new Blob([response.data.data], { type: response.data.type })
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
