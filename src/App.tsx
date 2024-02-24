import { Flex, Box, Blockquote, Container, Code, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
function App() {
  return (
    <div>
      <Container size="4">
        <Flex gap="9">
            <Box height="auto">
              <Box pt="4">
                <Blockquote >
                  Perfect typography is certainly the most elusive of all arts. Sculpture in
                  stone alone comes near it in obstinacy.
                </Blockquote>
                <Box pt="4">
                  <Code>console.log()</Code>
                </Box>
              </Box>
            </Box>
            <Box height="auto">
              <Box pt="4">
                <Blockquote >
                  Perfect typography is certainly the most elusive of all arts. Sculpture in
                  stone alone comes near it in obstinacy.
                </Blockquote>
                <Box pt="4">
                  <Code>console.log()</Code>
                </Box>
              </Box>
            </Box>
            <Box height="auto">
              <Box pt="4">
                <Blockquote >
                  Perfect typography is certainly the most elusive of all arts. Sculpture in
                  stone alone comes near it in obstinacy.
                </Blockquote>
                <Box pt="4">
                  <Code>console.log()</Code>
                </Box>
              </Box>
            </Box>
        </Flex>
        <Box pt="8">
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You will need admin privileges to install and access this application.
            </Callout.Text>
          </Callout.Root>
        </Box>
      </Container>
    </div>
  )
}

export default App
