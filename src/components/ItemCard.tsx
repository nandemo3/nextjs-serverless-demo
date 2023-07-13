import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export interface ItemCardProps {
  title: string
  body?: string
  url?: string
}

function ItemCard({ title, body, url }: ItemCardProps) {
  return (
    <Card sx={{ maxWidth: 270, boxShadow: 0 }} >
      {url &&
        <CardMedia
          height={270}
          width={270}
          component="img"
          image={url}
          sx={{
            'objectFit': 'contain',
            'bgcolor': '#EEE',
          }}
        />
      }
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {title}
        </Typography>
        {body && 
          <Box sx={{ height: 30 }}>
            <Typography variant="caption" color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              {body}
            </Typography>
          </Box>
        }
      </CardContent>
    </Card>
  )
}

export default ItemCard
