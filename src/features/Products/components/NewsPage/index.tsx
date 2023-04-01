import * as React from 'react'
import ClassNames from 'classnames/bind'
import styles from './new.module.scss'
import { MainLayout } from '@/components/Layout'
import EventIcon from '@mui/icons-material/Event'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Button } from '@mui/material'
const cx = ClassNames.bind(styles)

export function NewsPage() {
  return (
    <MainLayout>
      <div className={cx('sub')}>Home {'>'} news</div>
      <div className={cx('title')}>What New's</div>
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <div className={cx('content')}>
            <img className={cx('image')} src="/src/assets/page-new-1.png" alt="image" />
            <div className={cx('information')}>
              <div className={cx('name')}>10 best ways to lorem ipsum dolor glavrida amet</div>
              <div className={cx('date')}>
                <EventIcon className={cx('icon')}></EventIcon>
                <span>October 6, 2022</span>
                <FolderOpenIcon className={cx('icon')}></FolderOpenIcon>
              </div>

              <div className={cx('description')}>
                Fusce sed maximus est, et viverra mauris. Phasellus a cursus elit. Praesent varius
                sem id felis scelerisque vehicula Sed sed pharetra velit. Vestibulum venenatis non
                venenatis erat.
              </div>
              <Button sx={{ padding: '10px 25px' }} variant="contained">
                Read more
              </Button>
            </div>
          </div>
          <div className={cx('content')}>
            <img className={cx('image')} src="/src/assets/page-new-2.png" alt="image" />
            <div className={cx('information')}>
              <div className={cx('name')}>10 best ways to lorem ipsum dolor glavrida amet</div>
              <div className={cx('date')}>
                <EventIcon className={cx('icon')}></EventIcon>
                <span>October 6, 2022</span>
                <FolderOpenIcon className={cx('icon')}></FolderOpenIcon>
              </div>

              <div className={cx('description')}>
                Fusce sed maximus est, et viverra mauris. Phasellus a cursus elit. Praesent varius
                sem id felis scelerisque vehicula Sed sed pharetra velit. Vestibulum venenatis non
                venenatis erat.
              </div>
              <Button sx={{ padding: '10px 25px' }} variant="contained">
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('content')}>
            <img className={cx('image')} src="/src/assets/page-new-3.png" alt="image" />
            <div className={cx('information')}>
              <div className={cx('name')}>10 best ways to lorem ipsum dolor glavrida amet</div>
              <div className={cx('date')}>
                <EventIcon className={cx('icon')}></EventIcon>
                <span>October 6, 2022</span>
                <FolderOpenIcon className={cx('icon')}></FolderOpenIcon>
              </div>

              <div className={cx('description')}>
                Fusce sed maximus est, et viverra mauris. Phasellus a cursus elit. Praesent varius
                sem id felis scelerisque vehicula Sed sed pharetra velit. Vestibulum venenatis non
                venenatis erat.
              </div>
              <Button sx={{ padding: '10px 25px' }} variant="contained">
                Read more
              </Button>
            </div>
          </div>
          <div className={cx('content')}>
            <img className={cx('image')} src="/src/assets/page-new-4.png" alt="image" />
            <div className={cx('information')}>
              <div className={cx('name')}>10 best ways to lorem ipsum dolor glavrida amet</div>
              <div className={cx('date')}>
                <EventIcon className={cx('icon')}></EventIcon>
                <span>October 6, 2022</span>
                <FolderOpenIcon className={cx('icon')}></FolderOpenIcon>
              </div>

              <div className={cx('description')}>
                Fusce sed maximus est, et viverra mauris. Phasellus a cursus elit. Praesent varius
                sem id felis scelerisque vehicula Sed sed pharetra velit. Vestibulum venenatis non
                venenatis erat.
              </div>
              <Button sx={{ padding: '10px 25px' }} variant="contained">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
