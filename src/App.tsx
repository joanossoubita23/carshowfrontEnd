import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './component/Login';






const queryClient=new QueryClient();
const App = () => {
  return(
  <Container maxWidth="xl">
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h3' style={{ textAlign: 'center', width: '100%' }}>
          Car Show🚔
        </Typography>
      </Toolbar>
    </AppBar>
    <QueryClientProvider client={queryClient}>
      <Login/>
    
     
    </QueryClientProvider>
    

  </Container>

 
  )
}

export default App