import Navbar from './Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

export default function DashLayout({ children }) {
  return (
    <> 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        {children}
      </Box>
    </>
  )
}