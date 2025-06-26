import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FcDeleteDatabase } from "react-icons/fc";
const Cards = ({data}) => {
  return (
   <div className='w-70'>
    
      <Card>
      
     <CardMedia className='flex justify-items-center'>
      <img src={data.photo} alt="" />
     </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {data.details}
        </Typography>
      </CardContent>
      <CardActions className='flex bg-amber-200 justify-between'>
        <Button size="small">View</Button>
        <Button size="small">Update</Button>
        <Button className='bg-black' size="large"><FcDeleteDatabase /></Button>
      </CardActions>
    </Card>
     
   </div>
  );
};

export default Cards;