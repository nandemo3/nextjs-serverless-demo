import { Grid } from '@mui/material'
import ItemCard from '@/components/ItemCard'

interface ItemViewType {
  data: Promise<Response>
}

async function ItemView({ data }: ItemViewType) {
  const items = (await data.then((res) => {if(res.ok){ return res.clone().json()}})) as any[]
  return (
    <Grid container columnSpacing={{ xs: 0, md: 2 }} sx={{ overflow: 'scroll', maxHeight: 550 }}>
      {items && items.map((item: any) => {
        return (
          <Grid item key={item.id} xs={4} >
            <ItemCard {...item} />
          </Grid>
        )
      })}
    </Grid>
    )
}

export default ItemView
