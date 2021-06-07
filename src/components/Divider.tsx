import { useMediaQuery } from "@chakra-ui/media-query"


export function Divider() {
  const [isLargeScreen] = useMediaQuery("(min-width: 1280px)")

  return (
    <hr style={isLargeScreen ? {
      width: "90px",
      margin: "2rem auto",
      borderTop: "2px solid"
    } : {
      width: "60px",
      margin: "1.5rem auto",
      borderTop: "1px solid"
    }} />
  )
}