// import React, {useState, useEffect} from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { styled, useTheme } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import useMediaQuery from '@mui/material/useMediaQuery';



// const RecordGrid = styled(Grid)(({ theme }) => ({
//   marginTop: theme.spacing(4),
// }));

// const RecordCard = styled(Card)(({ theme, columnCount }) => ({
//   maxWidth: `calc(100% / ${columnCount} - ${theme.spacing(2)}px)`,
//   boxShadow: theme.shadows[3],
//   marginBottom: theme.spacing(2),
// }));

// const RecordImage = styled(CardMedia)(({ theme }) => ({
//   height: 200,
// }));

// export default function Searchresults() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up('sm'));
//   const columnCount = matches ? 4 : 2;
//   const [spotifyResults, setSpotifyResults] = useState ([])
//   const [searchParams] = useSearchParams()
//   console.log(searchParams.get('q'))

//   const handleSearch = async (searchTerm) => {
//    const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=albums`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '2b148a14a3msh12fa6ec54fe1b3fp1ed456jsnbd039561a19d',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
//         },
//     };

//     try {
//         const response = await fetch(url, options);

//         if (response.ok) {
//             const result = await response.json();
//             console.log(result);
//             setSpotifyResults(result.albums.items)
//         } else {
//             console.error('Error occurred while searching');
//         }
//     } catch (error) {
//         console.error('Error occurred while searching', error);
//     }
// };

// useEffect(() => {
// let search = searchParams.get('q')
// if (search){
//     handleSearch(search)  
// }
  

// },[searchParams])

//   return (
//     <RecordGrid container spacing={2} justifyContent="center">
//       {spotifyResults.map((record) => (
//         <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
//           <RecordCard
//             component={Link}
//             to={`/record/${record.id}`}
//             columnCount={columnCount}
//             sx={{ textDecoration: 'none' }}
//           >
//             <CardActionArea>
//               <RecordImage image={record.image} alt={record.title} />
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {record.title}
//                 </Typography>
//                 <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//                   {record.artist}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   Year: {record.year}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Genre: {record.genre}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </RecordCard>
//         </Grid>
//       ))}
//     </RecordGrid>
//   );
// }