import Grid from '@mui/material/Grid';
import itemsData from 'data/items.json';
import Storeitem from 'components/atoms/Storeitem';

const Store = () => {
  return (
    <>
      <h1>store</h1>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={1}>
        {itemsData.map((items, index) => {
          return (
            <Grid xs={12} sm={6} md={4} key={items.id} item>
              <Storeitem {...items} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Store;
