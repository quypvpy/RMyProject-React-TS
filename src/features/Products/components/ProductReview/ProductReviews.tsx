// import * as React from 'react'

// export interface ProductReviewsProps {}

// export function ProductReviews(props: ProductReviewsProps) {
//   return <div className="">3 reviews for Rotating lounge chair</div>
// }

import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import styles from './ProductReviews.module.scss'
import ClassNames from 'classnames/bind'
import { Box, Rating } from '@mui/material'
import { FormReviews } from './FormReviews'

const cx = ClassNames.bind(styles)

export function ProductReviews() {
  // , bgcolor: 'background.paper'
  return (
    <div className={cx('wrapper')}>
      {/* <List sx={{ width: '100%', maxWidth: 800 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              className={cx('avatar')}
              alt="Remy Sharp"
              src="https://picsum.photos/id/18/367/267"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={cx('content')}>
                <div className={cx('name')}>"Brunch this weekend?"</div>
                <Rating name="read-only" size="large" value={4} readOnly />
              </div>
            }
            secondary={
              <React.Fragment>
                <Box component={'div'} className={cx('date')}>
                  February 20, 2021{' '}
                </Box>
                <Box component={'div'} className={cx('comment')}>
                  Lorem ligula malesuada molestie pellentesque nisl eu turpis.{' '}
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              className={cx('avatar')}
              alt="Remy Sharp"
              src="https://picsum.photos/id/18/367/267"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={cx('content')}>
                <div className={cx('name')}>"Brunch this weekend?"</div>
                <Rating name="read-only" size="large" value={4} readOnly />
              </div>
            }
            secondary={
              <React.Fragment>
                <Box component={'div'} className={cx('date')}>
                  February 20, 2021{' '}
                </Box>
                <Box component={'div'} className={cx('comment')}>
                  Lorem ligula malesuada molestie pellentesque nisl eu turpis.{' '}
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              className={cx('avatar')}
              alt="Remy Sharp"
              src="https://picsum.photos/id/18/367/267"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={cx('content')}>
                <div className={cx('name')}>"Brunch this weekend?"</div>
                <Rating name="read-only" size="large" value={4} readOnly />
              </div>
            }
            secondary={
              <React.Fragment>
                <Box component={'div'} className={cx('date')}>
                  February 20, 2021{' '}
                </Box>
                <Box component={'div'} className={cx('comment')}>
                  Lorem ligula malesuada molestie pellentesque nisl eu turpis.{' '}
                </Box>
              </React.Fragment>
            }
          />
        </ListItem>
      </List> */}
      <div className={cx('left')}>
        <div className={cx('image')}>
          <img src="/images/reviews-1.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="/images/reviews-2.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="/images/reviews-3.png" alt="image" />
        </div>
        <div className={cx('image')}>
          <img src="/images/reviews-4.png" alt="image" />
        </div>
      </div>
      <div className={cx('right')}>
        <FormReviews></FormReviews>
      </div>
    </div>
  )
}
