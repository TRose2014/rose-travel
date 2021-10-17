import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './Header.css'

export default function Header(){
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link href="#" underline="hover">Snacks</Link>
      <Link href="#" underline="hover">Drinks</Link>
      <Link href="#" underline="hover">Our Top 5 Picks</Link>
    </Box>
  )
}