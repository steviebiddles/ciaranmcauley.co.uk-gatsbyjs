import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OpenInNew from '@material-ui/icons/OpenInNew';
import * as moment from 'moment';

import './event.scss';
import Grid from '@material-ui/core/Grid';
import NavigationBottom from '../navigation/bottom';

const Event = ({ event }) => {
  const startDateTime = moment(event.startTime);
  const startDateTimeUTC = moment(event.startTime);
  const endDate = moment(event.endTime);

  return (
    <Card raised={true} square={true} className={'event'}>
      <CardMedia
        component={'img'}
        alt={`Event cover image for ${event.name}`}
        width={'720'}
        image={event.cover.source}
        title={event.name}
      />
      <CardContent>
        <Typography variant="subtitle2">
          {startDateTime.format('ddd, Do MMM \\a\\t HH:mm').toLocaleUpperCase()}
        </Typography>
        <Typography gutterBottom variant={'h6'} component="h2">
          {event.name}
          {/*https://www.facebook.com/events/{event.eventId}/*/}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<IconButton size={'small'} aria-label="open">
          <OpenInNew />
        </IconButton>*/}
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Event;
