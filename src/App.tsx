import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { InfosProfileContext} from "./contexts/InfosProfileContext";
import { PostsInfosContext } from "./contexts/PostsInfosContext";
import { SearchContext } from "./contexts/SearchContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <InfosProfileContext>
         <PostsInfosContext>
           <SearchContext>
            <Router />
           </SearchContext>
         </PostsInfosContext>
       </InfosProfileContext>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
