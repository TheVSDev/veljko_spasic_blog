import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "@/web/components/SessionContext"
import "@/web/styles/globals.css"
import HeadPage from "@/web/components/HeadPage"

const client = new QueryClient()
const App = ({ Component, pageProps }) => (
  <>
    <QueryClientProvider client={client}>
      <SessionProvider>
        <HeadPage />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  </>
)

export default App
