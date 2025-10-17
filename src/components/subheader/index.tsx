import { Container } from "../container";

interface SubheaderProps {
  children?: React.ReactNode
}

export function Subheader({ children }: SubheaderProps) {
  return (
    <section className="border-b-1 border-gray-700 pb-10 mb-8">
      <Container>
        {children}
      </Container>
    </section>
  )
}