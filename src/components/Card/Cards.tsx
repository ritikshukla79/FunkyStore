import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SxProps, Theme } from '@mui/system';

function Cards({name , price , image , category}) {
  // Define the sx prop with correct typing
  const cardSx: SxProps<Theme> = {
    width: 230,
    minHeight: 300,
    maxWidth: '100%',
    boxShadow: 'md',
  };

  const aspectRatioSx: SxProps<Theme> = {
    minWidth: 100,
  };

  const titleSx: SxProps<Theme> = {
    mt: 1,
    fontWeight: 'md',
  };

  return (
    <Card sx={cardSx}>
      <CardOverflow>
        <AspectRatio sx={aspectRatioSx}>
          <img
            src={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{category}</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {name}
        </Link>

        <Typography
          level="title-md"
          sx={titleSx}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          Rs {price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="sm">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}

export default Cards;