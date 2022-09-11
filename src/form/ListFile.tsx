import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Stack, HStack, VStack, Box, StackDivider, Button, IconButton, Flex, Text } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

// ArrowDownIcon

const ListFile: React.FC = () => {
  const [getData, setGetData] = useState<{ list: string[] }>({ list: [] })
  const fileList = getData.list.map((file) => (
    <Box h="40px" bg="yellow.200">
      <HStack spacing="5px">
        <Flex w="40px" h="40px" alignItems="center" justifyContent="center" bg="red.300">
          <IconButton colorScheme="teal" aria-label="Call Segun" size="sm" icon={<ArrowDownIcon />} />
        </Flex>
        <Flex w="100px" h="40px" alignItems="center" justifyContent="start" bg="red.300">
          {file}
        </Flex>
        <Flex w="100px" h="40px" alignItems="center" bg="red.300">
          edit zone
        </Flex>
      </HStack>
    </Box>
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
  return (
    <>
      <Text fontSize="30px" color="black.200">
        File List
      </Text>
      <HStack display="flex" align={'stretch'}>
        <Flex w="80%" p="10px" bg="gray.400">
          {/* <ul>{fileList}</ul> */}

          <VStack py="10px" spacing="12px" align="stretch" divider={<StackDivider borderColor="gray.500" />}>
            {fileList}
          </VStack>
          {/* <VStack py="10px" spacing="12px" align="stretch" divider={<StackDivider borderColor="gray.500" />}>
            {fileList}
          </VStack> */}
        </Flex>
        <Flex w="50%" bg="gray.200">
          aa
        </Flex>
      </HStack>
    </>
  )
}

export default ListFile
