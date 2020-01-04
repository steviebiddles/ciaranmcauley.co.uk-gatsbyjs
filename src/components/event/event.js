import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';

import './event.scss';

const Event = ({ event }) => {
  const startDateTime = moment(event.startTime);

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
        <Typography gutterBottom variant="subtitle1" color={'primary'}>
          {startDateTime.format('ddd, Do MMMM YYYY')}
        </Typography>
        <Typography variant={'h4'} component={'h2'} color={'textPrimary'}>
          {event.name}
        </Typography>
        <Typography gutterBottom variant={'subtitle2'} color={'textSecondary'}>
          {event.place.name} - {event.place.location.city}, {event.place.location.country}
        </Typography>
      </CardContent>
      <CardActions className={'event-actions'}>
        {event.ticketUri && (
          <a
            href={event.ticketUri}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <Button size="small" color="primary">
              Get Tickets
            </Button>
          </a>
        )}
        <a
          href={`https://www.facebook.com/events/${event.eventId}`}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <Button size="small" color="primary">
            Full Details
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default Event;
