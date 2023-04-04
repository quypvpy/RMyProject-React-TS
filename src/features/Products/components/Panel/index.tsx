import { Box } from '@mui/material'
import ClassNames from 'classnames/bind'
import styles from './panel.module.scss'
import SimpleSlider from './slider'

export interface PanelProps {}

const cx = ClassNames.bind(styles)
export function Panel(props: PanelProps) {
  return (
    <Box className={cx('panel')}>
      <Box className={cx('left')}>
        <SimpleSlider></SimpleSlider>
      </Box>
      <div className={cx('right')}>
        <div className={cx('image', 'image1')}>
          {/* <img src="./src/assets/panel-3.png"></img> */}
          <img src="./images/panel-3.png"></img>
        </div>
        <div className={cx('line')}></div>
        <div className={cx('image', 'image2')}>
          <img src="./images/panel-4.png"></img>
        </div>
      </div>
    </Box>
  )
}
