import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./src/screens/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

// div -> View
// p,  h1-h6 -> Text
// buttons -> Button / Touchable Opacity
// img -> Image
