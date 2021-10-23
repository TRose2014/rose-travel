import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(){
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link to="/">Snacks</Link>
      <Link to="/drinks">Drinks</Link>
      <Link to="/top5">Our Top 5 Picks</Link>
    </Box>
  )
}